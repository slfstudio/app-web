import ButtonBase from './ButtonBase';
import ButtonGoogle from './ButtonGoogle';
import ImageButton from './ImageButton';
import { ButtonCustomProps } from './types';

function Input({ ...props }: ButtonCustomProps) {
  switch (props.variant) {
    case 'image':
      return <ImageButton {...props} />;
    case 'google':
      return <ButtonGoogle {...props} />;
    default:
      return <ButtonBase {...props} />;
  }
}

export default Input;
