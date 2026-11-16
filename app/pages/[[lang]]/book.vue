<script setup lang="ts">
definePageMeta({
  validate: route => !route.params.lang || ['fr', 'es'].includes(route.params.lang as string),
})

const { lang, t, to, profile } = useSite()
const { person } = profile
const b = profile.booking[lang]
const path = '/book'

useSeo({
  title: b.metaTitle,
  description: b.metaDescription,
  path,
  jsonLd: [
    {
      '@type': 'ContactPage',
      'name': b.title,
      'description': b.metaDescription,
      'inLanguage': lang,
      'url': person.url + to(path),
      'about': { '@id': `${person.url}/#person` },
      'potentialAction': { '@type': 'ReserveAction', 'name': b.title, 'target': person.url + to(path) },
    },
    breadcrumbLd([
      { name: person.name, path: to('/') },
      { name: b.title, path: to(path) },
    ]),
  ],
})
</script>

<template>
  <main id="main" tabindex="-1" class="article booking">
    <nav class="breadcrumb" :aria-label="t.breadcrumb">
      <ol>
        <li><a :href="to('/')">{{ person.name }}</a></li>
      </ol>
    </nav>
    <h1>{{ b.title }}</h1>
    <p class="intro">{{ b.intro }}</p>
    <iframe class="booking-frame" :src="person.cal" :title="b.iframeTitle" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" />
    <p class="note">
      {{ b.fallback }}
      <a :href="person.cal" target="_blank" rel="noopener">{{ b.openOnCal }} <span aria-hidden="true">↗</span></a>
      · <a :href="`mailto:${person.email}`">{{ t.emailMe }}</a>
    </p>
  </main>
</template>
