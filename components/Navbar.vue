<template>
  <header :class="['fixed top-0 left-0 right-0 transition-all duration-300 z-20', { 'bg-white bg-opacity-80 shadow-md': isScrolled }]">
    <div class="container mx-auto flex justify-between items-center p-4">
      <nav>
        <ul class="flex space-x-4">
          <li
            v-for="(link, index) in navLinks"
            :key="index"
          >
            <a
              :href="link.href"
              :class="['text-primary transition-colors duration-300 hover:text-secondary']"
            >{{ link.text }}</a>
          </li>
        </ul>
      </nav>
      <div class="flex space-x-4">
        <button
          v-for="locale in locales"
          :key="locale.code"
          @click="switchLocale(locale.code)"
          :class="['text-primary transition-colors duration-300 hover:text-secondary', { 'font-bold': locale.code === currentLocale }]"
        >
          {{ locale.code.toUpperCase() }}
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

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

// Define the navigation links as an object
const navLinks = [
  { text: 'Projets', href: '#projects' },
  { text: 'Experiences', href: '#experiences' },
  { text: 'Contact', href: '#contact' },
  // { text: 'Articles', href: '/articles' },
]

const { locale, locales } = useI18n()

const currentLocale = locale.value

const switchLocale = (code: string) => {
  locale.value = code
}
</script>

<style scoped>
/* Vous pouvez supprimer les styles CSS ici, car tout est géré par les classes Tailwind */
</style>
