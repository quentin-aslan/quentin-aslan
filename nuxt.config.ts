export default defineNuxtConfig({
  site: {
    url: 'https://quentinaslan.fr',
    name: 'Quentin Aslan | Software Engineer',
    description: 'Full-Stack Developer in Montreal. Explore my projects and skills.',
    defaultLocale: 'en'
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxtjs/seo", "@nuxt/image"],
})