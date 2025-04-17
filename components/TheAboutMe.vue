<template>
  <section
    id="about-me"
    ref="aboutMeSection"
    class="text-gray-700 w-full h-full"
  >
    <div class="flex flex-col lg:flex-row gap-4 items-center">
      <div
        class="flex flex-col gap-4 items-center lg:text-center lg:border-r-2 lg:w-2/4"
        :class="{ 'animate-fade-in-left': isSectionVisible }"
      >
        <h2 class="text-3xl text-primary font-extrabold uppercase">
          {{ aboutMe?.title }}
        </h2>
        <h3 class="text-2xl lg:text-3xl font-extrabold lg:w-3/4">
          {{ aboutMe?.subtitle }}
        </h3>
      </div>

      <div
        class="flex flex-col gap-5 text-lg text-gray-600 w-full lg:text-left lg:pl-10"
        :class="{ 'animate-fade-in-right': isSectionVisible }"
        v-html="aboutMe?.content"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { AboutMe } from '~/domains/about-me/entities/AboutMe'
import { AboutMeRepositoryStrapi } from '~/domains/about-me/adapters/about-me.repository.strapi'
import { AboutMePresenterImpl } from '~/domains/about-me/adapters/about-me.presenter.impl'
import { GetAboutMeUseCase } from '~/domains/about-me/get-about-me.use-case'

const isSectionVisible = ref(false)
const aboutMeSection = ref(null)

const config = useRuntimeConfig()

const aboutMe = ref<AboutMe | null>(null)

// Utilisation de `useAsyncData` pour récupérer les données de manière asynchrone et activé le SSR
await useAsyncData('about-me', async () => {
  const aboutMeRepositoryStrapi = new AboutMeRepositoryStrapi(config.public.STRAPI_BASE_URL, config.public.STRAPI_READ_ONLY)
  const aboutMePresenter = new AboutMePresenterImpl(vm => aboutMe.value = vm)
  const getAboutMeUseCase = new GetAboutMeUseCase(aboutMeRepositoryStrapi)
  await getAboutMeUseCase.execute(aboutMePresenter)
  return
})

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        isSectionVisible.value = entry.isIntersecting
      }
    })
  })

  if (aboutMeSection.value) {
    observer.observe(aboutMeSection.value)
  }

  onUnmounted(() => {
    if (aboutMeSection.value) {
      observer.unobserve(aboutMeSection.value)
    }
  })
})
</script>
