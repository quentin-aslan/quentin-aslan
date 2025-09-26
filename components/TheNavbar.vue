<template>
  <header :class="['fixed top-0 left-0 right-0 transition-all duration-300 z-20', { 'bg-primary shadow-md border-blue-950 border-b': isScrolled }]">
    <div class="container mx-auto flex justify-between items-center p-4">
      <nav class="hidden md:block">
        <ul class="flex space-x-4">
          <li
            v-for="(link, index) in navLinks"
            :key="index"
          >
            <NuxtLink
              :to="link.href"
              :class="['text-lg text-primary transition-colors duration-300 hover:text-secondary', { 'text-white': isScrolled }]"
            >{{ link.text }}</NuxtLink>
          </li>
        </ul>
      </nav>
      <button
        class="md:hidden text-primary"
        :class="{ 'text-white': isScrolled }"
        aria-label="Toggle navigation"
        @click="toggleMenu"
      >
        <svg
          v-if="!isMenuOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
    <Transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <nav
        v-if="isMenuOpen"
        class="md:hidden bg-primary"
      >
        <ul class="flex flex-col space-y-2 p-4">
        <li
          v-for="(link, index) in navLinks"
          :key="`mobile-${index}`"
        >
          <NuxtLink
            :to="link.href"
            class="text-lg text-white transition-colors duration-300 hover:text-secondary"
            @click="isMenuOpen = false"
          >{{ link.text }}</NuxtLink>
        </li>
      </ul>
      </nav>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

type NavLink = { text: string, href: string }

const navLinks: NavLink[] = [
  { text: 'Home', href: '/' },
  { text: 'About me', href: '/about-me' },
  { text: 'My Tech Stack', href: '/#techstacks' },
  { text: 'Blog', href: '/blog' },
]
</script>
