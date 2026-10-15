export default defineNuxtConfig({
  compatibilityDate: '2026-10-01',
  css: ['~/assets/main.css'],
  // The site has no interactivity: ship HTML and CSS only.
  features: { noScripts: true },
  // No client-side navigation, so no payload files; render the 404 page as real HTML.
  experimental: { payloadExtraction: false, prerenderErrorPages: true, appManifest: false },
  app: {
    head: {
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'preload', href: '/fonts/instrument-serif-normal.woff2', as: 'font', type: 'font/woff2', crossorigin: '' },
        { rel: 'preload', href: '/fonts/instrument-serif-italic.woff2', as: 'font', type: 'font/woff2', crossorigin: '' },
        { rel: 'preload', href: '/fonts/schibsted-grotesk.woff2', as: 'font', type: 'font/woff2', crossorigin: '' },
      ],
      meta: [{ name: 'theme-color', content: '#faf8f5' }],
    },
  },
  nitro: {
    // Static files only: stops Nitro from switching to its Cloudflare server preset on Cloudflare's build machines.
    preset: 'static',
    prerender: {
      // `/fr` is written as `fr.html`, so canonical URLs never redirect to a trailing slash.
      autoSubfolderIndex: false,
      // Every page is reachable from the home page, so crawling finds them all.
      crawlLinks: true,
      routes: ['/', '/sitemap.xml', '/llms.txt'],
      // SPA fallback page: useless without client-side rendering.
      ignore: ['/200.html'],
    },
  },
})
