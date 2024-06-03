import enTransalation from '../public/Locale/en.json'
import uzTransalation from '../public/Locale/uz.json'
import ruTransalation from '../public/Locale/ru.json'
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
const language = localStorage.getItem('i18nextLng') || 'uz'
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    lng:language ,
    debug: true,
    resources :{
        uz:{translation :  uzTransalation},
        en:{translation : enTransalation },
        ru:{translation: ruTransalation}
    },
    interpolation: {
      escapeValue: false,
    }
  });


export default i18n;