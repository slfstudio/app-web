import { TouchableOpacityProps } from 'react-native';

export enum buttonVariant {
  'primary',
  'secondary',
  'facebook',
  'google',
  'black',
  'border',
  'disabled',
  'image',
}
export interface ButtonCustomProps extends TouchableOpacityProps {
  variant?: keyof typeof buttonVariant;
  text: string;
}
