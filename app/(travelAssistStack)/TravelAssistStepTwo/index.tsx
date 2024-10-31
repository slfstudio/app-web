import Dropdown from '@/components/Dropdown';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Spacing from '@/components/Spacing';
import Text from '@/components/Text';
import { travelAssistStepTwoValidationSchema } from '@/utils/validationsSchema';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { setTravelInfo } from '@/store/reducer/travelAssistReducer';
import { countryCatalog } from '@/mocks/catalogs';

export default function TravelAssistStepTwo({ onStepChange }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { countries } = useSelector((state: RootState) => state.majorHealthReducer);

  const { profile, loggedIn } = useSelector((state: RootState) => state.userReducer);

  const initialValues =
    loggedIn && profile?.detalles?.complete_data
      ? {
          name: profile?.nombre || '',
          lastName: '', // Add lastName field
          email: profile?.email || '',
          phone_code: profile?.telefonos?.telefono_lada || '',
          phone: profile?.telefonos?.[0]?.telefono || '',
          residence_country: '', // Add residence_country field
        }
      : {
          name: '',
          lastName: '',
          email: '',
          phone_code: '',
          phone: '',
          residence_country: '',
        };

  return (
    <View className="flex-1 pb-2xl justify-between px-md pt-2">
      <Text>{t('label.step_2')}</Text>
      <Text variant="Body-Medium-Bold" className="text-dark">
        {t('label.personal_data')}
      </Text>
      <Spacing />
      <Formik
        validationSchema={travelAssistStepTwoValidationSchema}
        initialValues={initialValues} // Use the initialValues object
        onSubmit={(values) => {
          dispatch(setTravelInfo({ ...values }));
          onStepChange();
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, setFieldValue }) => (
          <>
            <Input
              label={t('label.first_name')}
              value={values.name}
              onChangeText={handleChange?.('name')}
              error={errors.name}
            />
            <Spacing />
            <Input
              label={t('label.last_name')}
              value={values.lastName}
              onChangeText={handleChange?.('lastName')}
              error={errors.lastName}
            />
            <Spacing />
            <Input
              label={t('label.email')}
              value={values.email}
              onChangeText={handleChange?.('email')}
              error={errors.email}
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
                  keyboardType="numeric"
                  onChangeText={handleChange?.('phone')}
                  error={errors.phone}
                  maxLength={10}
                />
              </View>
            </View>
            <Spacing />
            <Dropdown
              data={countryCatalog}
              label={t('label.country_of_residence')}
              placeholder={t('placeholders.select')}
              error={errors?.residence_country}
              onSelect={(value) => setFieldValue('residence_country', value.label)}
              value={values.residence_country} // Add value prop
            />
            <Spacing />
            <View>
              <Button variant={'border'} text={t('button.continue')} onPress={() => handleSubmit()} />
            </View>
          </>
        )}
      </Formik>
    </View>
  );
}
