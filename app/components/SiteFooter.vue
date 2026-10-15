<script setup lang="ts">
const { t, profile, lang } = useSite()
const updated = new Date(profile.updated).toLocaleDateString(lang, { dateStyle: 'long', timeZone: 'UTC' })
</script>

<template>
  <footer class="footer">
    <div class="wrap">
      <span>© {{ profile.updated.slice(0, 4) }} {{ profile.person.name }} · {{ t.updated }} <time :datetime="profile.updated">{{ updated }}</time></span>
      <span>
        <a href="/mentions-legales" hreflang="fr">{{ t.legal }}</a> ·
        <a href="https://github.com/quentin-aslan/quentin-aslan">{{ t.source }}</a>
      </span>
    </div>
  </footer>
</template>
