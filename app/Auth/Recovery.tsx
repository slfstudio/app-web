import { View } from 'react-native';
import Background from '@/components/Background';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Paper from '@/components/Paper';
import { useTranslation } from 'react-i18next';
import { Icon } from '@/components/Icon';
import Spacing from '@/components/Spacing';
import ErrorModal from '@/components/ErrorModal';
import { useCallback, useState } from 'react';
import { Formik } from 'formik';
import { recoverPasswordVaidationSchema } from '@/utils/validationsSchema';
import { fetchRecovery, setResetRecover } from '@/store/reducer/userReducer';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '@/store/store';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import ModalTextButton from '@/components/ModalTextButton';

import beachImg from '@/assets/images/home/beach.png';
import churchImg from '@/assets/images/home/church.png';
import workingImg from '@/assets/images/home/working.png';
import CircleImages from '@/components/CircleImages';

function RecoverPassword() {
  const { recoveryDone } = useSelector((state: RootReducer) => state.userReducer);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [modalMessage, setModalMessage] = useState({ title: '', text: '' });
  const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false);
  const { goBack } = useNavigation();
  const handleModal = () => {
    setIsVisibleModal(false);
  };
  useFocusEffect(
    useCallback(() => {
      if (recoveryDone) {
        setModalMessage({
          title: t('text.great'),
          text: t('text.you_will_soon_receive'),
          onClose: () => {
            goBack();
          },
        });
        setIsVisibleModal(true);
      }
      return () => {
        dispatch(setResetRecover());
      };
    }, [recoveryDone]),
  );
  const doPasswordRecovery = async (values: any) => {
    dispatch(fetchRecovery(values));
  };
  return (
    <View className=" flex-1 flex-row px-md py-xl ">
      <View className="items-center justify-center  flex-1 w-30%">
        <Paper className='flex-1 bg-white p-[16px] rounded w-[50%]'>
          <View className='flex-1 items-center'>
          <Icon name="NounLock" size={160}/>
          </View>
          <Formik
            validationSchema={recoverPasswordVaidationSchema}
            initialValues={{ email: '' }}
            onSubmit={(values) => {
              doPasswordRecovery(values);
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
              <View className="flex-1 justify-between ">
                <Input
                  label={t('label.email')}
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  error={errors.email}
                />
                <Spacing />
                <Button variant="border" text={t('button.continue')} onPress={() => handleSubmit()} />
              </View>
            )}
          </Formik>
        </Paper>
      </View>
      <View className="flex-1 h-[80%] ">
        <CircleImages image={beachImg} imagetwo={churchImg} imagethree={workingImg} />
      </View>
      <ErrorModal isVisible={isVisibleModal} onClose={handleModal} {...modalMessage} />
    </View>
  );
}

export default RecoverPassword;
