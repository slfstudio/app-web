import { TouchableOpacityProps } from 'react-native';

export enum RatesDropdownVariants {
  'premium',
  'solution',
}

export interface RatesDropdownProps extends TouchableOpacityProps {
  variant: keyof typeof RatesDropdownVariants;
  title: string | any;
  rateItem: object;
}
