import Background from '@/components/Background';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import ErrorModal from '@/components/ErrorModal';
import { fetchQuoteHomeSend, setResetError } from '@/store/reducer/catalogsGenericReducer';
import { useDispatch, useSelector } from 'react-redux';
import { View } from 'react-native';
import { Formik } from 'formik';
import { homeInfoValidationSchema } from '@/utils/validationsSchema';
import Spacing from '@/components/Spacing';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Loading from '@/components/Loading';
import { RootState } from '@/store/store';
import Dropdown from '@/components/Dropdown';
import { useNavigation } from 'expo-router';

export default function HomeInfoScreen() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { profile, loggedIn } = useSelector((state: RootState) => state.userReducer);

  const { navigate } = useNavigation<any>();
  const [isLoading, setIsLoading] = useState(false);
  //info
  const [modalMessage, setModalMessage] = useState({ text: '', title: '', onClose: () => null });
  const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false);

  const initialValues =
    loggedIn && profile.detalles.complete_data
      ? {
          name: profile.nombre || '',
          email: profile.email || '',
        }
      : {};
  const handleSubmit = async (values) => {
    try {
      setIsLoading(true);
      const response = await dispatch(fetchQuoteHomeSend(values));

      if (Object.keys(response.error).length && response.error.message === 'Rejected') {
        setIsLoading(false);
        setIsVisibleModal(true);
        setModalMessage({ title: '', text: t('warnings.somethings_missing'), onClose: () => handleDismissError() });
      } else {
        setIsVisibleModal(true);
        setModalMessage({
          title: t('text.thank_you_for_your_trust'),
          text: t('text.we_will_contact_you_shortly_to_send'),
          onClose: () => handleModal(),
        });
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Error fetching quote travel data:', error);
      setIsLoading(false);
    }
  };
  const handleModal = () => {
    setIsVisibleModal(false);
    // Cambiar ruta
    navigate('QuoteInsurance');
  };

  const handleDismissError = () => {
    setIsVisibleModal(false);
    dispatch(setResetError());
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Background className="px-md pt-md">
      <View className="flex-1 pb-2xl justify-between">
        {/* form */}
        <Formik
          validationSchema={homeInfoValidationSchema}
          initialValues={initialValues}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, setFieldValue, setValues }) => {
            return (
              <>
                <View>
                  <View className="flex-row  justify-between">
                    <View className="w-[30%]">
                      <Dropdown
                        onSelect={(value) => setFieldValue('phone_code', value.value)}
                        error={errors.phone_code}
                        variant="phone"
                        label={t('label.mobile_phone')}
                        placeholder={t('placeholders.select')}
                      />
                    </View>

                    <View className="w-[65%]">
                      <Input
                        value={values.phone}
                        onChangeText={handleChange?.('phone')}
                        error={errors.phone}
                        keyboardType="numeric"
                        returnKeyType="done"
                        maxLength={10}
                      />
                    </View>
                  </View>
                  <Input
                    label={t('label.name')}
                    value={values.name}
                    onChangeText={handleChange?.('name')}
                    error={errors.name}
                  />
                  <Spacing size="M" />
                  <Input
                    label={t('label.email')}
                    value={values.email}
                    onChangeText={handleChange?.('email')}
                    error={errors.email}
                  />
                </View>
                <Spacing size="L" />
                <View>
                  <Spacing />
                  <Button variant="border" text={t('button.continue')} onPress={() => handleSubmit()} />
                </View>
              </>
            );
          }}
        </Formik>
      </View>

      {/* <InsureForms variant="home_form" onPress={handleSubmit} dataDropdown={dataDropdown} /> */}

      <ErrorModal
        isVisible={isVisibleModal}
        onClose={() => setIsVisibleModal(false)}
        textButtonOk={t('button.ok')}
        icon="InfoCircle"
        iconSize={40}
        text={modalMessage.text}
        title={modalMessage.title}
      />
    </Background>
  );
}
