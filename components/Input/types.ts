import { ReactNode } from 'react';
import { TextInputProps } from 'react-native';

export enum inputVariant {
  'default',
  'date',
  'password',
  'phone',
  'text-area',
  'zipCode',
  'calendar',
}
export interface TextInputCustomProps extends TextInputProps {
  label?: string;
  variant?: keyof typeof inputVariant;
  icon?: string | ReactNode;
  error?: string | undefined;
  setLoadingZP?: (active: boolean) => void;
  setVisibleModalCP?: (ctive: boolean) => void;
  setZpArr?: (data: Array<any>) => void;
}
