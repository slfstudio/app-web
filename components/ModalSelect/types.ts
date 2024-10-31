import { ModalProps } from 'react-native-modal';

export interface ModalSelectProps extends ModalProps {
  onClose?: () => void;
  onCancel?: () => void;
  onOk?: () => void;
  title?: string;
  label?: string;
  onPress?: () => void;
}
