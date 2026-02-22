<script setup lang="ts">
const isVisible = ref(false)
const sectionRef = ref<HTMLElement | null>(null)

const projects = [
  {
    id: 1,
    title: 'CG Renov',
    description: 'Site vitrine sur mesure pour une entreprise de rénovation belge, avec un design professionnel, des performances élevées et une structure SEO optimisée pour la visibilité locale.',
    image: '/projects/og-cgrenov.jpg', // À remplacer par OG image
    tags: ['Nuxt', 'Tailwind', 'GSAP', 'TypeScript'],
    link: 'https://www.cgrenov.be/',
    github: ''
  },
  {
    id: 2,
    title: 'Nuxt Starter Template',
    description: 'Starter Nuxt moderne, optimisé pour la performance, le SEO et le dark mode, avec un design soigné prêt pour la production.',
    image: '/projects/nuxt-starter.jpg',
    tags: ['Nuxt', 'Tailwind'],
    link: 'https://nuxt-starter-vitrine.vercel.app/',
    github: ''
  },
  {
    id: 3,
    title: 'Atelier de Bidibule',
    description: 'Site e-commerce sur mesure pour une créatrice indépendante, avec personnalisation des produits et paiement en ligne.',
    image: '/projects/atelier-de-bidibulle.png',
    tags: ['Laravel', 'Vue', 'Inertia', 'Tailwind', 'Stripe'],
    link: 'https://atelierdebidibulle.be/',
    github: ''
  },
  {
    id: 4,
    title: 'AVH Garden',
    description: "Site vitrine pour une entreprise dans le batiment d'aménagement intérieur et extérieur.",
    image: '/projects/og-avhgarden.jpg',
    tags: ['Nuxt', 'Tailwind'],
    link: 'https://avh-garden.be/',
    github: ''
  },
  {
    id: 5,
    title: 'Samu Horticole',
    description: 'Dashboard pour un indépendant horticole, permettant la gestion des clients et machines.',
    image: '/projects/samu-horticole.png',
    tags: ['Laravel', 'Vue', 'Intertia', 'Tailwind'],
    link: 'https://nicolasdeza.com',
    github: ''
  }

]

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }

  onUnmounted(() => {
    if (sectionRef.value) {
      observer.unobserve(sectionRef.value)
    }
  })
})
</script>

<template>
  <section
    id="projects"
    ref="sectionRef"
    class="relative px-4 py-20 sm:py-32"
  >
    <div class="mx-auto max-w-7xl">
      <!-- Section header -->
      <div
        class="mb-16 text-center transition-all duration-850 ease-out"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
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
          v-for="(project, index) in projects"
          :key="project.id"
          class="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200/80 bg-white shadow-sm transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-neutral-900/10 dark:border-neutral-800 dark:bg-neutral-900/50 dark:hover:shadow-neutral-950/50"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'"
          :style="{ transitionDelay: `${150 + index * 100}ms` }"
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
                rel="noopener noreferrer"
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
                rel="noopener noreferrer"
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
      <div
        class="mt-16 text-center transition-all duration-700 ease-out delay-700"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
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
