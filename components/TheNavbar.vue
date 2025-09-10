<template>
  <header :class="['fixed top-0 left-0 right-0 transition-all duration-300 z-20', { 'bg-primary shadow-md border-blue-950 border-b': isScrolled }]">
    <div class="container mx-auto flex justify-between items-center p-4">
      <nav>
        <ul class="flex space-x-4">
          <li
            v-for="(link, index) in navLinks"
            :key="index"
          >
            <NuxtLink
              :to="link.href"
              :class="['text-lg text-primary transition-colors duration-300 hover:text-secondary',
                       { 'text-white': isScrolled }]"
            >{{ link.text }}</NuxtLink>
          </li>
        </ul>
      </nav>
      <button
        class="text-lg text-primary transition-colors duration-300 hover:text-secondary"
        @click="toggleLanguage"
      >
        {{ currentLocale.toUpperCase() === 'EN' ? 'FR' : 'EN' }}
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const { t, locale } = useI18n()

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const route = useRoute()

type NavLink = { text: string, href: string }

// Define the navigation links as an object
const navLinks = computed<NavLink[]>(() => {
  const links: NavLink[] = []
  if ('/about-me' === route.fullPath || route.fullPath.includes('/blog')) {
    links.push({ text: t('nav.home'), href: '/' })
  }
  else {
    links.push({ text: t('nav.about'), href: '/about-me' })
  }

  // links.push({ text: t('nav.projects'), href: '/#projects' })
  links.push({ text: t('nav.techStack'), href: '/#techstacks' })
  links.push({ text: t('nav.blog'), href: '/blog' })
  return links
})

const toggleLanguage = () => {
  locale.value = locale.value === 'en' ? 'fr' : 'en'
}

const currentLocale = computed(() => locale.value)
</script>
