<script setup lang="ts">
const techStack = [
  'Vue.js',
  'Nuxt',
  'TypeScript',
  'Tailwind CSS',
  'WordPress'
]

const mounted = ref(false)

onMounted(() => {
  setTimeout(() => {
    mounted.value = true
  }, 100)
})
</script>

<template>
  <section class="relative flex min-h-[calc(100vh-5rem)] items-center justify-center overflow-hidden px-4 py-20 sm:py-32">
    <!-- Gradient orbs background -->
    <div class="pointer-events-none absolute inset-0 overflow-hidden">
      <div class="absolute -left-40 -top-40 size-80 rounded-full bg-primary-500/20 blur-3xl" />
      <div class="absolute -right-40 top-1/3 size-96 rounded-full bg-primary-400/10 blur-3xl" />
      <div class="absolute bottom-0 left-1/3 size-72 rounded-full bg-primary-600/15 blur-3xl" />
    </div>


    <div class="relative z-10 mx-auto max-w-4xl text-center">
      <!-- Badge -->
      <div class="mb-6 flex justify-center">
        <span
          class="inline-flex items-center gap-2 rounded-full border border-primary-200/50 bg-primary-50/50 px-4 py-1.5 text-sm font-medium text-primary-700 backdrop-blur-sm dark:border-primary-900/50 dark:bg-primary-950/30 dark:text-primary-300 transition-all duration-700 ease-out"
          :class="mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'"
        >
          <span class="relative flex size-2">
            <span class="absolute inline-flex size-full animate-ping rounded-full bg-primary-400 opacity-75" />
            <span class="relative inline-flex size-2 rounded-full bg-primary-500" />
          </span>
          Disponible pour vos projets
        </span>
      </div>

      <!-- Main heading -->
<h1 class="mb-6 text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-7xl lg:text-7xl leading-tight transition-all duration-700 ease-out delay-150"
    :class="mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'">
  Nicolas Deza
  <span class="block mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-neutral-700 dark:text-neutral-300">
    Développeur Web
    <span class="bg-linear-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
      Full-Stack
    </span>
  </span>
</h1>

      <!-- Subheading -->
      <p class="mx-auto mb-8 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400 sm:text-xl transition-all duration-700 ease-out delay-300"
         :class="mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'">
        Créateur de sites et applications web sur mesure, j’aide les entreprises à développer une présence digitale moderne, performante et évolutive.

      </p>

      <!-- CTAs -->
      <div class="mb-12 flex flex-wrap items-center justify-center gap-4 transition-all duration-700 ease-out delay-450ms"
           :class="mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'">
        <UButton
          to="#projects"
          size="xl"
          icon="i-lucide-rocket"
          trailing-icon="i-lucide-arrow-down"
          class="font-semibold shadow-lg shadow-primary-500/25"
        >
          Voir mes projets
        </UButton>

        <UButton
          to="mailto:hello@nicolas.dev"
          size="xl"
          color="neutral"
          variant="subtle"
          icon="i-lucide-send"
          class="font-semibold"
        >
          Discutons de votre projet
        </UButton>
      </div>

      <!-- Tech stack pills -->
      <div class="flex flex-wrap items-center justify-center gap-3 transition-all duration-700 ease-out delay-600ms"
           :class="mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'">
        <span class="text-sm font-medium text-neutral-500 dark:text-neutral-400">
          Stack technique :
        </span>
        <div class="flex flex-wrap items-center justify-center gap-2">
          <span
            v-for="tech in techStack"
            :key="tech"
            class="rounded-lg border border-neutral-200/80 bg-white/60 px-3 py-1 text-sm font-medium text-neutral-700 backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900/40 dark:text-neutral-300"
          >
            {{ tech }}
          </span>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="mt-12  animate-bounce transition-all duration-700 ease-out delay-700 sm:block"
           :class="mounted ? 'opacity-100' : 'opacity-0'">
        <UIcon
          name="i-lucide-chevron-down"
          class="size-6 text-neutral-400 dark:text-neutral-600"
        />
      </div>
    </div>
  </section>
</template>
