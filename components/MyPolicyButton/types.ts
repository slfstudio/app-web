import { TouchableOpacityProps } from 'react-native';
import { IconsType } from '../Icon/iconsList/types';

export enum MyPolicyButtonVariant {
  'editable',
}

export interface MyPolicyButtonProps extends TouchableOpacityProps {
  variant?: keyof typeof MyPolicyButtonVariant;
  title: string;
  name: string;
  policy: string;
  icon: keyof IconsType;
}
