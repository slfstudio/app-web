import { Platform, TouchableOpacity, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Icon } from '@/components/Icon';
import Text from '@/components/Text';
import { useActionSheet } from '@expo/react-native-action-sheet';
import { useNavigation } from 'expo-router';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { formatDate } from '@/utils/datesUtils';
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';
import * as mime from 'react-native-mime-types';
import { Image } from 'expo-image';
import { colors } from '@/config';
import ErrorModal from '../ErrorModal';
import * as ImageManipulator from 'expo-image-manipulator';
import Loading from '../Loading';

export default function UploadPdf(text = 'upload pdf...') {
  const { t } = useTranslation();
  const { navigate } = useNavigation<any>();
  const { showActionSheetWithOptions } = useActionSheet();
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [count, setCount] = useState(1);
  const [dataB64, setDataB64] = useState('');
  const [documentType, setDocumentType] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalText, setModalText] = useState('');
  const CANCEL_INDEX = 3;
  const actionSheetActionEvent = () => {
    const options = ['Cámara', 'Galería', 'PDF', 'Cancelar'];
    const cancelButtonIndex = CANCEL_INDEX;
    const destructiveButtonIndex = CANCEL_INDEX;
    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
        title: t('please_select_an_option'),
      },
      (selectedIndex: number) => {
        validateSelectedOption(selectedIndex);
      },
    );
  };

  const validateSelectedOption = (selectedOption: number) => {
    switch (selectedOption) {
      case 0:
        navigate('CameraScreen', { screen: 'ConfigurationScreen' });
        break;
      case 1:
        pickImage();
        break;
      case 2:
        pickerDocument();
        break;
    }
  };

  const FileApiJSon = (data: string) => {
    let form = new FormData();
    form.append('file', data);
    setLoading(true);
    axios
      .post('http://108.163.134.15:90/read-pdf-file', form)
      .then((response) => {
        console.log('response--> OCR', response.data);
        setImage(response.data.base_64 ? response.data.base_64 : '');
        let dat = response.data;

        let dateOfIssue = dat.policy.vigencyInit !== null ? formatDate(dat.policy.vigencyInit) : null;
        let expireOn = dat.policy.vigencyEnd !== null ? formatDate(dat.policy.vigencyEnd) : null;
        let insuranceData = {
          id: dat.policy.insuranceId !== null ? dat.policy.insuranceId : '',
          telefono: dat.policy.insurancePhone !== null ? dat.policy.insurancePhone : '',
        };

        if (!dat.policy.code) {
          if (count >= 3) {
            setModalText(t('click_on_continue_and_manually'));
            setModalVisible(true);
          } else {
            setModalText(t('try_uploading_a_photo_of_the_policy_again'));
            setModalVisible(true);
            setImage(null);
            setCount(count + 1);
          }
          setDocumentType(null);
        } else {
          ///setCount(0)
          setDocumentType('pdf');
        }

        quoteCollectorData({
          PolicyAddStep2: {
            policyNumber: dat.policy.code,
            dateOfIssue: dateOfIssue,
            expireOn: expireOn,
            insuranceData: insuranceData,
          },
        })
          .then(() => {
            setLoading(false);
          })
          .finally(() => {
            setLoading(false);
          });

        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        attemptsCounter(2);
        console.log('error', error.toString());
        alert(error.toString());
      });
  };

  const attemptsCounter = (type_val) => {
    if (count >= 3) {
      setModalText(t('click_on_continue_and_manually'));
      setModalVisible(true);
      if (type_val === 2) {
        setImage(null);
      }
    } else {
      setModalText(t('try_uploading_a_photo_of_the_policy_again'));
      setModalVisible(true);
      setImage(null);
      setCount(count + 1);
    }
  };

  const imageApiJSON = async (data) => {
    try {
      setDataB64(JSON.stringify(data));
      console.log('se enviará...');
      setLoading(true);
      axios
        //image urlConst
        .post('http://108.163.134.15:90/read-base64', data)
        .then((response) => {
          let dat = response.data;
          delete dat.base_64;

          let dateOfIssue = dat.policy.vigencyInit !== null ? formatDate(dat.policy.vigencyInit) : null;
          let expireOn = dat.policy.vigencyEnd !== null ? formatDate(dat.policy.vigencyEnd) : null;
          let insuranceData = {
            id: dat.policy.insuranceId !== null ? dat.policy.insuranceId : '',
            telefono: dat.policy.insurancePhone !== null ? dat.policy.insurancePhone : '',
          };
          //console.log('respuesta OCR ', insuranceData)

          if (!dat.policy.code) {
            if (count >= 3) {
              setModalText(t('click_on_continue_and_manually'));
              setModalVisible(true);
            } else {
              setModalText(t('try_uploading_a_photo_of_the_policy_again'));
              setModalVisible(true);
              setImage(null);
              setCount(count + 1);
            }
            setDocumentType(null);
          } else {
            setDocumentType('image');

            ///setCount(0)
          }
          console.log('intentos::', count);

          quoteCollectorData({
            PolicyAddStep2: {
              policyNumber: dat.policy.code,
              dateOfIssue: dateOfIssue,
              expireOn: expireOn,
              insuranceData: insuranceData,
            },
          })
            .then(() => {
              setLoading(false);
            })
            .finally(() => {
              setLoading(false);
            });
        })
        .catch((error) => {
          console.log(350, error.message);
          attemptsCounter(1);
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (e) {
      console.log('error==>', e);
    }
  };

  const pickerDocument = async () => {
    try {
      let result = await DocumentPicker.getDocumentAsync({
        type: 'application/pdf',
        multiple: false,
        copyToCacheDirectory: true,
      });
      result.type = mime.lookup(result.assets[0].uri.split('/').pop());

      if (!result.canceled) {
        let data = {
          name: result.assets[0].name,
          uri: result.assets[0].uri,
          type: result.type,
        };
        FileApiJSon(data);
      }
    } catch (error) {
      console.log('ErrorDOCUMENT:', error);
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 0.5,
    });

    result.type = mime.lookup(result.assets[0].uri.split('/').pop());
    if (!result.canceled) {
      try {
        let resizedImage = await ImageManipulator.manipulateAsync(
          result.assets[0].uri,
          [
            {
              resize: {
                width: result.assets[0].width,
                height: result.assets[0].height,
              },
            },
          ],
          { format: result.type.split('/').pop(), base64: true },
        );

        setImage(resizedImage.base64);
        let formData = new FormData();

        formData.append('base_64', resizedImage.base64);
        setDocumentType('image');
        imageApiJSON(formData);
      } catch (e) {
        console.log('error===>', e);
      }
    }
  };

  const mediaPermissions = async () => {
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };

  useEffect(() => {
    mediaPermissions();
    return () => {
      setCount(1);
    };
  }, []);

  if (loading) {
    return <Loading withText={false} />;
  }

  return (
    <>
      <TouchableOpacity onPress={actionSheetActionEvent} className="w-full">
        <View className="border border-dashed border-gray-400 items-center justify-center rounded-lg bg-gray-100 h-[150px] p-6">
          {documentType === 'image' && !loading && attemptsCounter ? (
            <Image
              className="w-25 h-25 mb-4 rounded-full border border-red-500"
              source={{ uri: `data:image/png;base64,${image ? image : ''}` }}
            />
          ) : documentType === 'pdf' ? (
            <View className="flex-col bg-blue-500 items-center justify-center w-[50px] h-[50px] rounded-full">
              <Icon name="SvgPdf" size={30} />
            </View>
          ) : (
            <Icon name="SvgPdf" size={30} />
          )}
          <Text variant="Body-Small-Regular" className="text-center w-[250px] mt-4">
            {t('button.upload_a_pdf_of_your_policy')}
          </Text>
        </View>
      </TouchableOpacity>
      <ErrorModal isVisible={modalVisible} text={modalText} onClose={() => setModalVisible(false)} />
    </>
  );
}
