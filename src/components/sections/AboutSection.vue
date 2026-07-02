<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { portfolio } from '../../data/portfolio'

const { t } = useI18n()
</script>

<template>
  <section id="sobre" class="section q-pa-xl">
    <div class="section-inner">
      <h2 class="text-h4 text-weight-bold q-mb-md">{{ t('about.title') }}</h2>
      <q-separator color="primary" class="q-mb-lg" style="max-width: 64px" />

      <div class="row q-col-gutter-xl items-start">
        <div class="col-12 col-md-4">
          <q-card flat bordered class="bg-grey-10">
            <q-card-section>
              <q-avatar size="80px" color="primary" text-color="white" icon="person" />
              <div class="text-h6 q-mt-md">{{ portfolio.name }}</div>
              <div class="text-grey-5">{{ t('portfolio.title') }}</div>
              <div class="text-caption text-grey-6 q-mt-sm">
                <q-icon name="cake" size="xs" class="q-mr-xs" />
                {{ t('portfolio.age', { age: portfolio.age }) }}
              </div>
              <div class="text-caption text-grey-6">
                <q-icon name="work_history" size="xs" class="q-mr-xs" />
                {{ t('portfolio.experience', { years: portfolio.yearsExperience }) }}
              </div>
              <div class="text-caption text-grey-6">
                <q-icon name="public" size="xs" class="q-mr-xs" />
                {{ t('portfolio.origin') }}
              </div>
              <div class="text-caption text-grey-6">
                <q-icon name="place" size="xs" class="q-mr-xs" />
                {{ t('portfolio.residence') }}
              </div>
              <div class="text-caption text-grey-6">
                <q-icon name="school" size="xs" class="q-mr-xs" />
                {{ t('portfolio.education') }}
              </div>
              <div class="text-caption text-grey-6">
                <q-icon name="translate" size="xs" class="q-mr-xs" />
                {{ t('portfolio.languages') }}
              </div>
              <div class="text-caption text-grey-6">
                <q-icon name="email" size="xs" class="q-mr-xs" />
                {{ portfolio.email }}
              </div>
            </q-card-section>
          </q-card>
        </div>

        <div class="col-12 col-md-8">
          <p class="text-body1 text-grey-4 about-text">
            {{ t('portfolio.about') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
  background: #111827;
}

.section-inner {
  max-width: 960px;
  margin: 0 auto;
}

.about-text {
  line-height: 1.8;
}
</style>
