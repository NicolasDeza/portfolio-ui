<script setup lang="ts">
const techStack = [
  'Vue.js',
  'Nuxt',
  'TypeScript',
  'Tailwind CSS',
  'Node.js'
]
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
        <span class="inline-flex items-center gap-2 rounded-full border border-primary-200/50 bg-primary-50/50 px-4 py-1.5 text-sm font-medium text-primary-700 backdrop-blur-sm dark:border-primary-900/50 dark:bg-primary-950/30 dark:text-primary-300">
          <span class="relative flex size-2">
            <span class="absolute inline-flex size-full animate-ping rounded-full bg-primary-400 opacity-75" />
            <span class="relative inline-flex size-2 rounded-full bg-primary-500" />
          </span>
          Disponible pour vos projets
        </span>
      </div>

      <!-- Main heading -->
      <h1 class="mb-2 text-5xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-6xl lg:text-7xl">
        Nicolas Deza
      </h1>

      <p class="mb-6 text-2xl font-semibold text-neutral-700 dark:text-neutral-300 sm:text-3xl">
        Développeur Web
        <span class="bg-linear-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
          Full-Stack
        </span>
      </p>

      <!-- Subheading -->
      <p class="mx-auto mb-8 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400 sm:text-xl">
        Je crée des applications web modernes, performantes et évolutives.
        De l'idée au déploiement, je transforme vos projets en produits digitaux d'exception.
      </p>

      <!-- CTAs -->
      <div class="mb-12 flex flex-wrap items-center justify-center gap-4">
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
      <div class="flex flex-wrap items-center justify-center gap-3">
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
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <UIcon
          name="i-lucide-chevron-down"
          class="size-6 text-neutral-400 dark:text-neutral-600"
        />
      </div>
    </div>
  </section>
</template>
