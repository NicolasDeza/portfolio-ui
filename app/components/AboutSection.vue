<script setup lang="ts">
const stats = [
  // { value: '5+', label: 'Années d\'expérience' },
  // { value: '50+', label: 'Projets livrés' },
  { value: '100%', label: 'Clients satisfaits' }
]
</script>

<template>
  <section
    id="about"
    class="relative px-4 py-20 sm:py-32"
  >
    <div class="mx-auto max-w-7xl">
      <div class="grid gap-16 lg:grid-cols-2 lg:gap-20">
        <!-- Left column - Content -->
        <div>
          <!-- Section header -->
          <div class="mb-8">
            <h2 class="mb-4 text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
              À propos
            </h2>
            <p class="text-lg text-neutral-600 dark:text-neutral-400">
              Développeur web passionné par la création d'expériences digitales exceptionnelles.
            </p>
          </div>

          <!-- Description -->
          <div class="space-y-4 text-neutral-600 dark:text-neutral-400">
            <p>
              Depuis plus de 5 ans, j'accompagne startups et entreprises dans la réalisation de leurs projets web.
              De la conception à la mise en production, je transforme vos idées en solutions techniques performantes et évolutives.
            </p>
            <p>
              Mon approche allie <span class="font-semibold text-neutral-900 dark:text-white">expertise technique</span>,
              <span class="font-semibold text-neutral-900 dark:text-white">design moderne</span> et
              <span class="font-semibold text-neutral-900 dark:text-white">focus sur la performance</span>.
              Chaque ligne de code est pensée pour offrir la meilleure expérience utilisateur possible.
            </p>
            <p>
              Spécialisé dans l'écosystème JavaScript moderne (Vue, Nuxt, React),
              je maîtrise l'ensemble de la stack — du frontend au backend, en passant par le déploiement et l'optimisation SEO.
            </p>
          </div>

          <!-- Stats -->
          <div class="mt-12 grid grid-cols-3 gap-6">
            <div
              v-for="stat in stats"
              :key="stat.label"
              class="text-center"
            >
              <div class="mb-2 text-3xl font-bold text-primary-600 dark:text-primary-400">
                {{ stat.value }}
              </div>
              <div class="text-sm text-neutral-600 dark:text-neutral-400">
                {{ stat.label }}
              </div>
            </div>
          </div>

          <!-- CTA -->
          <div class="mt-10 flex flex-wrap gap-4">
            <UButton
              to="mailto:hello@nicolas.dev"
              size="lg"
              icon="i-lucide-mail"
              class="font-semibold"
            >
              Me contacter
            </UButton>
            <UButton
              to="#"
              size="lg"
              color="neutral"
              variant="outline"
              icon="i-lucide-download"
            >
              Télécharger mon CV
            </UButton>
          </div>
        </div>

        <!-- Right column - Approach -->
        <div>
          <div class="sticky top-24 space-y-6">
            <!-- Approach card -->
            <div class="rounded-2xl border border-primary-200/50 bg-primary-50/30 p-8 backdrop-blur-sm dark:border-primary-900/30 dark:bg-primary-950/20">
              <h3 class="mb-6 flex items-center gap-2 text-2xl font-bold text-neutral-900 dark:text-white">
                <UIcon
                  name="i-lucide-sparkles"
                  class="size-6 text-primary-600 dark:text-primary-400"
                />
                Mon approche
              </h3>
              <ul class="space-y-4">
                <li class="flex items-start gap-3">
                  <UIcon
                    name="i-lucide-check-circle"
                    class="mt-0.5 size-5 shrink-0 text-primary-600 dark:text-primary-400"
                  />
                  <div>
                    <div class="font-semibold text-neutral-900 dark:text-white">
                      Code propre et maintenable
                    </div>
                    <div class="text-sm text-neutral-600 dark:text-neutral-400">
                      Architecture solide et documentation complète
                    </div>
                  </div>
                </li>
                <li class="flex items-start gap-3">
                  <UIcon
                    name="i-lucide-check-circle"
                    class="mt-0.5 size-5 shrink-0 text-primary-600 dark:text-primary-400"
                  />
                  <div>
                    <div class="font-semibold text-neutral-900 dark:text-white">
                      Performance optimale
                    </div>
                    <div class="text-sm text-neutral-600 dark:text-neutral-400">
                      Accessibilité et SEO intégrés dès le départ
                    </div>
                  </div>
                </li>
                <li class="flex items-start gap-3">
                  <UIcon
                    name="i-lucide-check-circle"
                    class="mt-0.5 size-5 shrink-0 text-primary-600 dark:text-primary-400"
                  />
                  <div>
                    <div class="font-semibold text-neutral-900 dark:text-white">
                      Communication transparente
                    </div>
                    <div class="text-sm text-neutral-600 dark:text-neutral-400">
                      Points réguliers et livraisons itératives
                    </div>
                  </div>
                </li>
                <li class="flex items-start gap-3">
                  <UIcon
                    name="i-lucide-check-circle"
                    class="mt-0.5 size-5 shrink-0 text-primary-600 dark:text-primary-400"
                  />
                  <div>
                    <div class="font-semibold text-neutral-900 dark:text-white">
                      Respect des engagements
                    </div>
                    <div class="text-sm text-neutral-600 dark:text-neutral-400">
                      Délais et budget maîtrisés
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <!-- Values/Why work with me -->
            <div class="rounded-2xl border border-neutral-200/80 bg-white p-8 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/50">
              <h3 class="mb-6 text-2xl font-bold text-neutral-900 dark:text-white">
                Pourquoi me choisir ?
              </h3>
              <ul class="space-y-3 text-neutral-600 dark:text-neutral-400">
                <li class="flex items-start gap-2">
                  <span class="text-primary-600 dark:text-primary-400">→</span>
                  <span>Expertise full-stack complète</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-primary-600 dark:text-primary-400">→</span>
                  <span>Design moderne et tendances actuelles</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-primary-600 dark:text-primary-400">→</span>
                  <span>Solutions scalables et évolutives</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-primary-600 dark:text-primary-400">→</span>
                  <span>Support et maintenance post-livraison</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
