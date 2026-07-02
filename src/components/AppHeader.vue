<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { portfolio } from '../data/portfolio'
import LanguageSwitcher from './LanguageSwitcher.vue'

const { t } = useI18n()
const drawerOpen = ref(false)

const navItems = computed(() => [
  { id: 'inicio', label: t('nav.home') },
  { id: 'sobre', label: t('nav.about') },
  { id: 'habilidades', label: t('nav.skills') },
  { id: 'projetos', label: t('nav.projects') },
  { id: 'contato', label: t('nav.contact') },
])

function scrollToSection(id: string) {
  drawerOpen.value = false
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <q-header elevated class="bg-dark text-white">
    <q-toolbar class="q-px-md q-px-lg-xl">
      <q-btn
        flat
        dense
        round
        icon="menu"
        aria-label="Menu"
        class="lt-md"
        @click="drawerOpen = !drawerOpen"
      />

      <q-toolbar-title class="text-weight-bold">
        {{ portfolio.name }}
      </q-toolbar-title>

      <LanguageSwitcher />

      <div class="gt-sm row q-gutter-sm q-ml-sm">
        <q-btn
          v-for="item in navItems"
          :key="item.id"
          flat
          no-caps
          :label="item.label"
          @click="scrollToSection(item.id)"
        />
      </div>
    </q-toolbar>

    <q-drawer v-model="drawerOpen" overlay bordered class="bg-dark text-white lt-md">
      <q-list padding>
        <q-item
          v-for="item in navItems"
          :key="item.id"
          clickable
          v-ripple
          @click="scrollToSection(item.id)"
        >
          <q-item-section>{{ item.label }}</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
  </q-header>
</template>
