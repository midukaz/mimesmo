import { createI18n } from 'vue-i18n'
import type { AppLocale } from './types'
import ptBR from './locales/pt-BR'
import en from './locales/en'
import es from './locales/es'
import fr from './locales/fr'

export const LOCALE_STORAGE_KEY = 'portfolio-locale'

export const supportedLocales: { value: AppLocale; label: string; flag: string }[] = [
  { value: 'pt-BR', label: 'Português', flag: '🇧🇷' },
  { value: 'en', label: 'English', flag: '🇺🇸' },
  { value: 'es', label: 'Español', flag: '🇪🇸' },
  { value: 'fr', label: 'Français', flag: '🇫🇷' },
]

const messages = {
  'pt-BR': ptBR,
  en,
  es,
  fr,
}

function isAppLocale(value: string): value is AppLocale {
  return value === 'pt-BR' || value === 'en' || value === 'es' || value === 'fr'
}

function detectBrowserLocale(): AppLocale {
  const browserLang = navigator.language

  if (browserLang.startsWith('pt')) return 'pt-BR'
  if (browserLang.startsWith('es')) return 'es'
  if (browserLang.startsWith('fr')) return 'fr'
  return 'en'
}

export function getInitialLocale(): AppLocale {
  const stored = localStorage.getItem(LOCALE_STORAGE_KEY)

  if (stored && isAppLocale(stored)) {
    return stored
  }

  return detectBrowserLocale()
}

export const i18n = createI18n({
  legacy: false,
  locale: getInitialLocale(),
  fallbackLocale: 'pt-BR',
  // Nested message objects are valid for vue-i18n; cast avoids overly strict generic inference.
  messages: messages as never,
})
