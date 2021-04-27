import i18n, {InitOptions} from 'i18next'
import {initReactI18next} from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import {EN, RU} from '../translations'

i18n.on('languageChanged', (lng) => {
  const translation = lng === 'ru' ? RU : EN
  document.documentElement.setAttribute('lang', lng)
  document.title = translation.other.meta
})

const options: InitOptions = {
  resources: {
    en: {
      translation: EN,
    },
    ru: {
      translation: RU,
    },
  },
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
}

i18n.use(LanguageDetector).use(initReactI18next).init(options)

export default i18n
