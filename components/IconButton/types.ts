import { TouchableOpacityProps } from 'react-native';

export enum buttonVariant {
  'primary',
  'white',
  'dark1',
  'dark4',
}

export interface ButtonCustomProps extends TouchableOpacityProps {
  variant?: keyof typeof buttonVariant;
  iconName: string | any;
  label?: string;
}
