import React from 'react';
import { Calendar as ExtCalendar } from 'react-native-calendars';
import { View, TouchableWithoutFeedback } from 'react-native';
import Text from '@/components/Text';
import Modal from 'react-native-modal';
import { utcDateAddMonthsToShortDisplay, utcDateToShortDisplay } from '@/utils/datesUtils';
import { colors } from '@/config';
import { Icon } from '../Icon';
import { useTranslation } from 'react-i18next';

interface CalendarModalProps {
  fromDate?: Date;
  onSelectDate: (date?: string) => void;
  isVisible: boolean;
  onPressClose: () => void;
}
const limited = true;
const CalendarModal: React.FC<CalendarModalProps> = ({ fromDate, onSelectDate, isVisible, onPressClose }) => {
  const { t } = useTranslation();
  const didSelectDay = ({ year, month, day }: { year: number; month: number; day: number }) => {
    const date = new Date(year, month - 1, day);
    const formattedDate = `${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}/${year}`;
    if ((day == 1 || day === 15) && limited) {
      onSelectDate(formattedDate);
      onPressClose();
    } else if (!limited) {
      onSelectDate(formattedDate);
      onPressClose();
    }
  };

  const didSelectClose = () => {
    onPressClose();
  };

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const minDate = (fromDate && fromDate) || today;
  const minDateDisplay = utcDateToShortDisplay(minDate);
  const maxDateDisplay = utcDateAddMonthsToShortDisplay(new Date(), 90);

  const getMarkedDates = (minDate: Date, maxDate: string) => {
    const markedDates: { [key: string]: { disabled?: boolean } } = {};
    const currentDate = new Date(minDate);
    const endDate = new Date(maxDate);

    while (currentDate <= endDate) {
      const dateString = currentDate.toISOString().split('T')[0];
      const day = currentDate.getDate();

      // Mark all days as disabled except for the 1st and 15th
      if (day !== 1 && day !== 15) {
        markedDates[dateString] = { disabled: true };
      }

      currentDate.setDate(currentDate.getDate() + 1);
    }

    return markedDates;
  };

  const isCurrentMonthMinMonth = () => {
    const currentMonth = new Date(minDateDisplay).getMonth();
    const currentYear = new Date(minDateDisplay).getFullYear();
    const minMonth = minDate.getMonth();
    const minYear = minDate.getFullYear();
    
    return currentMonth === minMonth && currentYear === minYear;
  };

  const getInitialMonth = () => {
    const today = new Date();
    if (today.getDate() > 15) {
      const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);
      return utcDateToShortDisplay(nextMonth);
    }
    return minDateDisplay;
  };

  const contents = (
    <View className="flex-1 justify-end">
      <View className="bg-white p-4">
        <Text variant="Body-Small-Medium" className="text-dark4">
          {t('text.the_effective_date_will_be_either_the_1st_or_the_15th')}
        </Text>
      </View>
      <View className="flex-row justify-between bg-gray-100 p-10 pt-2.5 pb-2.5 bg-white">
        <TouchableWithoutFeedback
          onPress={() => {
            onSelectDate('');
            didSelectClose();
          }}
          className="flex-1 flex-row self-end"
        >
          <View className="flex-row items-center self-end">
            {/* <Icon name="Close" size={12} /> */}
            {/* Cambiar texto */}
            <Text allowFontScaling={false} variant="Body-Extra-Small-Medium" className="text-dark4">
              - Clean
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={didSelectClose} className="flex-1 flex-row self-end">
          <View className="flex-row items-center self-end">
            <Icon name="Close" size={12} />
            {/* Cambiar test dylan */}
            <Text allowFontScaling={false} variant="Body-Extra-Small-Medium" className="text-dark4">
              Close
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>

      <ExtCalendar
        current={getInitialMonth()}
        minDate={minDateDisplay}
        maxDate={maxDateDisplay}
        onDayPress={(day) => didSelectDay(day)}
        monthFormat="MMMM yyyy"
        hideExtraDays
        disableArrowLeft={isCurrentMonthMinMonth()}
        onPressArrowLeft={(substractMonth) => substractMonth()}
        onPressArrowRight={(addMonth) => addMonth()}
        className="shadow-md"
        markedDates={limited && getMarkedDates(minDate, maxDateDisplay)}
        theme={{
          calendarBackground: colors.gray1,
          todayTextColor: colors.primary,
          arrowColor: colors.primary,
          monthTextColor: colors.primary,
          textMonthFontWeight: 'bold',
          textMonthFontSize: 14,
          textDisabledColor: colors.gray3, // Add this line to style disabled dates
        }}
      />

      <View className="pb-15 bg-white h-[30] w-full" />
    </View>
  );

  return (
    <Modal className="m-0" isVisible={isVisible} onBackdropPress={didSelectClose}>
      {contents}
    </Modal>
  );
};

export default CalendarModal;
