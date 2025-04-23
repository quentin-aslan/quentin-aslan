<template>
  <section
    id="hero"
    class="group z-10 flex flex-col lg:flex-row-reverse gap-8 md:gap-14 lg:gap-20 items-center justify-center container
    mx-auto max-w-full min-h-screen pt-14 pb-10 lg:p-0 lg:w-4/6 text-gray-700"
  >
    <!-- Image Box -->
    <AnimatedBox
      :translate-x-data="{
        translateXMinVal: 100,
        translateXInitVal: -500, // A lot to not see the image at the beginning and let the animate-fade-in-right-slow class do the job
        translateXMaxVal: 0,
      }"
      :rotation-val="45"
      :offset="['end start', 'start start']"
    >
      <div
        class="animate-fade-in-right-slow relative inline-block rounded-full w-60 lg:w-[18rem] duration-300 hover:scale-105 p-1 hover:p-2 cursor-pointer"
        :class="{
          'aspect-square bg-gradient-to-br from-[#B0D6A7] via-[#85B5B1] to-[#00549A]': !isImageLoaded,
          'bg-gradient-to-r from-blue-400 via-[#85B5B1] to-blue-400': isImageLoaded,
        }"
        @mouseover="onMouseEnterMe"
        @mouseleave="onMouseLeaveMe"
        @click="() => imgData = IMG_ME_PM"
      >
        <div class="rounded-full overflow-hidden w-full h-full">
          <NuxtImg
            v-show="isImageLoaded"
            :src="imgData.src"
            :alt="imgData.alt"
            class="border-4 border-white animate-fadeInHeroImage w-full h-full object-cover rounded-full aspect-square"
            @load="isImageLoaded = true"
          />
          <div class="h-full flex justify-center items-center text animate-pulse">
            <!-- Loading text -->
          </div>
        </div>
      </div>
    </AnimatedBox>
    <!-- Text Box -->
    <AnimatedBox
      :translate-x-data="{
        translateXMinVal: -100,
        translateXInitVal: +500, // A lot to not see the image at the beginning and let the animate-fade-in-right-slow class do the job
        translateXMaxVal: 0,
      }"
      :rotation-val="45"
      :offset="['end start', 'end 0.4']"
      :mobile-offset="['end start', 'end 0.4']"
    >
      <div class="animate-fade-in-left-slow flex flex-col text-center lg:text-left gap-5 w-4/5 mx-auto">
        <h1 class="text-5xl lg:text-7xl font-bold text-[#00549A]">
          Quentin <br> Aslan
        </h1>
        <p class="mt-2 text-xl text-gray-600 leading-8">
          A passionate <strong>Full-Stack Developer.</strong> <span
            ref="waveEl"
            class="inline-block transform origin-bottom hover:animate-wave cursor-pointer"
          >👋</span>
        </p>

        <span
          class="flex flex-col gap-2"
          v-html="aboutMe?.heroContent"
        />

        <span class="inline-block">
          <NuxtLink
            to="/about-me"
            class="group inline-flex items-center gap-2 text-lg text-primary/80 hover:text-primary hover:underline underline-offset-2 transition-colors duration-300"
          >
            Learn more about me
            <span class="transition-transform duration-300 group-hover:translate-x-1">➜</span>
          </NuxtLink>
        </span>

        <!-- Contacts Links -->
        <ContactLinks />
      </div>
    </AnimatedBox>
  </section>
</template>

<script setup lang="ts">
import type { AboutMe } from '~/domains/about-me/entities/AboutMe'
import { AboutMeRepositoryStrapi } from '~/domains/about-me/adapters/about-me.repository.strapi'
import { AboutMePresenterImpl } from '~/domains/about-me/adapters/about-me.presenter.impl'
import { GetAboutMeUseCase } from '~/domains/about-me/get-about-me.use-case'
import ContactLinks from '~/components/ContactLinks.vue'

const isImageLoaded = ref(false)

const IMG_ME_AURORA = {
  src: '/img/me_aurora.jpg',
  alt: 'Quentin Aslan with Aurora in the background',
}
const IMG_ME_DESERT = {
  src: '/img/me_desert.jpg',
  alt: 'Quentin Aslan with a desert in the background',
}

const IMG_ME_PM = {
  src: '/img/me_pm.jpg',
  alt: '"Quentin Aslan in a suit, delivering a speech at a conference.',
}

const waveEl = ref<HTMLElement | null>(null)

type Img = {
  src: string
  alt: string
}

const imgData = ref<Img>(IMG_ME_AURORA)

const onMouseEnterMe = () => {
  imgData.value = IMG_ME_DESERT
  waveEl.value?.classList.add('animate-wave')
}

const onMouseLeaveMe = () => {
  imgData.value = IMG_ME_AURORA
  waveEl.value?.classList.remove('animate-wave')
}

const config = useRuntimeConfig()

const aboutMe = ref<AboutMe | null>(null)

await useAsyncData('about-me', async () => {
  const aboutMeRepositoryStrapi = new AboutMeRepositoryStrapi(config.public.STRAPI_BASE_URL, config.public.STRAPI_READ_ONLY)
  const aboutMePresenter = new AboutMePresenterImpl(vm => aboutMe.value = vm)
  const getAboutMeUseCase = new GetAboutMeUseCase(aboutMeRepositoryStrapi)
  await getAboutMeUseCase.execute(aboutMePresenter)
  return
})
</script>
