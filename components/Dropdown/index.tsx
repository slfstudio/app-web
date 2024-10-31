import DropdownBase from './DropdownBase';
import DropdownInfo from './DropdownInfo';
import DropdownPhoneCode from './DropdownPhoneCode';
import { DropdownProps } from './types';

function Dropdown({ variant, ...props }: DropdownProps) {
  switch (variant) {
    case 'info':
      return <DropdownInfo {...props} />;
    case 'phone':
      return <DropdownPhoneCode {...props} />;
    default:
      return <DropdownBase {...props} />;
  }
}

export default Dropdown;
