<script setup lang="ts">
const currentYear = new Date().getFullYear()

const navigation = [
  { label: 'Projets', to: '#projects' },
  { label: 'Stack', to: '#stack' },
  { label: 'À propos', to: '#about' },
  { label: 'Contact', to: '#contact' }
]

const socials = [
  { name: 'LinkedIn', icon: 'i-simple-icons-linkedin', to: 'https://www.linkedin.com/in/nicolas-deza-411711330/', color: 'hover:text-[#0A66C2]' },
  { name: 'GitHub', icon: 'i-simple-icons-github', to: 'https://github.com/NicolasDeza', color: 'hover:text-neutral-900 dark:hover:text-white' },
  { name: 'Instagram', icon: 'i-simple-icons-instagram', to: 'https://www.instagram.com/nicolas__deza/', color: 'hover:text-[#E4405F]' }
]

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<template>
  <footer class="relative border-t border-neutral-200/80 bg-white/80 backdrop-blur-xl dark:border-neutral-800 dark:bg-neutral-950/80">
    <!-- Subtle gradient line -->
    <div class="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary-500/50 to-transparent" />

    <div class="mx-auto max-w-7xl px-4 pt-16 sm:pt-20 pb-8">
      <div class="grid gap-12 sm:grid-cols-2 lg:grid-cols-12">
        <!-- Brand column -->
        <div class="lg:col-span-5">
          <NuxtLink
            to="/"
            class="group inline-flex items-center gap-2 font-mono text-sm font-semibold tracking-tight text-neutral-900 transition-opacity hover:opacity-80 dark:text-white"
            @click="scrollToTop"
          >
            <span
              class="flex size-10 items-center justify-center rounded-xl bg-linear-to-br from-primary-400 to-primary-600 text-white shadow-lg shadow-primary-500/30 text-base font-bold transition-transform duration-200 group-hover:scale-110"
            >
              N
            </span>
            <span class="text-base">
              <span class="text-neutral-400 dark:text-neutral-500">~/</span>nicolas<span class="text-primary-400">.</span>deza
            </span>
          </NuxtLink>
          <p class="mt-6 max-w-xs text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
            Développeur web full-stack passionné par la création d'expériences digitales modernes et performantes.
          </p>
          <div class="mt-4 flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
            <UIcon name="i-lucide-map-pin" class="size-4 text-primary-500" />
            <span>Basé en Belgique</span>
          </div>
        </div>

        <!-- Navigation column -->
        <div class="lg:col-span-3">
          <h3 class="mb-5 text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            Navigation
          </h3>
          <ul class="space-y-3">
            <li
              v-for="link in navigation"
              :key="link.label"
            >
              <NuxtLink
                :to="link.to"
                class="group inline-flex items-center gap-2 text-sm font-medium text-neutral-600 transition-colors hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400"
              >
                <span class="size-1.5 rounded-full bg-primary-500/0 transition-all duration-200 group-hover:bg-primary-500" />
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Social links column -->
        <div class="lg:col-span-4">
          <h3 class="mb-5 text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            Me suivre
          </h3>
          <div class="flex flex-wrap gap-3">
            <a
              v-for="social in socials"
              :key="social.name"
              :href="social.to || '#'"
              :aria-label="social.name"
              target="_blank"
              rel="noopener noreferrer"
              class="group relative flex size-11 items-center justify-center overflow-hidden rounded-xl border border-neutral-200/80 bg-neutral-50 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900/50"
              :class="social.color"
            >
              <!-- Shine effect on hover -->
              <div class="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/10 to-transparent transition-transform duration-500 group-hover:translate-x-full" />

              <UIcon
                :name="social.icon"
                class="relative z-10 size-5 text-neutral-600 transition-colors dark:text-neutral-400"
              />
            </a>
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
