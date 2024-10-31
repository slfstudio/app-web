import { TouchableOpacityProps } from 'react-native';

export enum rateExpandableVariants {
  'main',
  'inOut',
  'single',
}

export interface RateExpandableCustomProps extends TouchableOpacityProps {
  variant?: keyof typeof rateExpandableVariants;
  title?: string | any;
  amount?: string | any;
  amountIn?: string | any;
  amountOut?: string | any;
  amountSingle?: string | any;
  annual?: string | any;
  semiAnnual?: string | any;
  quarterly?: string | any;
  monthly?: string | any;
}
