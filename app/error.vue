<script setup lang="ts">
import profile from '~~/content/profile.json'

const { ui } = profile
useHead({ htmlAttrs: { lang: 'en' }, title: `Page not found · ${profile.person.name}`, meta: [{ name: 'robots', content: 'noindex' }] })
</script>

<template>
  <main id="main" tabindex="-1" class="article">
    <p class="label">404</p>
    <h1>{{ ui.en.notFound }}</h1>
    <p lang="fr">{{ ui.fr.notFound }}</p>
    <p lang="es">{{ ui.es.notFound }}</p>
    <p class="actions">
      <a class="btn btn-accent" href="/">{{ ui.en.backHome }}</a>
      <a class="btn btn-ghost" href="/fr" lang="fr">{{ ui.fr.backHome }}</a>
      <a class="btn btn-ghost" href="/es" lang="es">{{ ui.es.backHome }}</a>
    </p>
  </main>
</template>
