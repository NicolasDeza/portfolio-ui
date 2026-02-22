// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/eslint", "@nuxt/ui", "@nuxtjs/sitemap"],

  site: {
    url: "https://www.nicolasdeza.com",
  },

  runtimeConfig: {
    resendApiKey: process.env.RESEND_API_KEY,
  },

  devtools: {
    enabled: true,
  },

  css: ["~/assets/css/main.css"],

  app: {
    head: {
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&display=swap",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "48x48",
          href: "/nuxt-logo.png",
        },
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/nuxt-logo.png",
        },
      ],
      titleTemplate: "%s – Nicolas Deza",

      meta: [
        {
          name: "description",
          content:
            "Développeur web freelance en Belgique spécialisé en Nuxt, Vue.js, Laravel et WordPress. Création de sites modernes, performants et sur mesure.",
        },
        { name: "robots", content: "index, follow" },
        { name: "author", content: "Nicolas Deza" },
        { name: "theme-color", content: "#171717" },
      ],
    },
  },

  routeRules: {
    "/": { prerender: true },
  },

  compatibilityDate: "2025-01-15",

  eslint: {
    config: {
      stylistic: {
        commaDangle: "never",
        braceStyle: "1tbs",
      },
    },
  },
});
