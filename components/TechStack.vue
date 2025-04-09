<template>
  <section
    ref="techStackSectionEl"
    class="flex flex-col items-center gap-5"
  >
    <div
      v-show="isSectionVisible && technologies.length > 0"
      class="flex flex-col items-center gap-5"
    >
      <h2
        class="text-2xl border-b-2 border-primary pb-2"
        :class="{ 'animate-fade-in-right': isSectionVisible }"
      >
        Tech Stack
      </h2>
      <div class="flex flex-wrap px-20 lg:p-0 md:flex-row gap-5 md:gap-10 mt-4 items-center justify-center">
        <div
          v-for="(techno, index) of techStacksDisplayed"
          :key="techno.label"
          :class="{ 'animate-fade-in-left': isSectionVisible && index % 2 === 0, 'animate-fade-in-right': isSectionVisible && index % 2 !== 0 }"
        >
          <div
            class="flex flex-col gap-2 items-center p-4 rounded hover:shadow-custom-shadow-primary duration-150 hover:-translate-y-1.5"
          >
            <NuxtImg
              :src="techno.imgSrc"
              :alt="techno.label"
              class="w-8"
            />
            <span>{{ techno.label }}</span>
          </div>
        </div>
      </div>
      <button
        v-if="smAndSmaller && techStacksDisplayed.length !== technologies.length"
        class="text-primary font-semibold duration-150 border-b-2 border-secondary hover:text-primary hover:border-primary hover:-translate-y-1.5"
        @click="() => techStacksDisplayed = technologies"
      >
        Show more
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
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
})

const techStacksDisplayed = ref<Technology[]>([])
const breakpoints = useBreakpoints(breakpointsTailwind)

const smAndSmaller = breakpoints.smallerOrEqual('sm') // between sm and lg
const isSectionVisible = ref(false)
const techStackSectionEl = ref(null)

watch(
  technologies,
  (newVal) => {
    techStacksDisplayed.value = smAndSmaller.value ? newVal.slice(0, 5) : newVal
  },
  { immediate: true },
)

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        isSectionVisible.value = entry.isIntersecting
      }
    })
  })

  if (techStackSectionEl.value) {
    observer.observe(techStackSectionEl.value)
  }

  onUnmounted(() => {
    if (techStackSectionEl.value) {
      observer.unobserve(techStackSectionEl.value)
    }
  })
})
</script>
