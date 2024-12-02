import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslations from './locales/en.json';
import jpTranslations from './locales/jp.json';
import cnTranslations from './locales/cn.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslations
    },
    jp: {
      translation: jpTranslations
    },
    cn: {
      translation: cnTranslations
    }
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
