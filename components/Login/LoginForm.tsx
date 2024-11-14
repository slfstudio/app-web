import Button from '@/components/Button';
import Input from '@/components/Input';
import RadioButton from '@/components/RadioButton';
import Spacing from '@/components/Spacing';
import { fetchLogin, setCredentials, setResetCredentials } from '@/store/reducer/userReducer';
import { RootReducer } from '@/store/store';
import { loginValidationSchema } from '@/utils/validationsSchema';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

export default function LoginForm() {
  const { email, password, remember } = useSelector((state: RootReducer) => state.userReducer);
  const { t } = useTranslation();
  const dispatch = useDispatch<any>();

  return (
    <Formik
      validationSchema={loginValidationSchema}
      initialValues={{ email, password, remember }}
      onSubmit={(values) => {
        if (values.remember) {
          dispatch(setCredentials(values));
        } else {
          dispatch(setResetCredentials());
        }
        dispatch(fetchLogin(values));
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, setFieldValue }) => (
        <>
          <Input
            value={values.email}
            label={t('label.email')}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            error={errors.email}
          />
          <Spacing size="M" />
          <Input
            label={t('label.password')}
            variant="password"
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            error={errors.password}
            value={values.password}
          />
          <Spacing size="M" />
          <RadioButton
            variant="square"
            text={t('label.remember')}
            value={values.remember}
            onValueChange={() => setFieldValue('remember', !values.remember)}
          />

          <Spacing size="M" />
          <Button text={t('button.log_in')} variant="border" onPress={() => handleSubmit()} />
        </>
      )}
    </Formik>
  );
}
