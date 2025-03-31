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
    '@nuxtjs/i18n', // P0f91
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
  i18n: { // Pf7d2
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json' },
      { code: 'fr', iso: 'fr-FR', file: 'fr.json' }
    ],
    defaultLocale: 'en', // P0c43
    lazy: true,
    langDir: 'locales/',
    vueI18n: {
      fallbackLocale: 'en',
    },
  },
})
