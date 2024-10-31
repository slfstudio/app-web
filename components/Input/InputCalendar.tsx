import { useState } from 'react';
import { TextInputCustomProps } from './types';
import InputBase from './InputBase';
import CalendarModal from '../CalendarModal';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

function InputCalendar({ ...props }: TextInputCustomProps) {
  const [isValidDate, setIsVisibleDate] = useState(false);
  const toogleModal = () => {
    setIsVisibleDate(false);
  };
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setIsVisibleDate(true)} className="w-full">
        <InputBase {...props} editable={false} />
      </TouchableWithoutFeedback>
      <CalendarModal isVisible={isValidDate} onPressClose={toogleModal} onSelectDate={props.onChangeText} />
    </>
  );
}

export default InputCalendar;
