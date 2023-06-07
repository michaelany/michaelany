import i18n, {InitOptions} from 'i18next'
import {initReactI18next} from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import {EN, RU} from '@translations/index'

export const isRuLng = (lng: string): boolean => lng.startsWith('ru')

i18n.on('languageChanged', (lng: string) => {
  const isRu: boolean = isRuLng(lng)
  const translation = isRu ? RU : EN
  document.documentElement.setAttribute('lang', isRu ? 'ru' : 'en')
  document.title = `Michael Any | ${translation.experience.occupation.middle}`
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
