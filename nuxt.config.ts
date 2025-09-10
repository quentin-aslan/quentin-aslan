// <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>

import Aura from '@primevue/themes/aura'

export default defineNuxtConfig({
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' }],
      script: [
        {
          src: 'https://platform.linkedin.com/badges/js/profile.js',
          async: true,
          defer: true,
          type: 'text/javascript',
        },
      ],
    },
  },

  runtimeConfig: {
    STRAPI_READ_ONLY: process.env.NUXT_STRAPI_READ_ONLY,
    STRAPI_BASE_URL: process.env.NUXT_STRAPI_BASE_URL || 'http://localhost:1337/api',
    public: {
      STRAPI_READ_ONLY: process.env.NUXT_STRAPI_READ_ONLY,
      STRAPI_BASE_URL: process.env.NUXT_STRAPI_BASE_URL || 'http://localhost:1337/api',
    },
  },

  site: {
    url: 'https://quentinaslan.com',
    name: 'Quentin Aslan, Software Engineer',
    description: 'A passionate Full-Stack Developer. For the past 10 years, I’ve been building web and mobile apps across France 🇫🇷, Canada 🇨🇦, and the U.S 🇺🇸.  I enjoy working on meaningful projects — both professionally and in my free time.',
    defaultLocale: 'en',
  },

  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    '@nuxtjs/seo',
    '@nuxt/image',
    'nuxt-gtag',
    '@vueuse/nuxt',
    '@nuxt/eslint',
    '@primevue/nuxt-module',
    'motion-v/nuxt',
    '@nuxtjs/i18n',
  ],

  i18n: {
    locales: [
      { code: 'en', file: 'en.json', name: 'English' },
      { code: 'fr', file: 'fr.json', name: 'Français' },
    ],
    defaultLocale: 'en',
    strategy: 'no_prefix',
    langDir: 'locales',
    lazy: true,
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },

  gtag: {
    id: 'G-729997XZPJ',
  },

  primevue: {
    options: {
      theme: {
        preset: Aura,
      },
    },
  },

  compatibilityDate: '2025-04-07',
})
