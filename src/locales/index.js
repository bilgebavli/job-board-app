import { createI18n } from 'vue-i18n'

import en from './messages/en.json'
import tr from './messages/tr.json'

export const i18n = createI18n({
  legacy: false,
  // locale: 'en',
  // fallbackLocale: 'tr',
  // messages: { en, tr },
  locale: import.meta.env.VITE_SITE_LOCALE,
  fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
  messages: { 'en-GB': en, 'tr-TR': tr },
})