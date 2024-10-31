import { ModalProps } from 'react-native-modal';

export interface ModalInputProps extends ModalProps {
  onClose?: () => void;
  onCancel?: () => void;
  onOk?: () => void;
  onPress?: () => void;
  title?: string | any;
  inputLabel?: string | any;
  inputPHolder?: string | any;
  textButtonOk?: string;
}
