
// <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>
export default defineNuxtConfig({
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' }],
      script : [
        {
          src: "https://platform.linkedin.com/badges/js/profile.js",
          async: true,
          defer: true,
          type: "text/javascript"
        }
      ]
    }
  },
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
  modules: ["@nuxtjs/seo", "@nuxt/image", 'nuxt-gtag'],
  gtag: {
    id: 'G-729997XZPJ'
  },
})
