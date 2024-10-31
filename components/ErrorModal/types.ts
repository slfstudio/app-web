import { ReactNode } from 'react';
import { ModalProps } from 'react-native-modal';
import { IconsType } from '../Icon/iconsList/types';

export interface ErrorModalProps extends ModalProps {
  onClose?: () => void;
  title?: string;
  text?: string;
  textTwo?: string;
  textThree?: string;
  subtitle?: string;
  subtitleTwo?: string;
  subtitleThree?: string;
  onCancel?: () => void;
  textButtonCancel?: string;
  textButtonOk?: string;
  icon?: keyof IconsType;
  iconSize?: number;
  onOk?: () => void;
}
