<script setup lang="ts">

useHead({
  link: [
    {
      rel: "canonical",
      href: "https://www.nicolasdeza.com/",
    },
  ],
});

useSeoMeta({
  title: "Développeur Web Freelance en Belgique",
  description:
    "Développeur Web freelance spécialisé en Nuxt, Vue.js, Laravel et WordPress. Je crée des sites web sur mesure, e-commerce et applications web modernes en Belgique.",

  robots: "index, follow",

  ogTitle: "Développeur Web – Nicolas Deza",
  ogDescription:
    "Développeur Web spécialisé en Nuxt, Vue.js, Laravel et WordPress. Sites web sur mesure, e-commerce et applications web modernes.",
  ogImage: "https://www.nicolasdeza.com/og-image.jpg",
  ogUrl: "https://www.nicolasdeza.com/",
  ogType: "website",

  twitterCard: "summary_large_image",
  twitterTitle: "Développeur Web – Nicolas Deza",
  twitterDescription:
    "Développeur Web spécialisé en Nuxt, Vue.js, Laravel et WordPress. Sites web sur mesure, e-commerce et applications web modernes.",
  twitterImage: "https://www.nicolasdeza.com/og-image.jpg",
});
</script>

<template>
  <div>
    <AppHero />
    <ProjectsSection />
    <StackSection />
    <AboutSection />
    <ContactSection />
  </div>
</template>
