<template>
  <section
    ref="techStackSectionEl"
    class="flex flex-col items-center gap-5"
  >
    <div
      v-show="isSectionVisible && techStacks.length > 0"
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
          v-for="(stack, index) of techStacksDisplayed"
          :key="stack.label"
          :class="{ 'animate-fade-in-left': isSectionVisible && index % 2 === 0, 'animate-fade-in-right': isSectionVisible && index % 2 !== 0 }"
        >
          <div
            class="flex flex-col gap-2 items-center p-4 rounded hover:shadow-custom-shadow-primary duration-150 hover:-translate-y-1.5"
          >
            <NuxtImg
              :src="stack.imgSrc"
              :alt="stack.label"
              class="w-16"
            />
            <span>{{ stack.label }}</span>
          </div>
        </div>
      </div>
      <button
        v-if="smAndSmaller && techStacksDisplayed.length !== techStacks.length"
        class="text-primary font-semibold duration-150 border-b-2 border-secondary hover:text-primary hover:border-primary hover:-translate-y-1.5"
        @click="() => techStacksDisplayed = techStacks"
      >
        Show more
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { GetStacksUseCase } from '~/domains/stacks/get-stacks.use-case'
import { StacksRepositoryMock } from '~/domains/stacks/adapters/stacks.repository.mock'
import { StacksPresenterImpl } from '~/domains/stacks/adapters/stacks.presenter.impl'
import type { Stack } from '~/domains/stacks/entities/Stack'

const techStacks = ref<Stack[]>([])

const getStacksUseCase = new GetStacksUseCase(new StacksRepositoryMock([
  {
    label: 'JavaScript',
    imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    category: 'frontend',
  },
  {
    label: 'TypeScript',
    imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
    category: 'frontend',
  },
  {
    label: 'VueJS',
    imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg',
    category: 'frontend',
  },
  {
    label: 'NuxtJS',
    imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-original.svg',
    category: 'frontend',
  },
  {
    label: 'Java',
    imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
    category: 'backend',
  },
  {
    label: 'Spring',
    imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg',
    category: 'backend',
  },
  {
    label: 'Node JS',
    imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg',
    category: 'backend',
  },
  {
    label: 'Go',
    imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg',
    category: 'backend',
  },
  {
    label: 'HTML5',
    imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
    category: 'frontend',
  },
  {
    label: 'CSS3',
    imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
    category: 'frontend',
  },
  {
    label: 'React',
    imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    category: 'frontend',
  },
  {
    label: 'NextJS',
    imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-plain.svg',
    category: 'frontend',
  },
  {
    label: 'Tailwind CSS',
    imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    category: 'frontend',
  },
  {
    label: 'Sass',
    imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg',
    category: 'frontend',
  },
  {
    label: 'MongoDB',
    imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg',
    category: 'database',
  },
  {
    label: 'PostgreSQL',
    imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
    category: 'database',
  },
  {
    label: 'Supabase',
    imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg',
    category: 'database',
  },
  {
    label: 'Amazon Web Services',
    imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
    category: 'devops',
  },
  {
    label: 'Grafana',
    imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-original.svg',
    category: 'devops',
  },
  {
    label: 'Docker',
    imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
    category: 'devops',
  },
  {
    label: 'Vitest',
    imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitest/vitest-original.svg',
    category: 'frontend',
  },
  {
    label: 'Jest',
    imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg',
    category: 'frontend',
  },
  {
    label: 'Cypress',
    imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg',
    category: 'frontend',
  },
]))
const stacksPresenter = new StacksPresenterImpl(vm => techStacks.value = vm)
await getStacksUseCase.execute(stacksPresenter)

const techStacksDisplayed = ref<Stack[]>(techStacks.value)
const breakpoints = useBreakpoints(breakpointsTailwind)

const smAndSmaller = breakpoints.smallerOrEqual('sm') // between sm and lg

watch(smAndSmaller, (value) => {
  if (value) {
    techStacksDisplayed.value = techStacks.value.slice(0, 5)
    return
  }
  techStacksDisplayed.value = techStacks.value
})

const isSectionVisible = ref(false)
const techStackSectionEl = ref(null)

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
