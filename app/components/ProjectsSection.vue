<script setup lang="ts">
const projects = [
  {
    id: 1,
    title: 'E-commerce Headless',
    description: 'Plateforme e-commerce moderne avec Nuxt & Stripe. Interface admin complète, gestion produits, commandes et analytics en temps réel.',
    image: '', // À remplacer par OG image
    tags: ['Nuxt', 'Vue', 'Stripe', 'Tailwind'],
    link: '',
    github: ''
  },
  {
    id: 2,
    title: 'Dashboard SaaS',
    description: 'Application SaaS B2B avec authentification, gestion multi-tenants, facturation récurrente et API REST documentée.',
    image: '',
    tags: ['TypeScript', 'Node.js', 'PostgreSQL', 'Docker'],
    link: '',
    github: ''
  },
  {
    id: 3,
    title: 'App Mobile PWA',
    description: 'Progressive Web App pour le suivi et la gestion de tâches avec synchronisation offline-first et notifications push.',
    image: '',
    tags: ['Vue', 'PWA', 'IndexedDB', 'Firebase'],
    link: '',
    github: ''
  },
  {
    id: 4,
    title: 'API REST & GraphQL',
    description: 'API hybride REST/GraphQL avec authentification JWT, rate limiting, documentation automatique et tests end-to-end.',
    image: '',
    tags: ['Node.js', 'GraphQL', 'Redis', 'Jest'],
    link: '',
    github: ''
  },
  {
    id: 5,
    title: 'CMS Headless Custom',
    description: 'Système de gestion de contenu sur-mesure avec éditeur WYSIWYG, versioning, workflow de publication et multi-langues.',
    image: '',
    tags: ['Nuxt', 'TipTap', 'MongoDB', 'Express'],
    link: '',
    github: ''
  }

]
</script>

<template>
  <section
    id="projects"
    class="relative px-4 py-20 sm:py-32"
  >
    <div class="mx-auto max-w-7xl">
      <!-- Section header -->
      <div class="mb-16 text-center">
        <h2 class="mb-4 text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
          Projets réalisés
        </h2>
        <p class="mx-auto max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
          Une sélection de projets web sur lesquels j'ai travaillé.
          De l'e-commerce aux SaaS, chaque projet est une opportunité de repousser les limites.
        </p>
      </div>

      <!-- Projects grid -->
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="project in projects"
          :key="project.id"
          class="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-neutral-900/10 dark:border-neutral-800 dark:bg-neutral-900/50 dark:hover:shadow-neutral-950/50"
        >
          <!-- Image placeholder -->
          <div class="relative aspect-video w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800">
            <div
              v-if="!project.image"
              class="flex size-full items-center justify-center"
            >
              <UIcon
                name="i-lucide-image"
                class="size-12 text-neutral-300 dark:text-neutral-700"
              />
            </div>
            <img
              v-else
              :src="project.image"
              :alt="project.title"
              class="size-full object-cover transition-transform duration-300 group-hover:scale-105"
            >

            <!-- Overlay gradient on hover -->
            <div class="absolute inset-0 bg-linear-to-t from-neutral-900/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>

          <!-- Content -->
          <div class="flex flex-1 flex-col p-6">
            <h3 class="mb-2 text-xl font-semibold text-neutral-900 dark:text-white">
              {{ project.title }}
            </h3>

            <p class="mb-4 flex-1 text-sm text-neutral-600 dark:text-neutral-400">
              {{ project.description }}
            </p>

            <!-- Tags -->
            <div class="mb-4 flex flex-wrap gap-2">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="rounded-md bg-neutral-100 px-2 py-1 text-xs font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
              >
                {{ tag }}
              </span>
            </div>

            <!-- Links -->
            <div class="flex items-center gap-3">
              <UButton
                :to="project.link || '#'"
                target="_blank"
                size="sm"
                variant="subtle"
                trailing-icon="i-lucide-arrow-up-right"
              >
                Voir le projet
              </UButton>

              <UButton
                v-if="project.github"
                :to="project.github"
                target="_blank"
                size="sm"
                color="neutral"
                variant="ghost"
                icon="i-simple-icons-github"
                aria-label="Code source"
              />
            </div>
          </div>

          <!-- Subtle shine effect -->
          <div class="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <div class="absolute -inset-full top-0 -z-10 block size-1/2 rotate-12 bg-linear-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shimmer_2s_ease-in-out]" />
          </div>
        </article>
      </div>

      <!-- CTA -->
      <div class="mt-16 text-center">
        <p class="mb-6 text-neutral-600 dark:text-neutral-400">
          Vous avez un projet en tête ?
        </p>
        <UButton
          to="mailto:hello@nicolas.dev"
          size="lg"
          icon="i-lucide-rocket"
          class="font-semibold shadow-lg shadow-primary-500/25"
        >
          Travaillons ensemble
        </UButton>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}
</style>
