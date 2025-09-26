<template>
  <header :class="['fixed top-0 left-0 right-0 transition-all duration-300 z-20', { 'bg-primary shadow-md border-blue-950 border-b': isScrolled }]">
    <div class="container mx-auto flex justify-between items-center p-4">
      <!-- Mobile menu button -->
      <button
        class="md:hidden text-primary"
        :class="{ 'text-white': isScrolled }"
        :aria-label="isMobileMenuOpen ? 'Close menu' : 'Open menu'"
        @click="toggleMobileMenu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            v-if="!isMobileMenuOpen"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
          <path
            v-else
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <!-- Desktop navigation -->
      <nav class="hidden md:block">
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

      <!-- Language switcher for desktop -->
      <button
        class="hidden md:block text-lg text-primary transition-colors duration-300 hover:text-secondary"
        :class="{ 'text-white': isScrolled }"
        :aria-label="`Switch to ${locale === 'en' ? 'French' : 'English'}`"
        @click="toggleLanguage"
      >
        {{ locale === 'en' ? 'FR' : 'EN' }}
      </button>

      <!-- Mobile menu dropdown -->
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200"
      >
        <nav class="container mx-auto p-4">
          <ul class="space-y-3">
            <li
              v-for="(link, index) in navLinks"
              :key="index"
            >
              <NuxtLink
                :to="link.href"
                class="block text-lg text-primary transition-colors duration-300 hover:text-secondary"
                @click="closeMobileMenu"
              >{{ link.text }}</NuxtLink>
            </li>
          </ul>
          <div class="mt-4 pt-4 border-t border-gray-200">
            <button
              class="w-full text-left text-lg text-primary transition-colors duration-300 hover:text-secondary"
              :aria-label="`Switch to ${locale === 'en' ? 'French' : 'English'}`"
              @click="toggleLanguage"
            >
              {{ locale === 'en' ? 'Switch to Français' : 'Switch to English' }}
            </button>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watchEffect } from 'vue'

const { t, locale } = useI18n()
const localePath = useLocalePath()

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// Close mobile menu when route changes
const route = useRoute()
watchEffect(() => {
  route.fullPath
  closeMobileMenu()
})

// Save language preference to localStorage
const toggleLanguage = () => {
  const newLocale = locale.value === 'en' ? 'fr' : 'en'
  locale.value = newLocale

  // Save preference
  if (process.client) {
    localStorage.setItem('preferred-language', newLocale)
  }
}

// Load saved language preference on mount
onMounted(() => {
  window.addEventListener('scroll', handleScroll)

  // Load saved language preference
  if (process.client) {
    const savedLocale = localStorage.getItem('preferred-language')
    if (savedLocale && (savedLocale === 'en' || savedLocale === 'fr')) {
      locale.value = savedLocale
    }
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

type NavLink = { text: string, href: string }

// Define the navigation links as an object
const navLinks = computed<NavLink[]>(() => {
  const links: NavLink[] = []

  if (route.fullPath === '/about-me' || route.fullPath.includes('/blog')) {
    links.push({ text: t('nav.home'), href: localePath('/') })
  }
  else {
    links.push({ text: t('nav.about'), href: localePath('/about-me') })
  }

  links.push({ text: t('nav.techStack'), href: localePath('/#techstacks') })
  links.push({ text: t('nav.blog'), href: localePath('/blog') })
  return links
})
</script>
