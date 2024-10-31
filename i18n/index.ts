import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enUS from './en-US';
import esMX from './es-MX';

const resources = {
  en: enUS,
  es: esMX,
};

const options = {
  resources,
  lng: 'en',
  compatibilityJSON: 'v3',
  keySeparator: '.',
  returnObjects: true,
  interpolation: {
    escapeValue: false,
  },
};

i18n.use(initReactI18next).init(options);

export default i18n;
