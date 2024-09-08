<template>
  <section ref="projectsListSection" class="flex flex-col gap-8 my-8 justify-center items-center text-gray-700">
    <header class="text-left">
      <h2 class=" text-3xl lg:text-3xl font-extrabold text-primary">Some of my projects 🤠</h2>
    </header>

    <div class="w-11/12 flex flex-col gap-4">
      <ProjectCard :class="getCardAlignment(1)" :images="easyRouterImages" title="Router Easy 🛜" role="Full-Stack Developer" date="2024" location="Boston, USA 🇺🇸">
        <template #main-description>
          <EasyRouterDescription />
        </template>

        <template #sub-description>
          <EasyRouterSubDescription />
        </template>

        <template #desktop-project-images="{ isSubDescriptionVisible }">
          <div v-if="easyRouterImages?.length > 0" class=" flex flex-col gap-4">
              <img :src="easyRouterImages[0].src" :alt="easyRouterImages[0].alt" class="w-full h-full object-contain duration-300 hover:scale-150">
              <div class="lg:grid xl:grid-cols-2">
                <img :src="easyRouterImages[1].src" :alt="easyRouterImages[1].alt" class="w-full h-full object-contain duration-300 hover:scale-125">
                <img :src="easyRouterImages[2].src" :alt="easyRouterImages[2].alt" class="w-full h-full object-contain duration-300 hover:scale-125">
              </div>
          </div>
        </template>
      </ProjectCard>
    </div>
  </section>
</template>
<script setup lang="ts">

import EasyRouterSubDescription from "~/components/projects-descriptions/EasyRouterSubDescription.vue";
import EasyRouterDescription from "~/components/projects-descriptions/EasyRouterDescription.vue";
import type {ProjectImage} from "~/types";

const easyRouterImages: ProjectImage[] = [
  {
    src: '/projects/easy-router/desktop.png',
    alt: 'Easy Router Project Image 1'
  },
  {
    src: '/projects/easy-router/mobile_1.png',
    alt: 'Easy Router Project Image 1'
  },
  {
    src: '/projects/easy-router/mobile_2.png',
    alt: 'Easy Router Project Image 1'
  },
  {
    src: '/projects/easy-router/rpi.png',
    alt: 'Easy Router Project Image 1'
  },
];

const getCardAlignment = (index: number) => {
  return index % 2 === 0 ? 'self-start' : 'self-end';
};
</script>