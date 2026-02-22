<script setup lang="ts">
const technologies = [
  { name: 'Nuxt', icon: 'i-simple-icons-nuxtdotjs', color: 'text-[#00DC82]' },
  { name: 'Vue.js', icon: 'i-simple-icons-vuedotjs', color: 'text-[#4FC08D]' },
  { name: 'TypeScript', icon: 'i-simple-icons-typescript', color: 'text-[#3178C6]' },
  { name: 'Node.js', icon: 'i-simple-icons-nodedotjs', color: 'text-[#339933]' },
  { name: 'Tailwind CSS', icon: 'i-simple-icons-tailwindcss', color: 'text-[#06B6D4]' },
  { name: 'Laravel', icon: 'i-simple-icons-laravel', color: 'text-[#FF2D20]' },
  { name: 'JavaScript', icon: 'i-simple-icons-javascript', color: 'text-[#F7DF1E]' },
  { name: 'Supabase', icon: 'i-simple-icons-supabase', color: 'text-[#3FCF8E]' },
  { name: 'Git', icon: 'i-simple-icons-git', color: 'text-[#F05032]' },
  { name: 'Vercel', icon: 'i-simple-icons-vercel', color: 'text-neutral-900 dark:text-white' },
  { name: 'Vite', icon: 'i-simple-icons-vite', color: 'text-[#646CFF]' }
]

// Duplicate for seamless infinite scroll
const duplicatedTechnologies = [...technologies, ...technologies]
</script>

<template>
  <section
    id="stack"
    class="relative overflow-hidden px-4 py-20 sm:py-32"
  >
    <div class="mx-auto max-w-7xl">
      <!-- Section header -->
      <div class="mb-16 text-center">
        <h2 class="mb-4 text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
          Stack technique
        </h2>
        <p class="mx-auto max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
          Les technologies et outils que j'utilise au quotidien pour créer des applications web performantes.
        </p>
      </div>

      <!-- Infinite carousel -->
      <div class="relative">
        <!-- Gradient masks -->
        <div class="pointer-events-none absolute inset-y-0 left-0 z-10 w-1/6 bg-linear-to-r from-white to-transparent dark:from-neutral-950" />
        <div class="pointer-events-none absolute inset-y-0 right-0 z-10 w-1/6 bg-linear-to-l from-white to-transparent dark:from-neutral-950" />

        <!-- Scrolling container -->
        <div class="flex gap-12 overflow-hidden py-8">
          <div class="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-12">
            <div
              v-for="(tech, index) in duplicatedTechnologies"
              :key="`tech-${index}`"
              class="group flex shrink-0 flex-col items-center gap-3 transition-transform duration-300 hover:scale-110"
            >
              <div class="flex size-20 items-center justify-center rounded-2xl border border-neutral-200/80 bg-white shadow-sm transition-all duration-300 group-hover:border-neutral-300 group-hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900/50 dark:group-hover:border-neutral-700">
                <UIcon
                  :name="tech.icon"
                  :class="['size-10 transition-colors duration-300', tech.color]"
                />
              </div>
              <span class="text-sm font-medium text-neutral-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:text-neutral-400">
                {{ tech.name }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Optional: Feature highlights -->
      <div class="mt-20 grid gap-6 sm:grid-cols-3">
        <div class="rounded-2xl border border-neutral-200/80 bg-white p-6 text-center shadow-sm dark:border-neutral-800 dark:bg-neutral-900/50">
          <UIcon
            name="i-lucide-zap"
            class="mx-auto mb-3 size-8 text-primary-600 dark:text-primary-400"
          />
          <h3 class="mb-2 font-semibold text-neutral-900 dark:text-white">
            Performance
          </h3>
          <p class="text-sm text-neutral-600 dark:text-neutral-400">
            Optimisation poussée pour des temps de chargement ultra-rapides
          </p>
        </div>

        <div class="rounded-2xl border border-neutral-200/80 bg-white p-6 text-center shadow-sm dark:border-neutral-800 dark:bg-neutral-900/50">
          <UIcon
            name="i-lucide-layers"
            class="mx-auto mb-3 size-8 text-primary-600 dark:text-primary-400"
          />
          <h3 class="mb-2 font-semibold text-neutral-900 dark:text-white">
            Full-Stack
          </h3>
          <p class="text-sm text-neutral-600 dark:text-neutral-400">
            Maîtrise complète du frontend, backend et infrastructure
          </p>
        </div>

        <div class="rounded-2xl border border-neutral-200/80 bg-white p-6 text-center shadow-sm dark:border-neutral-800 dark:bg-neutral-900/50">
          <UIcon
            name="i-lucide-sparkles"
            class="mx-auto mb-3 size-8 text-primary-600 dark:text-primary-400"
          />
          <h3 class="mb-2 font-semibold text-neutral-900 dark:text-white">
            UI/UX moderne
          </h3>
          <p class="text-sm text-neutral-600 dark:text-neutral-400">
            Interfaces élégantes et intuitives avec les dernières tendances
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee {
  animation: marquee 40s linear infinite;
}

.animate-marquee:hover {
  animation-play-state: paused;
}
</style>
