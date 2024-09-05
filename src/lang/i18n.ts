// src/localse/i18n.ts
import i18n from "i18next"
import { initReactI18next } from "react-i18next"
 
import en from './translation.en.json'
import ko from './translation.ko.json'
 
const resources = {
  en: {
    translation: en
  },
  ko: {
    translation: ko
  }
}
 
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ko",
    fallbackLng: "ko"
  })
 
export default i18n