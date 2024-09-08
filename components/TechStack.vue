<template>
  <section ref="techStackSectionEl" class="flex flex-col items-center gap-5">
    <div v-show="isSectionVisible && techStacks.length > 0" class="flex flex-col items-center gap-5">
      <h2 class="text-2xl border-b-2 border-primary pb-2" :class="{'animate-fade-in-right' : isSectionVisible}">Tech Stack</h2>
      <div class="flex flex-wrap px-20 lg:p-0 md:flex-row gap-5 md:gap-10 mt-4 items-center justify-center">

        <div v-for="(stack, index) of techStacksDisplayed"
             :class="{'animate-fade-in-left' : isSectionVisible && index % 2 === 0, 'animate-fade-in-right' : isSectionVisible && index % 2 !== 0}">
          <div v-if="stack.type === 'multiple'" class="flex flex-row gap-10 md:gap-5 items-center justify-center p-4 rounded hover:shadow-custom-shadow-primary duration-150 hover:-translate-y-1.5">
            <div v-for="tech of stack.techs" class="flex flex-col gap-2 items-center w-14">
              <NuxtImg :src="tech.icon" :alt="tech.label" class="w-full" :title="tech.label" />
              <span class="text-sm whitespace-nowrap">{{ tech.label }}</span>
            </div>
          </div>

          <div v-if="stack.type === 'single'" class="flex flex-col gap-2 items-center p-4 rounded hover:shadow-custom-shadow-primary duration-150 hover:-translate-y-1.5">
            <NuxtImg :src="stack.techs?.[0]?.icon" :alt="stack.techs?.[0]?.label" class="w-16" />
            <span>{{ stack.techs?.[0]?.label }}</span>
          </div>
        </div>

      </div>
      <button v-if="smAndSmaller && techStacksDisplayed.length !== techStacks.length" @click="() => techStacksDisplayed = techStacks" class="text-primary font-semibold duration-150 border-b-2 border-secondary hover:text-primary hover:border-primary hover:-translate-y-1.5">Show more</button>
    </div>
  </section>
</template>
<script setup lang="ts">
import {breakpointsTailwind, useBreakpoints} from "@vueuse/core";
import type {TechStacksType} from "~/types";
const techStacks = ref<TechStacksType[]>([])

try {
  const techStacksResponse = await useFetch('/api/tech-stacks')
  if (techStacksResponse.status.value !== 'success') {
    throw new Error('Error while fetching tech stacks')
  }

  techStacks.value = techStacksResponse.data.value
} catch (e) {
  console.error(e)
}


const techStacksDisplayed = ref<TechStacksType[]>(techStacks)
const breakpoints = useBreakpoints(breakpointsTailwind)

const smAndSmaller = breakpoints.smallerOrEqual('sm') // between sm and lg

watch(smAndSmaller, (value) => {
  if(value) {
    techStacksDisplayed.value = techStacks.slice(0, 5)
    return
  }
  techStacksDisplayed.value = techStacks
})

const isSectionVisible = ref(false);
const techStackSectionEl = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        isSectionVisible.value = entry.isIntersecting;
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
