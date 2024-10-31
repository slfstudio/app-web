import { ModalProps } from 'react-native-modal';

export enum variantImg {
  'rectangle',
  'circle',
}

export interface PhotoModalProps extends ModalProps {
  variantImage?: keyof typeof variantImg;
  onClose?: () => void;
  text?: string;
}
