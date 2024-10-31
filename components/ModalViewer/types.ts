export interface ModalViewerProps {
  isVisible: boolean;
  onPressAction?: () => void;
  onClose?: () => void;
  imageModal: object;
  text?: string;
}
