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
    url: 'https://quentinaslan.fr',
    name: 'Quentin Aslan | Software Engineer',
    description: 'Full-Stack Developer in Montreal. Explore my projects and skills.',
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
  ],

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
