<template>
  <header :class="['fixed top-0 left-0 right-0 transition-all duration-200 z-50', isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100' : 'bg-transparent']">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">

        <div class="flex-shrink-0">
          <NuxtLink to="/" class="text-xl font-semibold text-primary">
            Quentin Aslan
          </NuxtLink>
        </div>

        <nav class="hidden md:flex space-x-8">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.href"
            :to="link.href"
            class="text-primary hover:text-primary/80 px-3 py-2 text-sm font-medium transition-colors duration-200"
          >
            {{ link.text }}
          </NuxtLink>
        </nav>

        <button
          @click="toggleMenu"
          class="md:hidden p-2 rounded-md text-primary hover:text-primary/80 hover:bg-gray-100 transition-colors duration-200"
          aria-label="Toggle menu"
          :aria-expanded="isMenuOpen.toString()"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              :class="isMenuOpen ? 'hidden' : 'block'"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              :class="isMenuOpen ? 'block' : 'hidden'"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>

    <Transition
      enter-active-class="transition-all duration-200 ease-out"
      leave-active-class="transition-all duration-200 ease-in"
      enter-from-class="opacity-0 -translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-1"
    >
      <div v-show="isMenuOpen" ref="mobileMenuRef" class="md:hidden bg-white border-t border-gray-100">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <NuxtLink
            v-for="link in navLinks"
            :key="`mobile-${link.href}`"
            :to="link.href"
            @click="closeMenu"
            class="block px-3 py-2 text-base font-medium text-primary hover:text-primary/80 hover:bg-gray-50 rounded-md transition-colors duration-200"
          >
            {{ link.text }}
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isScrolled = ref(false)
const isMenuOpen = ref(false)
const mobileMenuRef = ref<HTMLElement | null>(null)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  if (isMenuOpen.value) {
    nextTick(() => {
      trapFocus()
    })
  }
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && isMenuOpen.value) {
    isMenuOpen.value = false
  }

  // Focus trap logic
  if (isMenuOpen.value && e.key === 'Tab') {
    const focusableElements = mobileMenuRef.value?.querySelectorAll(
      'a, button, [tabindex]:not([tabindex="-1"])'
    )

    if (focusableElements && focusableElements.length > 0) {
      const firstElement = focusableElements[0] as HTMLElement
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault()
          lastElement.focus()
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault()
          firstElement.focus()
        }
      }
    }
  }
}

// Auto-close menu on route change
watch(() => route.path, () => {
  isMenuOpen.value = false
})

const trapFocus = () => {
  const focusableElements = mobileMenuRef.value?.querySelectorAll(
    'a, button, [tabindex]:not([tabindex="-1"])'
  )
  if (focusableElements && focusableElements.length > 0) {
    (focusableElements[0] as HTMLElement).focus()
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('keydown', handleKeydown)
})

type NavLink = { text: string, href: string }

const navLinks: NavLink[] = [
  { text: 'Home', href: '/' },
  { text: 'About me', href: '/about-me' },
  { text: 'My Tech Stack', href: '/#techstacks' },
  { text: 'Blog', href: '/blog' },
]
</script>