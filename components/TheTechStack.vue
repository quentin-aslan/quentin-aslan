<template>
  <section
    id="techstacks"
    ref="techStackSectionEl"
    class="scroll-mt-16"
  >
    <div
      v-show="technologies.length > 0"
      class="flex flex-col items-center gap-5 text-gray-700 py-10"
    >
      <header>
        <h2
          class="text-3xl font-extrabold text-primary text-center border-b-2 border-primary pb-2"
        >
          My Tech Stack 🛠
        </h2>
      </header>
      <div
        class="flex flex-wrap px-20 lg:p-0 md:flex-row gap-5 md:gap-10 mt-4 items-center justify-center"
      >
        <AnimatedBox
          v-for="(techno, index) of technologies"
          :key="techno.label"
          :rotation-val="45"
          :translate-x-data="{
            translateXMinVal: (index % 2 === 0) ? -400 : 400,
            translateXInitVal: (index % 2 === 0) ? 400 : -400,
            translateXMaxVal: 0,
          }"
          :offset="['start end', 'start 0.6']"
        >
          <motion.div
            :animate="{ x: ['-5%', '5%'] }"
            :transition="{ repeat: Infinity, duration: 2.5, repeatType: 'mirror' }"
          >
            <div
              class="flex flex-col gap-2 items-center p-4 rounded hover:shadow-custom-shadow-primary duration-150 hover:-translate-y-1.5"
            >
              <NuxtImg
                :src="techno.imgSrc"
                :alt="techno.label"
                class="w-10"
              />
              <span class="text-lg">{{ techno.label }}</span>
            </div>
          </motion.div>
        </AnimatedBox>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { motion } from 'motion-v'
import type { Technology } from '~/domains/technologies/entities/Technology'
import { GetTechnologiesUseCase } from '~/domains/technologies/get-technologies.use-case'
import { TechnologiesPresenterImpl } from '~/domains/technologies/adapters/technologies.presenter.impl'
import { TechnologiesRepositoryStrapi } from '~/domains/technologies/adapters/technologies.repository.strapi'

const config = useRuntimeConfig()

const technologies = ref<Technology[]>([])

// Utilisation de `useAsyncData` pour récupérer les données de manière asynchrone et activé le SSR
await useAsyncData('technologies', async () => {
  const technologiesRepositoryStrapi = new TechnologiesRepositoryStrapi(config.public.STRAPI_BASE_URL, config.public.STRAPI_READ_ONLY)
  const technologiesPresenter = new TechnologiesPresenterImpl(vm => technologies.value = vm)
  const getTechnologiesUseCase = new GetTechnologiesUseCase(technologiesRepositoryStrapi)
  await getTechnologiesUseCase.execute(technologiesPresenter)
  return
})
</script>
