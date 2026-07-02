<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { portfolio } from '../../data/portfolio'
import heroPhoto from '../../assets/img.png'

defineEmits<{ (event: 'contact'): void }>()

const { t } = useI18n()
</script>

<template>
  <section
    id="inicio"
    class="hero-section q-pa-xl"
    :style="{ backgroundImage: `url(${heroPhoto})` }"
  >
    <div class="hero-overlay" />
    <div class="hero-content">
      <p class="text-secondary text-subtitle1 text-weight-medium q-mb-sm">
        {{ t('hero.greeting') }}
      </p>
      <h1 class="text-h2 text-md-h1 text-weight-bold q-mb-md">
        {{ portfolio.name }}
      </h1>
      <p class="text-h5 text-md-h4 text-grey-4 q-mb-lg">
        {{ t('portfolio.title') }}
      </p>
      <p class="text-body1 text-grey-5 hero-bio q-mb-xl">
        {{ t('portfolio.bio') }}
      </p>

      <div class="row q-gutter-sm">
        <q-btn
          color="primary"
          unelevated
          no-caps
          :label="t('hero.contactBtn')"
          icon="mail"
          size="lg"
          @click="$emit('contact')"
        />
        <q-btn
          outline
          color="white"
          no-caps
          :label="t('hero.projectsBtn')"
          icon="work"
          size="lg"
          href="#projetos"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  min-height: calc(100vh - 50px);
  display: flex;
  align-items: center;
  background-size: cover;
  background-position: center right;
  background-repeat: no-repeat;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    105deg,
    rgba(15, 23, 42, 0.78) 0%,
    rgba(15, 23, 42, 0.5) 35%,
    rgba(15, 23, 42, 0.2) 65%,
    rgba(15, 23, 42, 0.05) 100%
  );
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 720px;
  padding: 1.5rem;
  border-radius: 12px;
  background: rgba(15, 23, 42, 0.35);
  backdrop-filter: blur(6px);
}

.hero-bio {
  max-width: 560px;
  line-height: 1.7;
}
</style>
