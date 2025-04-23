<template>
  <section
    id="contact"
    ref="contactSectionEl"
    class="bg-white flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-4 p-10 lg:pl-20 text-lg scroll-mt-16"
  >
    <div
      class="relative lg:border-r-2 lg:w-2/4 flex flex-row items-center justify-center duration-150 hover:-translate-y-1.5"
      :class="{ 'animate-fade-in-left': isSectionVisible }"
    >
      <NuxtImg
        src="/img/me.png"
        class="w-52 rounded-full shadow-lg transform duration-300"
        alt="Quentin Aslan"
      />
    </div>

    <div
      class="flex flex-col items-center justify-center gap-5 lg:gap-10 w-full"
      :class="{ 'animate-fade-in-right': isSectionVisible }"
    >
      <div class="flex flex-col gap-2 items-center text-center lg:w-2/4">
        <h2 class="text-3xl text-primary font-extrabold uppercase">
          Contact
        </h2>
      </div>

      <div class="flex flex-col gap-10 items-center duration-150 text-gray-700 ">
        <a
          href="mailto:quentin.aslan@outlook.com"
          class="text-2xl lg:text-3xl font-bold duration-150 hover:underline hover:text-primary  hover:-translate-y-1.5"
        >quentin.aslan@outlook.com</a>
        <a
          href="tel:+33652689583"
          class="text-2xl lg:text-3xl font-bold duration-150 hover:underline hover:text-primary  hover:-translate-y-1.5"
        >+33 6 52 68 95 83</a>

        <ContactLinks />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ContactLinks from '~/components/ContactLinks.vue'

const isSectionVisible = ref(false)
const contactSectionEl = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        isSectionVisible.value = entry.isIntersecting
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
