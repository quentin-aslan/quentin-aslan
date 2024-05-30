<template>
  <section ref="contactSectionEl" class="bg-white flex flex-col-reverse lg:flex-row items-center justify-center gap-10 p-10 lg:pl-20 text-lg">
    <div class="relative mb-8 lg:border-r-2 lg:w-2/4" :class="{'animate-fade-in-left': isSectionVisible}">
      <NuxtImg src="/img/me.png" class="w-80 rounded-full shadow-lg transform duration-300" alt="Quentin Aslan" />
    </div>

    <div class="flex flex-col items-center justify-center gap-20 lg:w-3/4" :class="{'animate-fade-in-right': isSectionVisible}">
      <div class="flex flex-col gap-2 items-center text-center lg:w-2/4">
        <h2 class="text-xl text-primary font-extrabold uppercase">Contact</h2>
        <h3 class="text-3xl font-extrabold">Hit me up! 👇</h3>
      </div>

      <div class="flex flex-col lg:flex-row justify-between gap-20">

        <div class="flex flex-col gap-2 items-center justify-center text-center group duration-150 hover:-translate-y-1.5">
          <div class="bg-white p-2 rounded-full shadow-lg inline-block mb-4">
            <MapIcon class="w-8 text-primary" />
          </div>
          <h2 class="text-xl font-bold text-gray-900 group-hover:text-primary">Location</h2>
          <a href="https://maps.app.goo.gl/GRFjFpBXtPHZDX798" target="_blank" class="text-gray-600 group-hover:text-primary">Montréal, Canada</a>
        </div>

        <div class="flex flex-col gap-2 items-center justify-center text-center group duration-150 hover:-translate-y-1.5">
          <div class="bg-white p-2 rounded-full shadow-lg inline-block mb-4">
            <EnvelopeIcon class="w-8 text-primary" />
          </div>
          <h2 class="text-xl font-bold text-gray-900 group-hover:text-primary">Mail</h2>
          <a href="mailto:quentin.aslan@outlook.com" class="text-gray-600 group-hover:text-primary">quentin.aslan@outlook.com</a>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { MapIcon, EnvelopeIcon } from '@heroicons/vue/24/solid'

const isSectionVisible = ref(false);
const contactSectionEl = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        isSectionVisible.value = entry.isIntersecting;
      }
    })
  })

  if (contactSectionEl.value) {
    observer.observe(contactSectionEl.value)
  }

  onUnmounted(() => {
    if (contactSectionEl.value) {
      observer.unobserve(contactSectionEl.value)
    }
  })
})

</script>
