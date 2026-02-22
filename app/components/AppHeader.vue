<script setup lang="ts">
const colorMode = useColorMode()
const isMenuOpen = ref(false)

const navLinks = [
  { label: 'Projets', to: '#projects' },
  { label: 'Stack', to: '#stack' },
  { label: 'À propos', to: '#about' },
  { label: 'Contact', to: '#contact' }
]

function toggleTheme() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

// Close mobile menu on route change
const route = useRoute()
watch(() => route.path, () => {
  isMenuOpen.value = false
})
</script>

<template>
  <header
    class="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-4"
  >
    <!-- Floating pill nav -->
    <nav
      class="relative w-full max-w-3xl flex items-center justify-between gap-4 px-4 py-2.5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl shadow-black/20 dark:bg-neutral-950/60 dark:border-white/8"
    >
      <!-- Subtle gradient top line -->
      <div class="pointer-events-none absolute inset-x-0 top-0 h-px rounded-full bg-linear-to-r from-transparent via-white/25 to-transparent" />

      <!-- Logo / Name -->
      <NuxtLink
        to="/"
        class="group flex items-center gap-2 font-mono text-sm font-semibold tracking-tight text-neutral-900 dark:text-white select-none"
      >
        <span
          class="flex size-7 items-center justify-center rounded-lg bg-linear-to-br from-primary-400 to-primary-600 text-white shadow-lg shadow-primary-500/30 text-xs font-bold transition-transform duration-200 group-hover:scale-110"
        >
          N
        </span>
        <span class="hidden sm:block">
          <span class="text-neutral-400 dark:text-neutral-500">~/</span>nicolas<span class="text-primary-400">.</span>deza
        </span>
      </NuxtLink>

      <!-- Desktop nav links -->
      <ul class="hidden md:flex items-center gap-0.5">
        <li
          v-for="link in navLinks"
          :key="link.label"
        >
          <NuxtLink
            :to="link.to"
            class="relative px-3 py-1.5 text-sm font-medium text-neutral-600 dark:text-neutral-400 rounded-lg transition-colors duration-150 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/8"
            active-class="text-neutral-900 dark:text-white bg-neutral-100 dark:bg-white/8"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>

      <!-- Right actions -->
      <div class="flex items-center gap-2">
        <!-- Theme toggle -->
        <UButton
          :icon="colorMode.value === 'dark' ? 'i-lucide-sun' : 'i-lucide-moon'"
          variant="ghost"
          color="neutral"
          size="sm"
          :aria-label="colorMode.value === 'dark' ? 'Mode clair' : 'Mode sombre'"
          class="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
          @click="toggleTheme"
        />

        <!-- CTA -->
        <UButton
          label="Me contacter"
          to="mailto:hello@nicolas.dev"
          size="sm"
          class="hidden sm:flex font-medium shadow-lg shadow-primary-500/20"
          trailing-icon="i-lucide-arrow-up-right"
        />

        <!-- Mobile menu toggle -->
        <UButton
          :icon="isMenuOpen ? 'i-lucide-x' : 'i-lucide-menu'"
          variant="ghost"
          color="neutral"
          size="sm"
          class="md:hidden text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
          aria-label="Menu"
          @click="isMenuOpen = !isMenuOpen"
        />
      </div>
    </nav>

    <!-- Mobile dropdown menu -->
    <Transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="isMenuOpen"
        class="absolute top-full mt-2 w-full max-w-3xl rounded-2xl border border-white/10 bg-white/80 dark:bg-neutral-950/90 backdrop-blur-xl shadow-2xl shadow-black/20 overflow-hidden"
      >
        <ul class="flex flex-col p-2 gap-0.5">
          <li
            v-for="link in navLinks"
            :key="link.label"
          >
            <NuxtLink
              :to="link.to"
              class="flex items-center gap-3 px-4 py-3 text-sm font-medium text-neutral-600 dark:text-neutral-400 rounded-xl transition-colors hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/8"
              @click="isMenuOpen = false"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
          <li class="pt-1 border-t border-neutral-200/60 dark:border-white/8 mt-1">
            <UButton
              label="Me contacter"
              to="mailto:hello@nicolas.dev"
              size="sm"
              block
              trailing-icon="i-lucide-arrow-up-right"
              class="font-medium"
            />
          </li>
        </ul>
      </div>
    </Transition>
  </header>
</template>
