<template>
  <section class="relative overflow-hidden px-4 py-20 sm:py-32">
    <!-- Background gradient orbs -->
    <div class="pointer-events-none absolute inset-0 overflow-hidden">
      <div class="absolute left-1/2 top-1/2 size-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-500/20 blur-3xl" />
    </div>

    <!-- Grid pattern overlay -->
    <!-- <div class="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,theme(colors.neutral.200/0.1)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.neutral.200/0.1)_1px,transparent_1px)] [background-size:4rem_4rem] dark:bg-[linear-gradient(to_right,theme(colors.neutral.800/0.3)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.neutral.800/0.3)_1px,transparent_1px)]" /> -->

    <div class="relative z-10 mx-auto max-w-4xl text-center">
      <h2 class="mb-6 text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl lg:text-6xl">
        Prêt à lancer votre projet ?
      </h2>

      <p class="mx-auto mb-10 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400 sm:text-xl">
        Discutons de vos objectifs et voyons comment je peux vous aider à créer une solution web qui dépasse vos attentes.
      </p>

      <UButton
        to="mailto:hello@nicolas.dev"
        size="xl"
        icon="i-lucide-send"
        class="font-semibold shadow-xl shadow-primary-500/30"
      >
        Contactez-moi
      </UButton>
    </div>
  </section>
</template>
