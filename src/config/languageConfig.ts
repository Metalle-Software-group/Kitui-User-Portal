// i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translations for other languages
import TranslationEN from '../constants/en.json';
import TranslationKE from '../constants/ke.json';

// the translations
const resources = {
  en: {
    translation: TranslationEN,
  },
  ke: {
    translation: TranslationKE,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
