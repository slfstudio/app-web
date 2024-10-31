import { TouchableOpacityProps } from 'react-native';

export enum cardButtonVariant {
  'primary',
  'white',
  'white-small',
  'primary-large',
}

export interface CardButtonCustomProps extends TouchableOpacityProps {
  variant?: keyof typeof cardButtonVariant;
  image: string | any;
  label: string | any;
}
