<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useQuasar } from 'quasar'
import { portfolio } from '../../data/portfolio'
import { sendContactEmail } from '../../services/contact'

const { t, te } = useI18n()
const $q = useQuasar()

const name = ref('')
const email = ref('')
const message = ref('')
const loading = ref(false)

function translateError(key: string) {
  return te(key) ? t(key) : key
}

async function onSubmit() {
  loading.value = true

  try {
    await sendContactEmail({
      name: name.value.trim(),
      email: email.value.trim(),
      message: message.value.trim(),
      subject: t('contact.subject', { name: name.value.trim() }),
    })

    $q.notify({
      type: 'positive',
      message: t('contact.success'),
      position: 'top',
    })

    name.value = ''
    email.value = ''
    message.value = ''
  } catch (error) {
    const messageKey = error instanceof Error ? error.message : 'contact.error'

    $q.notify({
      type: 'negative',
      message: translateError(messageKey),
      position: 'top',
    })
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <section id="contato" class="section q-pa-xl">
    <div class="section-inner">
      <h2 class="text-h4 text-weight-bold q-mb-md">{{ t('contact.title') }}</h2>
      <q-separator color="primary" class="q-mb-lg" style="max-width: 64px" />

      <p class="text-body1 text-grey-5 q-mb-xl">
        {{ t('contact.description', { email: portfolio.email }) }}
      </p>

      <div class="row q-col-gutter-xl">
        <div class="col-12 col-md-5">
          <q-list dark bordered class="rounded-borders bg-grey-10">
            <q-item v-for="social in portfolio.socials" :key="social.key">
              <q-item-section avatar>
                <q-icon :name="social.icon" color="secondary" />
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ t(`social.${social.key}`) }}</q-item-label>
                <q-item-label caption>
                  <a :href="social.url" target="_blank" class="text-grey-4">{{ social.url }}</a>
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </div>

        <div class="col-12 col-md-7">
          <q-form @submit.prevent="onSubmit" class="q-gutter-md">
            <q-input
              v-model="name"
              filled
              dark
              :label="t('contact.nameLabel')"
              lazy-rules
              :rules="[(val) => !!val || t('contact.nameRequired')]"
            />
            <q-input
              v-model="email"
              filled
              dark
              type="email"
              :label="t('contact.emailLabel')"
              lazy-rules
              :rules="[
                (val) => !!val || t('contact.emailRequired'),
                (val) => /.+@.+\..+/.test(val) || t('contact.emailInvalid'),
              ]"
            />
            <q-input
              v-model="message"
              filled
              dark
              type="textarea"
              :label="t('contact.messageLabel')"
              autogrow
              lazy-rules
              :rules="[(val) => !!val || t('contact.messageRequired')]"
            />
            <q-btn
              type="submit"
              color="primary"
              unelevated
              no-caps
              :label="t('contact.submitBtn')"
              icon="send"
              :loading="loading"
            />
          </q-form>
        </div>
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

a {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
