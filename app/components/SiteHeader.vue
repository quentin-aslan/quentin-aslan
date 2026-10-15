<script setup lang="ts">
const route = useRoute()
const { lang, t, to, profile } = useSite()
const home = to('/')
const anchors = ['work', 'builder', 'experience', 'accessibility', 'skills', 'about', 'contact'] as const
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
    <nav :aria-label="t.langLabel">
      <ul class="langs">
        <li v-for="l in LANGS" :key="l">
          <a :href="localePath(l, path)" :hreflang="l" :lang="l" :aria-current="translated && l === lang ? 'page' : undefined">
            {{ l.toUpperCase() }} <span class="visually-hidden">{{ names[l] }}</span>
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>
