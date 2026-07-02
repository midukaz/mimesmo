<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { portfolio } from '../../data/portfolio'

const { t } = useI18n()
</script>

<template>
  <section id="habilidades" class="section q-pa-xl">
    <div class="section-inner">
      <h2 class="text-h4 text-weight-bold q-mb-md">{{ t('skills.title') }}</h2>
      <q-separator color="secondary" class="q-mb-lg" style="max-width: 64px" />

      <div class="row q-gutter-sm">
        <q-chip
          v-for="skill in portfolio.skills"
          :key="skill"
          color="primary"
          text-color="white"
          icon="code"
          class="skill-chip"
        >
          {{ skill }}
        </q-chip>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
  background: #0f172a;
}

.section-inner {
  max-width: 960px;
  margin: 0 auto;
}

.skill-chip {
  font-size: 0.95rem;
  padding: 0.5rem 0.25rem;
}
</style>
