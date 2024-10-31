import { ViewProps } from 'react-native';
export enum sizesVariant {
  'XXL',
  'XL',
  'L',
  'M',
  'S',
  'XS',
}

export interface SpacingCustomProps extends ViewProps {
  size?: keyof typeof sizesVariant;
  horizontal?: boolean;
}
