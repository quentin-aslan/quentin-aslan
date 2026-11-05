// Theme toggle: runs in <head> so a stored choice applies before the first paint. Choosing the OS theme again clears the choice.
const THEME = `(()=>{const r=document.documentElement,m=matchMedia('(prefers-color-scheme: dark)'),os=()=>m.matches?'dark':'light',cur=()=>r.dataset.theme||os(),sync=()=>document.querySelectorAll('.theme-toggle').forEach(b=>b.setAttribute('aria-pressed',cur()==='dark'));try{const t=localStorage.getItem('theme');if(t)r.dataset.theme=t}catch{}r.classList.add('js');addEventListener('DOMContentLoaded',sync);m.addEventListener('change',sync);addEventListener('click',e=>{if(!e.target.closest('.theme-toggle'))return;const n=cur()==='dark'?'light':'dark';try{if(n===os()){delete r.dataset.theme;localStorage.removeItem('theme')}else{r.dataset.theme=n;localStorage.setItem('theme',n)}}catch{}sync()})})()`

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
        { rel: 'preload', href: '/fonts/newsreader-normal.woff2', as: 'font', type: 'font/woff2', crossorigin: '' },
        { rel: 'preload', href: '/fonts/schibsted-grotesk.woff2', as: 'font', type: 'font/woff2', crossorigin: '' },
      ],
      meta: [
        { name: 'color-scheme', content: 'light dark' },
        { name: 'theme-color', content: '#faf8f5', media: '(prefers-color-scheme: light)' },
        { name: 'theme-color', content: '#181715', media: '(prefers-color-scheme: dark)' },
      ],
      script: [{ innerHTML: THEME }],
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
