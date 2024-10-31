import { ModalProps } from 'react-native-modal';

export interface ModalCardButtonProps extends ModalProps {
  onClose?: () => void;
  title?: string;
  cardButton?: string;
  image?: string;
  label?: string;
  onPress?: () => void;
}
