<template>
  <div class="bg-gray-50 overflow-hidden min-h-screen flex flex-col">
    <TheNavbar />
    <main class="flex-grow w-full h-full flex items-center justify-center">
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const head = useLocaleHead({
  addDirAttribute: true,
  addSeoAttributes: true,
})

// Dynamically set the lang attribute and other SEO tags
useHead({
  htmlAttrs: {
    lang: computed(() => locale.value),
  },
  link: computed(() => [
    ...(head.value.link || []),
  ]),
  meta: computed(() => [
    ...(head.value.meta || []),
  ]),
})
</script>
