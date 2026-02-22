<script setup lang="ts">
const state = reactive({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)
const isSuccess = ref(false)

async function onSubmit() {
  isSubmitting.value = true

  // Simule l'envoi (remplace par ton endpoint API ou service email)
  await new Promise(resolve => setTimeout(resolve, 1000))

  isSuccess.value = true
  isSubmitting.value = false

  // Reset form après 3s
  setTimeout(() => {
    state.name = ''
    state.email = ''
    state.message = ''
    isSuccess.value = false
  }, 3000)
}
</script>

<template>
  <section
    id="contact"
    class="relative px-4 py-20 sm:py-32"
  >
    <div class="mx-auto max-w-4xl">
      <!-- Section header -->
      <div class="mb-12 text-center">
        <h2 class="mb-4 text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
          Contactez-moi
        </h2>
        <p class="mx-auto max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
          Un projet en tête ? Une question ? N'hésitez pas à me contacter, je vous réponds généralement sous 24h.
        </p>
      </div>

      <div class="grid gap-12 lg:grid-cols-5 lg:gap-16">
        <!-- Contact info -->
        <div class="lg:col-span-2">
          <div class="space-y-6">
            <div class="rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/50">
              <div class="mb-2 flex items-center gap-3">
                <div class="flex size-10 items-center justify-center rounded-lg bg-primary-100 dark:bg-primary-950/50">
                  <UIcon
                    name="i-lucide-mail"
                    class="size-5 text-primary-600 dark:text-primary-400"
                  />
                </div>
                <div>
                  <h3 class="font-semibold text-neutral-900 dark:text-white">
                    Email
                  </h3>
                </div>
              </div>
              <a
                href="mailto:hello@nicolas.dev"
                class="text-sm text-neutral-600 transition-colors hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400"
              >
                hello@nicolas.dev
              </a>
            </div>

            <div class="rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/50">
              <div class="mb-2 flex items-center gap-3">
                <div class="flex size-10 items-center justify-center rounded-lg bg-primary-100 dark:bg-primary-950/50">
                  <UIcon
                    name="i-lucide-map-pin"
                    class="size-5 text-primary-600 dark:text-primary-400"
                  />
                </div>
                <div>
                  <h3 class="font-semibold text-neutral-900 dark:text-white">
                    Localisation
                  </h3>
                </div>
              </div>
              <p class="text-sm text-neutral-600 dark:text-neutral-400">
                France • Remote
              </p>
            </div>

            <div class="rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/50">
              <div class="mb-3 flex items-center gap-3">
                <div class="flex size-10 items-center justify-center rounded-lg bg-primary-100 dark:bg-primary-950/50">
                  <UIcon
                    name="i-lucide-clock"
                    class="size-5 text-primary-600 dark:text-primary-400"
                  />
                </div>
                <div>
                  <h3 class="font-semibold text-neutral-900 dark:text-white">
                    Disponibilité
                  </h3>
                </div>
              </div>
              <p class="text-sm text-neutral-600 dark:text-neutral-400">
                Ouvert aux nouvelles opportunités
              </p>
            </div>
          </div>
        </div>

        <!-- Contact form -->
        <div class="lg:col-span-3">
          <div class="rounded-2xl border border-neutral-200/80 bg-white p-8 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/50">
            <form @submit.prevent="onSubmit">
              <div class="space-y-6">
                <div>
                  <label class="mb-2 block text-sm font-medium text-neutral-900 dark:text-white">
                    Nom <span class="text-red-500">*</span>
                  </label>
                  <UInput
                    v-model="state.name"
                    placeholder="Votre nom"
                    size="lg"
                    required
                  />
                </div>

                <div>
                  <label class="mb-2 block text-sm font-medium text-neutral-900 dark:text-white">
                    Email <span class="text-red-500">*</span>
                  </label>
                  <UInput
                    v-model="state.email"
                    type="email"
                    placeholder="votre@email.com"
                    size="lg"
                    required
                  />
                </div>

                <div>
                  <label class="mb-2 block text-sm font-medium text-neutral-900 dark:text-white">
                    Message <span class="text-red-500">*</span>
                  </label>
                  <UTextarea
                    v-model="state.message"
                    placeholder="Parlez-moi de votre projet..."
                    :rows="6"
                    size="lg"
                    required
                  />
                </div>

                <div v-if="isSuccess">
                  <UAlert
                    icon="i-lucide-check-circle"
                    color="success"
                    variant="subtle"
                    title="Message envoyé !"
                    description="Je vous réponds très vite."
                  />
                </div>

                <UButton
                  type="submit"
                  size="lg"
                  block
                  :loading="isSubmitting"
                  :disabled="isSubmitting"
                  icon="i-lucide-send"
                  class="font-semibold"
                >
                  {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer le message' }}
                </UButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
