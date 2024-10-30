export const validateCP = (text: string) => {
  let reg = /^[0-9]{5,10}/;
  if (reg.test(text) === false) {
    return false;
  } else {
    return true;
  }
};

export const upperLimitDate = (years: number, operation = '-') => {
  let date = new Date();
  if (operation === '-') {
    date.setFullYear(date.getFullYear() - years);
  } else if (operation === '+') {
    date.setFullYear(date.getFullYear() + years);
  }
  return date;
};

export const validatePhone = (text: string) => {
  let reg = /^[0-9]{10,17}/;
  console.log(text.length);
  if (reg.test(text) === false) {
    return false;
  } else {
    return true;
  }
};

export const validateEmail = (text: string) => {
  let reg = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  if (reg.test(text) === false) {
    return false;
  } else {
    return true;
  }
};

export const validateEmailEmpty = (text: string) => {
  if (text == null) return false;
  if (text.length <= 0) return false;

  return true;
};

export const validateRFC = (text: string) => {
  let reg = /^[A-Z,Ñ,&]{3,4}[0-9]{2}[0-1][0-9][0-3][0-9][A-Z,0-9]?[A-Z,0-9]?[0-9,A-Z]?$/;
  if (reg.test(text) === false) {
    return false;
  } else {
    return true;
  }
};

export const validatePassword = (text: string) => {
  const mediumRegex = new RegExp(
    '^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})',
  );
  return mediumRegex.test(text);
};

export const onlyLettersAndSpaces = (text: string) => {
  //const reg = /^[a-zA-Z\s]*$/;
  //if (reg.test(text) === false) {
  //  return false;
  //}
  return true;
};

export const dateFormat = (day, month, year) => {
  let date = '';
  let dateString = day + '-' + month + '-' + year;
  let momentObj = moment(dateString, 'DD-MM-YYYY');
  date = momentObj.format('DD/MM/YYYY'); // DD/MM/YYY/

  return date.toString();
};

export const genderFormat = (gender: string) => {
  let result = 0;

  switch (gender) {
    case 'female':
      result = 0;
      break;
    case 'male':
      result = 1;
      break;
    default:
      result = 0;
      break;
  }

  return result;
};

export const getInsuranceLogo = (insuranceId: number) => {
  let logo = null;
  switch (insuranceId) {
    case 1:
      logo = require('../assets/images/insurances/aba.png');
      break;
    case 2:
      logo = require('../assets/images/insurances/aig.png');
      break;
    case 3:
      logo = require('../assets/images/insurances/ana.png');
      break;
    case 5:
      logo = require('../assets/images/insurances/gnp.png');
      break;
    case 6:
      logo = require('../assets/images/insurances/hdi.png');
      break;
    case 7:
      logo = require('../assets/images/insurances/mapfre.png');
      break;
    case 9:
      logo = require('../assets/images/insurances/qualitas.png');
      break;
    case 10:
      logo = require('../assets/images/insurances/sura.png');
      break;
    case 11:
      logo = require('../assets/images/insurances/seguros_atlas.png');
      break;
    case 12:
      logo = require('../assets/images/insurances/seguros_centauro.png');
      break;
    case 15:
      logo = require('../assets/images/insurances/inbursa.png');
      break;
    default:
      logo = require('../assets/images/insurances/imageDefault.png');
      break;
  }
  return logo;
};

export const getPolicyIcon = (type: number) => {
  let logo = null;

  switch (type) {
    case 1:
      logo = 'Home'; //equire('../assets/healthCircle.png');
      break;
    case 2:
      logo = 'Home'; //require('../assets/carCircle.png');
      break;
    case 3:
      logo = 'Home'; //require('../assets/carCircle.png');
      break;
    case 4:
      logo = 'Home'; //require('../assets/healthCircle.png');
      break;
    case 5:
      logo = 'Home'; //require('../assets/lifeCircle.png');
      break;
    default:
      logo = 'Home'; //require('../assets/imageDefault.png');
      break;
  }
  return logo;
};
/**
 * Este reemplaza los simbolos de = y los & por pipeline y doble pipeline, esto para que no choque con el request de BTS
 * @param image
 * @returns {*}
 */
export const replaceActionImage = (image: string) => {
  let image_custom = image;
  const chars = { '=': '|', '&': '||' };
  image_custom = image_custom.replace(/[=&]/g, (m) => chars[m]);
  return image_custom;
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
};

export const genderHealth = (genderId: number) => {
  switch (genderId) {
    case 101:
      return 'female';
    case 102:
      return 'other';
    default:
      return 'male';
  }
};

export function getPaymentFrequencyName(id: number): string {
  switch (id) {
    case 1:
      return 'label.annual';
    case 2:
      return 'label.semiannual';
    case 3:
      return 'label.quarterly';
    case 5:
      return 'label.monthly';
    default:
      return 'Unknown';
  }
}
