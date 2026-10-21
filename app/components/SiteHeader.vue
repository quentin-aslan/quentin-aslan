<script setup lang="ts">
const route = useRoute()
const { lang, t, to, profile } = useSite()
const home = to('/')
const anchors = ['work', 'experience', 'builder', 'about', 'contact'] as const
const names = { en: 'English', fr: 'Français', es: 'Español' }
// The same page in another language, or that language's home when the page is not translated.
const translated = route.meta.translated !== false
const path = translated ? route.path.replace(/^\/(fr|es)(?=\/|$)/, '') || '/' : '/'
</script>

<template>
  <a class="skip" href="#main">{{ t.skip }}</a>
  <header class="header">
    <a class="brand" :href="home">{{ profile.person.name }}</a>
    <nav :aria-label="t.mainNav">
      <ul class="nav">
        <li v-for="a in anchors" :key="a"><a :href="`${home}#${a}`">{{ t.nav[a] }}</a></li>
      </ul>
    </nav>
    <div class="header-end">
      <a class="linkedin" :href="profile.person.linkedin" aria-label="LinkedIn">
        <svg aria-hidden="true" viewBox="0 0 24 24" width="22" height="22"><path fill="currentColor" d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" /></svg>
      </a>
      <nav :aria-label="t.langLabel">
      <ul class="langs">
        <li v-for="l in LANGS" :key="l">
          <a :href="localePath(l, path)" :hreflang="l" :lang="l" :aria-current="translated && l === lang ? 'page' : undefined">
            {{ l.toUpperCase() }} <span class="visually-hidden">{{ names[l] }}</span>
          </a>
        </li>
      </ul>
      </nav>
    </div>
  </header>
</template>
