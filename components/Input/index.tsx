import InputBase from './InputBase';
import InputCalendar from './InputCalendar';
import InputDate from './InputDate';
import InputZipCode from './inputZipCode';
import { TextInputCustomProps } from './types';

function Input({ ...props }: TextInputCustomProps) {
  switch (props.variant) {
    case 'date':
      return <InputDate {...props} />;
    case 'password':
      return <InputBase {...props} />;
    case 'text-area':
      return <InputBase {...props} multiline={true} numberOfLines={100} />;
    case 'zipCode':
      return <InputZipCode {...props} />;
    case 'calendar':
      return <InputCalendar {...props} />;
    default:
      return <InputBase {...props} />;
  }
}

export default Input;
