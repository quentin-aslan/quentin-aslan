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
      :offset="['end start', 'start start']"
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

        <div class="flex flex-row items-center justify-center lg:justify-normal gap-5">
          <NuxtLink
            to="https://www.linkedin.com/in/quentin-aslan/?locale=en_US"
            target="_blank"
            class="duration-300 hover:-translate-y-1.5 flex flex-col gap-2 items-center"
          >
            <span class="w-10">
              <svg
                fill="#00549A"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
              >
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
              </svg>
            </span>

            <span>LinkedIn</span>
          </NuxtLink>
          <NuxtLink
            to="https://github.com/quentin-aslan"
            target="_blank"
            class="duration-300 hover:-translate-y-1.5 flex flex-col gap-2 items-center"
          >
            <span class="w-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
              ><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
            </span>

            <span>GitHub</span>
          </NuxtLink>
        </div>
      </div>
    </AnimatedBox>
  </section>
</template>

<script setup lang="ts">
import type { AboutMe } from '~/domains/about-me/entities/AboutMe'
import { AboutMeRepositoryStrapi } from '~/domains/about-me/adapters/about-me.repository.strapi'
import { AboutMePresenterImpl } from '~/domains/about-me/adapters/about-me.presenter.impl'
import { GetAboutMeUseCase } from '~/domains/about-me/get-about-me.use-case'

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
