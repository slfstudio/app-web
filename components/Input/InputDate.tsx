import { useState } from 'react';
import { TextInputCustomProps } from './types';
import InputBase from './InputBase';

function InputDate({ ...props }: TextInputCustomProps) {
  const handleChange = (input: string) => {
    // Clean input to only keep digits
    let cleaned = input.replace(/[^0-9]/g, '');
    let masked = cleaned;

    if (cleaned.length > 2) {
      masked = cleaned.slice(0, 2) + '/' + cleaned.slice(2);
    }
    if (cleaned.length > 4) {
      masked = masked.slice(0, 5) + '/' + cleaned.slice(4);
    }
    if (cleaned.length > 8) {
      masked = masked.slice(0, 10);
    }

    // If the date is fully entered (MM/DD/YYYY), validate it
    if (cleaned.length === 8) {
      const [month, day, year] = masked.split('/').map(Number);

      // Validation logic: check if the date is valid
      const isValidDate = (m: number, d: number, y: number) => {
        if (m <= 9 && d <= 9) return true;
        // Validate month (1-12)
        if (m < 1 || m > 12) return false;

        // Validate day (1 to number of days in the month)
        const daysInMonth = new Date(y, m, 0).getDate(); // Get the number of days in the given month
        if (d < 1 || d > daysInMonth) return false;

        // Validate year (reasonable range, e.g., 1900 to current year)
        if (y < 1900 || y > 2080) return false;

        return true;
      };

      if (!isValidDate(month, day, year)) {
        // Handle invalid date, e.g., show an error message
        props?.onChangeText?.(`${day <= 9 ? `0${day}` : day}/${month <= 9 ? `0${month}` : month}/${year}`); // Optionally clear the input or display an error message
      } else {
        props?.onChangeText?.(masked); // Keep the valid date in MM/DD/YYYY format
      }
    } else {
      props?.onChangeText?.(masked); // Continue updating as the user types
    }
  };

  return <InputBase {...props} onChangeText={handleChange} keyboardType="numeric" returnKeyType="done" />;
}

export default InputDate;
