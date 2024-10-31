import Background from '@/components/Background';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { View } from 'react-native';
import { Formik } from 'formik';
import Dropdown from '@/components/Dropdown';
import Spacing from '@/components/Spacing';
import Input from '@/components/Input';
import RadioButtonsActions from '@/components/RadioButtonsActions';
import Button from '@/components/Button';
import { carFormValidationSchema } from '@/utils/validationsSchema';
import { setQuoteUser } from '@/store/reducer/catalogsCarReducer';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { formatUserDate } from '@/utils/datesUtils';
import { useNavigation } from 'expo-router';
//personal info car
export default function InsureCarScreen() {
  const { t } = useTranslation();
  const { navigate } = useNavigation<any>();
  const dispatch = useDispatch();

  // Add this selector to get user data from the Redux store
  const { profile, loggedIn } = useSelector((state: RootState) => state.userReducer);
  const nextStep = (values) => {
    dispatch(setQuoteUser(values));
    navigate('YourQuoteScreen');
  };

  // Create initial values based on user profile if logged in
  const initialValues =
    loggedIn && profile.detalles.complete_data
      ? {
          name: profile.nombre || '',
          email: profile.email || '',
          phone_code: profile?.telefonos?.telefono_lada || '',
          phone: profile.telefonos?.[0]?.telefono || '',
          postalCode: profile.direcciones?.[0]?.codigo_postal || '',
          gender: profile.gender || '',
          birthdate: formatUserDate(profile.detalles.cumpleanos_short) || '',
          gender: profile.detalles.gender ? (profile?.detalles?.gender === 'Masculino' ? 2 : 1) : '',
        }
      : {};
  return (
    <Background className="px-md pt-md">
      {/* <InsureForms variant="car_form" onPress={nextStep} /> */}
      <View className="flex-1 pb-2xl justify-between">
        {/* form */}
        <Formik
          validationSchema={carFormValidationSchema}
          initialValues={initialValues}
          onSubmit={(values) => {
            nextStep(values);
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, setFieldValue }) => (
            <>
              <Input
                label={t('label.name')}
                error={errors.name}
                onChangeText={handleChange?.('name')}
                value={values.name}
              />
              <Spacing size="XL" />
              <Input
                value={values.email}
                label={t('label.email')}
                error={errors.email}
                onChangeText={handleChange?.('email')}
              />
              <Spacing />
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
                    keyboardType="numeric"
                    onChangeText={handleChange?.('phone')}
                    error={errors.phone}
                    maxLength={10}
                  />
                </View>
              </View>
              <Spacing size="L" />
              <Spacing size="L" />
              <Input
                label={t('label.zip_code')}
                value={values.postalCode}
                onChangeText={handleChange?.('postalCode')}
                error={errors.postalCode}
                keyboardType="numeric"
                returnKeyType="done"
              />
              <Spacing size="L" />

              <RadioButtonsActions
                options={[
                  { id: 1, text: 'male', value: 1 },
                  { id: 2, text: 'female', value: 2 },
                ]}
                selectOption={(value: Object) => setFieldValue('gender', value)}
                value={values.gender}
                error={errors.gender}
                label={t('label.gender')}
              />
              <Spacing size="L" />
              <Input
                placeholder={t('placeholders.mm_dd_yyyy')}
                label={t('label.birth_date')}
                variant="date"
                value={values.birthdate}
                onChangeText={handleChange?.('birthdate')}
                error={errors.birthdate}
              />

              <Spacing size="L" />
              <View>
                <Button variant={'border'} text={t('button.continue')} onPress={() => handleSubmit()} />
              </View>
            </>
          )}
        </Formik>
      </View>
    </Background>
  );
}
