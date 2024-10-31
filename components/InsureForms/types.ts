import { buttonVariant } from '../Button/types';

enum modelVariant {
  'addPolicy_form',
  'car_form',
  'health_form',
  'home_form',
  'quote_car_form',
}
interface ItemFormProps {
  level: number;
  label: string;
  placeholder: string;
  name?: string;
  type_input: string;
  button_info?: boolean;
  optionalText: string;
  labels: [string];
  data?: [{ id: number; text: string; value: number }];
  handleChange?: (text: string) => void | undefined;
  setFieldValue?: (text: string) => void;
  values: object;
  errors: object;
}
interface InsueFormsProps {
  variant: keyof typeof modelVariant;
  onPress: (data: object) => void;
  onCancel?: () => void;
  variantBtnContinue?: keyof typeof buttonVariant;
  dataDropdown?: object;
}
export { modelVariant, InsueFormsProps, ItemFormProps };
