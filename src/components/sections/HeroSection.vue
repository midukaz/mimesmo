<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { portfolio } from '../../data/portfolio'

defineEmits<{ (event: 'contact'): void }>()

const { t } = useI18n()
</script>

<template>
  <section id="inicio" class="hero-section q-pa-xl">
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
  min-height: calc(100vh - 50px);
  display: flex;
  align-items: center;
  background: radial-gradient(circle at top right, rgba(99, 102, 241, 0.25), transparent 45%),
    radial-gradient(circle at bottom left, rgba(34, 211, 238, 0.15), transparent 40%);
}

.hero-content {
  max-width: 720px;
}

.hero-bio {
  max-width: 560px;
  line-height: 1.7;
}
</style>
