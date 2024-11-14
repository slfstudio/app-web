import Input from '@/components/Input';
import Spacing from '@/components/Spacing';
import UploadPdf from '@/components/UploadPdf';
import { Pressable, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Icon } from '@/components/Icon';
import Dropdown from '@/components/Dropdown';
import { InsueFormsProps, ItemFormProps } from './types';
import { addPolicyForm, carForm, homeForm, healthForm, quoteCarFrom, addBeneficiaryForm } from './models';
import SeparatorText from '@/components/SeparatorText';
import { Formik } from 'formik';
import RadioButtonsActions from '../RadioButtonsActions';
import Button from '../Button';
import {
  addBeneficiaryValidationSchema,
  addPolicyFormValidationSchema,
  carFormValidationSchema,
  healthFormValidationSchema,
  homeFormValidationSchema,
  quoteCarFormValidationSchema,
} from '@/utils/validationsSchema';

const data = [
  { label: 'One', value: '1' },
  { label: 'Two', value: '2' },
  { label: 'Three', value: '3' },
  { label: 'Four', value: '4' },
  { label: 'Five', value: '5' },
];
export default function InsureForms({ variant, onPress, onCancel, variantBtnContinue, dataDropdown }: InsueFormsProps) {
  const { t } = useTranslation();
  const ItemForm = ({ handleChange, setFieldValue, values, errors, ...props }: ItemFormProps) => {
    switch (props.type_input) {
      case 'dropdown':
        return (
          <View className={props.button_info ? 'flex-row items-center' : ''}>
            <View className={props.button_info ? 'w-[60%]' : ''}>
              <Dropdown
                optionalText={t(props.optionalText)}
                placeholder={t(props.placeholder)}
                label={t(props.label)}
                data={(dataDropdown && dataDropdown[props.name]) || data}
                error={errors[props.name]}
                onSelect={(value) => setFieldValue(props.name, value.value)}
              />
            </View>
            {props.button_info && (
              <>
                <Spacing horizontal size="S" />
                <Pressable>
                  <Icon name="InfoCircle" size={20} />
                </Pressable>
              </>
            )}
          </View>
        );
      case 'radio-button':
        return (
          <RadioButtonsActions
            optionalText={t(props.optionalText)}
            options={props.data}
            selectOption={(value: Object) => setFieldValue(props.name, value)}
            value={values[props.name]}
            error={errors[props.name]}
            label={props.label}
          />
        );
      case 'upload':
        return <UploadPdf />;
      case 'separator':
        return <SeparatorText text={t(props.label)} />;
      default:
        return (
          <Input
            {...props}
            label={t(props.label)}
            value={values[props.name]}
            placeholder={props.placeholder ? t(props.placeholder) : undefined}
            onChangeText={handleChange?.(props.name)}
            error={errors[props.name]}
          />
        );
    }
  };

  const forms = {
    addPolicy_form: addPolicyForm,
    car_form: carForm,
    health_form: healthForm,
    home_form: homeForm,
    quote_car_form: quoteCarFrom,
    add_beneficiary_form: addBeneficiaryForm,
  };
  const validationForms = {
    addPolicy_form: addPolicyFormValidationSchema,
    car_form: carFormValidationSchema,
    health_form: healthFormValidationSchema,
    home_form: homeFormValidationSchema,
    quote_car_form: quoteCarFormValidationSchema,
    add_beneficiary_form: addBeneficiaryValidationSchema,
  };

  return (
    <>
      <View className="flex-1 pb-2xl justify-between">
        {/* form */}
        <Formik
          validationSchema={validationForms[variant]}
          initialValues={{}}
          onSubmit={(values) => {
            onPress?.(values);
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, setFieldValue }) => (
            <>
              <View>
                {forms[variant].map((field: any) => (
                  <>
                    <ItemForm
                      key={field.level}
                      {...{ handleChange, handleBlur, handleSubmit, values, errors, setFieldValue, ...field }}
                    />
                    <Spacing size="M" />
                  </>
                ))}
              </View>
              <Spacing size="L" />
              <View>
                {onCancel && <Button variant="border" text={t('button.cancel')} onPress={onCancel} />}
                <Spacing />
                <Button
                  variant={variantBtnContinue || 'border'}
                  text={t('button.continue')}
                  onPress={() => handleSubmit()}
                />
              </View>
            </>
          )}
        </Formik>
      </View>
    </>
  );
}
