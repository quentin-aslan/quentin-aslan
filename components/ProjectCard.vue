<template>
  <article
    class="group flex flex-col lg:flex-row gap-5 w-full p-10 lg:w-[90%]
   rounded-lg bg-white border-2 border-primary shadow-primary hover:shadow-custom-shadow-primary duration-150 hover:-translate-y-1.5"
  >
    <div class="flex flex-col gap-4 w-full" :class="{'lg:w-3/5': images?.length > 0}">
      <header class="flex flex-col gap-1">
        <h3 class="text-2xl font-bold">{{ title }}</h3>
        <div class="flex flex-col">
          <span class="text-lg text-gray-900">{{ role }}</span>
          <span class="text-base text-gray-500">{{ date }} | {{ location }}</span>
        </div>
      </header>

      <div class="flex flex-col gap-2">
        <blockquote class="lg:p-4 lg:bg-gray-50">
          <slot name="main-description"></slot>
        </blockquote>

        <div class="hidden lg:flex flex-col gap-2">
          <slot name="sub-description"></slot>
        </div>

        <div class="flex flex-col">
          <h4 class="text-xl text-primary font-semibold group-hover:font-bold border-b-2 border-primary border-opacity-50 pb-2">Tech Stack:</h4>
          <div class="flex flex-row justify-between mt-2">
            <Tech v-for="tech in techStack" :icon="tech" :label="tech" isLabelDisplayed class="w-5 lg:w-20" />
          </div>
        </div>
      </div>
    </div>

    <div v-if="images?.length > 0" class="w-full lg:w-2/5">
      <div v-if="isLgAndSmaller">
        <NuxtImg :src="images[0].src" :alt="images[0].alt" class="w-full h-full object-contain duration-300 hover:scale-150" />
        <div v-show="isSubDescriptionVisible">
          <NuxtImg v-for="image in images" :src="image.src" :alt="image.alt" class="w-full h-full object-contain duration-300 hover:scale-125" />
        </div>
      </div>
      <slot v-else :is-sub-description-visible="isSubDescriptionVisible" name="tablet-project-images"></slot>
<!--      <button v-if="images?.length > 1" @click="isSubDescriptionVisible = !isSubDescriptionVisible" class="text-secondary font-semibold duration-150 group-hover:border-b-2 group-hover:border-secondary hover:text-primary hover:border-primary hover:-translate-y-1.5">-->
<!--        {{ isSubDescriptionVisible ? 'Show less' : 'Show more' }}-->
<!--      </button>-->
    </div>
  </article>
</template>
<script setup lang="ts">
import {breakpointsTailwind, useBreakpoints} from "@vueuse/core";
import {type ProjectImage, TechStackList} from "~/types";

type Props = {
  title: string
  role: string
  date: string
  location: string
  githubLink: string
  images: ProjectImage[]
  techStack: TechStackList[]
}

const props = defineProps<Props>()

const breakpoints = useBreakpoints(breakpointsTailwind)
const isLgAndSmaller = breakpoints.smallerOrEqual('md')

const isSubDescriptionVisible = ref(false)
</script>