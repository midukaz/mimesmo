import { useI18n } from 'vue-i18n'
import { Quasar } from 'quasar'
import quasarPtBR from 'quasar/lang/pt-BR'
import quasarEn from 'quasar/lang/en-US'
import quasarEs from 'quasar/lang/es'
import quasarFr from 'quasar/lang/fr'
import type { AppLocale } from '../i18n/types'
import { LOCALE_STORAGE_KEY, supportedLocales } from '../i18n'

const quasarLangMap = {
  'pt-BR': quasarPtBR,
  en: quasarEn,
  es: quasarEs,
  fr: quasarFr,
} as const

export function useLocale() {
  const { locale } = useI18n()

  function setLocale(nextLocale: AppLocale) {
    locale.value = nextLocale
    Quasar.lang.set(quasarLangMap[nextLocale])
    localStorage.setItem(LOCALE_STORAGE_KEY, nextLocale)
    document.documentElement.lang = nextLocale
  }

  return {
    locale,
    supportedLocales,
    setLocale,
  }
}
