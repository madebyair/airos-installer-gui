import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'
import en from '../resources/lang/en.json'
// TODO: Load language from IP, if user is connected via ethernet

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en }
    },
    lng: 'en',
    fallbackLng: 'en',
    debug: window.location.port == "1420",
    interpolation: {
      escapeValue: false
    }
  })