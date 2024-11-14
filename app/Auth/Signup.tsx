import Background from '@/components/Background';
import Input from '@/components/Input';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import Spacing from '@/components/Spacing';
import Text from '@/components/Text';
import Switch from '@/components/Switch';
import Button from '@/components/Button';
import { Formik } from 'formik';
import { signupValidationSchema } from '@/utils/validationsSchema';
import RadioButtonsActions from '@/components/RadioButtonsActions';
import { genderData, nationalityData } from './model';
import { colors } from '@/config';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSignup, setResetSignup } from '@/store/reducer/userReducer';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { RootState } from '@/store/store';
import ErrorModal from '@/components/ErrorModal';
import Paper from '@/components/Paper';

import beachImg from '@/assets/images/home/beach.png';
import churchImg from '@/assets/images/home/church.png';
import workingImg from '@/assets/images/home/working.png';
import CircleImages from '@/components/CircleImages';

export default function Signup() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { signupDone } = useSelector((state: RootState) => state.userReducer);
  const { goBack } = useNavigation();
  const [modalMessage, setModalMessage] = useState({ title: '', text: '' });
  const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false);
  const handleModal = () => {
    setIsVisibleModal(false);
  };
  useFocusEffect(
    useCallback(() => {
      if (signupDone) {
        setModalMessage({
          title: t('text.great'),
          text: t('text.registration_completed'),
          onClose: () => {
            goBack();
          },
        });
        setIsVisibleModal(true);
      }
      return () => {
        dispatch(setResetSignup());
      };
    }, [signupDone]),
  );

  return (
    <Background className="px-md pt-md">
      <View className='flex-row'>
        <Paper> 
      <View className="justify-between pb-3xl">
        <Formik
          validationSchema={signupValidationSchema}
          initialValues={{
            name: '',
            lastName: '',
            password: '',
            email: '',
            confirmPassword: '',
            birthdate: '',
            gender: '',
            nationality: '',
            privacyNotice: false,
            termsAndConditions: false,
          }}
          onSubmit={(values) => {
            if (!values.privacyNotice) {
              setIsVisibleModal(true);
              setModalMessage({
                title: t('warnings.somethings_missing'),
                text: t('warnings.to_sign_up_you_must_agree_to_the_privacy_notice'),
              });
              return;
            }
            if (!values.termsAndConditions) {
              setIsVisibleModal(true);
              setModalMessage({
                title: t('warnings.somethings_missing'),
                text: t('warnings.to_sign_up_you_must_agree_to_the_terms_and_conditions'),
              });
              return;
            }
            dispatch(fetchSignup(values));
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, setFieldValue }) => (
            <>
              <Input
                label={t('label.names')}
                value={values.name}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                error={errors.name}
              />
              <Spacing size="M" />
              <Input
                label={t('label.lastname')}
                value={values.lastName}
                onChangeText={handleChange('lastName')}
                onBlur={handleBlur('lastName')}
                error={errors.lastName}
              />
              <Spacing size="M" />
              <Input
                label={t('label.email')}
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                error={errors.email}
              />
              <Spacing size="M" />
              <Input
                label={t('label.password')}
                variant="password"
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                error={errors.password}
              />
              <Spacing size="M" />
              <Input
                label={t('label.confirm_new_password')}
                variant="password"
                value={values.confirmPassword}
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                error={errors.confirmPassword}
              />
              <Spacing size="M" />
              <View>
                <Text className="text-black">{t('label.gender')}</Text>
                <Spacing size="M" />

                <RadioButtonsActions
                  options={genderData}
                  selectOption={(value: Number) => setFieldValue('gender', value)}
                  value={values.gender}
                  error={errors.gender}
                />
              </View>
              <Spacing size="M" />
              <Input
                label={t('label.birth_date')}
                variant="date"
                value={values.birthdate}
                onChangeText={handleChange('birthdate')}
                onBlur={handleBlur('birthdate')}
                error={errors.birthdate}
                placeholder={t('placeholders.mm_dd_yyyy')}
              />
              <Spacing size="M" />
              <Text className="text-black">{t('label.nationality')}</Text>
              <Spacing size="M" />
              <RadioButtonsActions
                options={nationalityData}
                selectOption={(value: Object) => setFieldValue('nationality', value)}
                value={values.nationality}
                error={errors.nationality}
              />
              <Spacing size="XL" />

              <Switch
                onSwitchBackgroundColor={colors['pink-light']}
                switchBackgroundColor={colors.gray5}
                text={t('links.i_have_read_and_accept_the_privacy')}
                onChangeValue={(value) => setFieldValue('privacyNotice', value)}
              />

              <Spacing size="M" />

              <Switch
                onSwitchBackgroundColor={colors['pink-light']}
                switchBackgroundColor={colors.gray5}
                text={t('links.i_have_read_and_accept_the_terms')}
                onChangeValue={(value) => setFieldValue('termsAndConditions', value)}
              />

              <Spacing size="XL" />
              <Button text={t('button.signup')} onPress={() => handleSubmit()} variant="border" />
            </>
          )}
        </Formik>

      </View>
      </Paper>
      <View className="flex-1 h-[60%] ">
        <CircleImages image={beachImg} imagetwo={churchImg} imagethree={workingImg} />
      </View>
      </View>
      <ErrorModal isVisible={isVisibleModal} onClose={handleModal} {...modalMessage} />
    </Background>
  );
}
