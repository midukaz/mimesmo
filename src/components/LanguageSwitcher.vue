<script setup lang="ts">
import { useLocale } from '../composables/useLocale'
import type { AppLocale } from '../i18n/types'

const { locale, supportedLocales, setLocale } = useLocale()
</script>

<template>
  <q-btn-dropdown
    flat
    dense
    no-caps
    :label="supportedLocales.find((item) => item.value === locale)?.flag"
    aria-label="Language"
  >
    <q-list dense>
      <q-item
        v-for="item in supportedLocales"
        :key="item.value"
        clickable
        v-close-popup
        :active="locale === item.value"
        @click="setLocale(item.value as AppLocale)"
      >
        <q-item-section avatar>
          <span>{{ item.flag }}</span>
        </q-item-section>
        <q-item-section>{{ item.label }}</q-item-section>
      </q-item>
    </q-list>
  </q-btn-dropdown>
</template>
