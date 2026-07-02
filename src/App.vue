<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/sections/HeroSection.vue'
import AboutSection from './components/sections/AboutSection.vue'
import SkillsSection from './components/sections/SkillsSection.vue'
import ProjectsSection from './components/sections/ProjectsSection.vue'
import ContactSection from './components/sections/ContactSection.vue'
import { portfolio } from './data/portfolio'

const { t } = useI18n()

function scrollToContact() {
  document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <q-layout view="hHh lpR fFf" class="bg-dark text-white">
    <AppHeader />

    <q-page-container>
      <q-page class="bg-dark">
        <HeroSection @contact="scrollToContact" />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />

        <footer class="text-center q-pa-lg text-grey-6">
          © {{ new Date().getFullYear() }} {{ portfolio.name }}. {{ t('footer.rights') }}
        </footer>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
