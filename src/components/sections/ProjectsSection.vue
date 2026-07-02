<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { portfolio } from '../../data/portfolio'

const { t } = useI18n()
</script>

<template>
  <section id="projetos" class="section q-pa-xl">
    <div class="section-inner">
      <h2 class="text-h4 text-weight-bold q-mb-md">{{ t('projects.title') }}</h2>
      <q-separator color="accent" class="q-mb-lg" style="max-width: 64px" />

      <div class="row q-col-gutter-lg">
        <div
          v-for="project in portfolio.projects"
          :key="project.id"
          class="col-12 col-md-4"
        >
          <q-card flat bordered class="project-card bg-grey-10 full-height column">
            <q-card-section class="col">
              <div class="text-h6 text-weight-bold q-mb-sm">
                {{ t(`projects.items.${project.id}.title`) }}
              </div>
              <p class="text-body2 text-grey-5 q-mb-md">
                {{ t(`projects.items.${project.id}.description`) }}
              </p>
              <div class="row q-gutter-xs">
                <q-badge
                  v-for="tag in project.tags"
                  :key="tag"
                  color="grey-8"
                  :label="tag"
                />
              </div>
            </q-card-section>

            <q-card-actions align="right" class="q-pa-md q-pt-none">
              <q-btn
                v-if="project.url"
                flat
                color="secondary"
                no-caps
                :label="t('projects.viewSite')"
                icon="open_in_new"
                :href="project.url"
                target="_blank"
              />
              <q-btn
                v-if="project.repo"
                flat
                color="primary"
                no-caps
                :label="t('projects.code')"
                icon="code"
                :href="project.repo"
                target="_blank"
              />
            </q-card-actions>
          </q-card>
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

.project-card {
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  border-color: rgba(99, 102, 241, 0.6);
}
</style>
