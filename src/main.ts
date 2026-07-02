import { createApp } from 'vue'
import { Quasar, Notify } from 'quasar'
import quasarPtBR from 'quasar/lang/pt-BR'
import quasarEn from 'quasar/lang/en-US'
import quasarEs from 'quasar/lang/es'
import quasarFr from 'quasar/lang/fr'
import iconSet from 'quasar/icon-set/material-icons'

import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

import App from './App.vue'
import { getInitialLocale, i18n } from './i18n'
import type { AppLocale } from './i18n/types'

const quasarLangMap = {
  'pt-BR': quasarPtBR,
  en: quasarEn,
  es: quasarEs,
  fr: quasarFr,
} satisfies Record<AppLocale, typeof quasarPtBR>

const initialLocale = getInitialLocale()
document.documentElement.lang = initialLocale

const app = createApp(App)

app.use(i18n)
app.use(Quasar, {
  plugins: { Notify },
  lang: quasarLangMap[initialLocale],
  iconSet,
})

app.mount('#app')
