<script setup lang="ts">
const currentYear = new Date().getFullYear()

const navigation = [
  { label: 'Projets', to: '#projects' },
  { label: 'Stack', to: '#stack' },
  { label: 'À propos', to: '#about' }
]

const socials = [
  { name: 'LinkedIn', icon: 'i-simple-icons-linkedin', to: '', color: 'hover:text-[#0A66C2]' },
  { name: 'GitHub', icon: 'i-simple-icons-github', to: '', color: 'hover:text-neutral-900 dark:hover:text-white' },
  { name: 'Instagram', icon: 'i-simple-icons-instagram', to: '', color: 'hover:text-[#E4405F]' }
]
</script>

<template>
  <footer class="border-t border-neutral-200/80 bg-white/80 backdrop-blur-xl dark:border-neutral-800 dark:bg-neutral-950/80">
    <div class="mx-auto max-w-7xl px-4 py-12 sm:py-16">
      <div class="grid gap-12 sm:grid-cols-2 lg:grid-cols-12">
        <!-- Brand column -->
        <div class="lg:col-span-5">
          <NuxtLink
            to="/"
            class="group inline-flex items-center gap-2 font-mono text-sm font-semibold tracking-tight text-neutral-900 transition-opacity hover:opacity-80 dark:text-white"
          >
            <span
              class="flex size-8 items-center justify-center rounded-lg bg-linear-to-br from-primary-400 to-primary-600 text-white shadow-lg shadow-primary-500/30 text-sm font-bold transition-transform duration-200 group-hover:scale-110"
            >
              N
            </span>
            <span>
              <span class="text-neutral-400 dark:text-neutral-500">~/</span>nicolas<span class="text-primary-400">.</span>dev
            </span>
          </NuxtLink>
          <p class="mt-4 max-w-xs text-sm text-neutral-600 dark:text-neutral-400">
            Développeur web full-stack passionné par la création d'expériences digitales modernes et performantes.
          </p>
          <p class="mt-4 max-w-xs text-sm text-neutral-600 dark:text-neutral-400">
            Basé en Belgique
          </p>
        </div>

        <!-- Navigation column -->
        <div class="lg:col-span-3">
          <h3 class="mb-4 text-sm font-semibold text-neutral-900 dark:text-white">
            Navigation
          </h3>
          <ul class="space-y-3">
            <li
              v-for="link in navigation"
              :key="link.label"
            >
              <NuxtLink
                :to="link.to"
                class="text-sm text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Social links column -->
        <div class="lg:col-span-4">
          <h3 class="mb-4 text-sm font-semibold text-neutral-900 dark:text-white">
            Me suivre
          </h3>
          <div class="flex gap-3">
            <UButton
              v-for="social in socials"
              :key="social.name"
              :to="social.to || '#'"
              :aria-label="social.name"
              :icon="social.icon"
              color="neutral"
              variant="ghost"
              size="sm"
              :class="['transition-colors', social.color]"
              target="_blank"
            />
          </div>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="mt-12 border-t border-neutral-200/80 pt-8 dark:border-neutral-800">
        <div class="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p class="text-sm text-neutral-500 dark:text-neutral-400">
            © {{ currentYear }} Nicolas Deza – Tous droits réservés.
          </p>
          <div class="flex gap-6">
            <NuxtLink
              to="#"
              class="text-sm text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
            >
              Mentions légales
            </NuxtLink>
            <NuxtLink
              to="#"
              class="text-sm text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
            >
              Confidentialité
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
