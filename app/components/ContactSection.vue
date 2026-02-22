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
    class="relative overflow-hidden px-4 py-20 sm:py-32"
  >
    <!-- Background gradient -->
    <div class="pointer-events-none absolute inset-0 overflow-hidden">
      <div class="absolute left-1/2 top-0 size-96 -translate-x-1/2 rounded-full bg-primary-500/10 blur-3xl" />
    </div>

    <div class="relative z-10 mx-auto max-w-5xl">
      <!-- Section header -->
      <div class="mb-12 text-center">
        <h2 class="mb-4 text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
          Contactez-moi
        </h2>
        <p class="mx-auto max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
          Un projet en tête ? Une question ? N'hésitez pas à me contacter, je vous réponds généralement sous 24h.
        </p>
      </div>

      <!-- Contact info cards inline -->
      <div class="mb-8 grid gap-4 sm:grid-cols-3">
        <div class="group rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900/50">
          <div class="mb-3 flex size-12 items-center justify-center rounded-xl bg-primary-100 transition-transform duration-300 group-hover:scale-110 dark:bg-primary-950/50">
            <UIcon
              name="i-lucide-mail"
              class="size-6 text-primary-600 dark:text-primary-400"
            />
          </div>
          <h3 class="mb-1 text-sm font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
            Email
          </h3>
          <a
            href="mailto:hello@nicolas.dev"
            class="text-sm font-medium text-neutral-900 transition-colors hover:text-primary-600 dark:text-white dark:hover:text-primary-400"
          >
            nicolasdeza@hotmail.be
          </a>
        </div>

        <div class="group rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900/50">
          <div class="mb-3 flex size-12 items-center justify-center rounded-xl bg-primary-100 transition-transform duration-300 group-hover:scale-110 dark:bg-primary-950/50">
            <UIcon
              name="i-lucide-map-pin"
              class="size-6 text-primary-600 dark:text-primary-400"
            />
          </div>
          <h3 class="mb-1 text-sm font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
            Localisation
          </h3>
          <p class="text-sm font-medium text-neutral-900 dark:text-white">
            Belgique
          </p>
        </div>

        <div class="group rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900/50">
          <div class="mb-3 flex size-12 items-center justify-center rounded-xl bg-primary-100 transition-transform duration-300 group-hover:scale-110 dark:bg-primary-950/50">
            <UIcon
              name="i-lucide-clock"
              class="size-6 text-primary-600 dark:text-primary-400"
            />
          </div>
          <h3 class="mb-1 text-sm font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
            Disponibilité
          </h3>
          <p class="text-sm font-medium text-neutral-900 dark:text-white">
            Ouvert aux opportunités
          </p>
        </div>
      </div>

      <!-- Contact form full width -->
      <div class="rounded-3xl border border-neutral-200/80 bg-white p-8 shadow-xl dark:border-neutral-800 dark:bg-neutral-900/50 sm:p-12">
        <form @submit.prevent="onSubmit">
          <div class="space-y-6">
            <!-- Name & Email in row on desktop -->
            <div class="grid gap-6 sm:grid-cols-2">
              <div>
                <label class="mb-3 block text-sm font-semibold text-neutral-900 dark:text-white">
                  Nom complet <span class="text-primary-500">*</span>
                </label>
                <UInput
                  v-model="state.name"
                  placeholder="Nicolas Deza"
                  size="xl"
                  required
                  class="w-full"
                />
              </div>

              <div>
                <label class="mb-3 block text-sm font-semibold text-neutral-900 dark:text-white">
                  Adresse email <span class="text-primary-500">*</span>
                </label>
                <UInput
                  v-model="state.email"
                  type="email"
                  placeholder="hello@exemple.com"
                  size="xl"
                  required
                  class="w-full"
                />
              </div>
            </div>

            <!-- Message full width -->
            <div>
              <label class="mb-3 block text-sm font-semibold text-neutral-900 dark:text-white">
                Votre message <span class="text-primary-500">*</span>
              </label>
              <UTextarea
                v-model="state.message"
                placeholder="Parlez-moi de votre projet, vos besoins, vos objectifs..."
                :rows="8"
                size="xl"
                required
                class="w-full"
              />
            </div>

            <!-- Success message -->
            <div v-if="isSuccess">
              <UAlert
                icon="i-lucide-check-circle-2"
                color="success"
                variant="subtle"
                title="Message envoyé avec succès !"
                description="Je vous réponds très vite. Merci pour votre message !"
                class="border-l-4 border-success-500"
              />
            </div>

            <!-- Submit button -->
            <div class="pt-2 text-center">
              <UButton
                type="submit"
                size="xl"
                :loading="isSubmitting"
                :disabled="isSubmitting"
                icon="i-lucide-send"
                class="w-full justify-center font-semibold shadow-lg shadow-primary-500/30"
            >
                {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer' }}
              </UButton>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

