interface PhoneObject {
  celular: string;
  telefono: string;
}

const getPhoneNumber = (phoneObj: PhoneObject | null): string => {
  if (!phoneObj) {
    return '-';
  }

  const { celular, telefono } = phoneObj;

  if (isValidPhoneNumber(celular)) {
    return celular;
  }

  if (isValidPhoneNumber(telefono)) {
    return telefono;
  }

  return '-';
};

const isValidPhoneNumber = (number: string): boolean => {
  return number !== '0' && number.length > 1;
};

export default getPhoneNumber;
