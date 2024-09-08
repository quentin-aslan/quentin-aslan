<template>
  <article
    class="group flex flex-col lg:flex-row items-center gap-5 w-full p-10 lg:w-[90%]
   rounded-lg bg-white border-2 border-primary shadow-primary hover:shadow-custom-shadow-primary duration-150 hover:-translate-y-1.5 cursor-pointer"
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
      </div>
    </div>

    <div v-if="images?.length > 0" class="w-full lg:w-2/5">
      <div v-if="isLgAndSmaller">
        <img :src="images[0].src" :alt="images[0].alt" class="w-full h-full object-contain duration-300 hover:scale-150">
        <div v-show="isSubDescriptionVisible">
          <img v-for="image in images" :src="image.src" :alt="image.alt" class="w-full h-full object-contain duration-300 hover:scale-125">
        </div>
      </div>
      <slot v-else :is-sub-description-visible="isSubDescriptionVisible" name="desktop-project-images"></slot>
<!--      <button v-if="images?.length > 1" @click="isSubDescriptionVisible = !isSubDescriptionVisible" class="text-secondary font-semibold duration-150 group-hover:border-b-2 group-hover:border-secondary hover:text-primary hover:border-primary hover:-translate-y-1.5">-->
<!--        {{ isSubDescriptionVisible ? 'Show less' : 'Show more' }}-->
<!--      </button>-->
    </div>
  </article>
</template>
<script setup lang="ts">

import {breakpointsTailwind, useBreakpoints} from "@vueuse/core";

type Props = {
  title: string
  role: string
  date: string
  location: string
  images: ProjectImage[]
}

const props = defineProps<Props>()

const breakpoints = useBreakpoints(breakpointsTailwind)
const isLgAndSmaller = breakpoints.smallerOrEqual('lg')

const isSubDescriptionVisible = ref(false)

</script>