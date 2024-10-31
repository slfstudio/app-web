import { ModalProps } from 'react-native-modal';

export interface ModalTextButtonProps extends ModalProps {
  onClose?: () => void;
  title?: string;
  onPress?: () => void;
}
