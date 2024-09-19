<template>
  <section
    id="projects"
    ref="projectsListSection"
    class="flex flex-col gap-8 my-8 justify-center items-center text-gray-700 scroll-mt-16"
  >
    <header class="text-left">
      <h2 class=" text-3xl lg:text-3xl font-extrabold text-primary">
        Some of my projects 🤠
      </h2>
    </header>

    <div class="w-11/12 flex flex-col gap-4">
      <ProjectCard
        :class="getCardAlignment(1)"
        :tech-stack="easyRouterTechStack"
        :images="easyRouterImages"
        title="Router Easy 🛜"
        role="Full-Stack Developer"
        date="2024"
        location="I was at Boston, USA 🇺🇸"
      >
        <template #main-description>
          The Easy Router Project is a <strong>web application designed to simplify the configuration of a travel router setup on a Raspberry Pi</strong>.
        </template>

        <template #sub-description>
          <EasyRouterSubDescription />
        </template>

        <template #tablet-project-images="{ isSubDescriptionVisible }">
          <div
            v-if="easyRouterImages?.length > 0"
            class="h-full flex flex-col gap-4"
          >
            <NuxtImg
              :src="easyRouterImages[0].src"
              :alt="easyRouterImages[0].alt"
              class="w-full h-full object-contain duration-300 hover:scale-150"
            />
            <div class="lg:grid xl:grid-cols-2">
              <NuxtImg
                :src="easyRouterImages[1].src"
                :alt="easyRouterImages[1].alt"
                class="w-full h-full object-contain duration-300 hover:scale-125"
              />
              <NuxtImg
                :src="easyRouterImages[2].src"
                :alt="easyRouterImages[2].alt"
                class="w-full h-full object-contain duration-300 hover:scale-125"
              />
            </div>
          </div>
        </template>
      </ProjectCard>

      <!-- Archer Affiliate -->
      <!-- TODO: Take some screens of the extensions. Also, think about an improve of the process (And maybe use a slot for the title and att the Archer Affiliate logo) -->
      <ProjectCard
        :class="getCardAlignment(2)"
        :tech-stack="archerAffiliateTechStack"
        :images="[]"
        title="Archer Affiliate"
        role="Frontend Developer"
        date="2024"
        location="I was at Boston, USA 🇺🇸"
      >
        <template #main-description>
          A <strong>Chrome extension</strong> that adds <strong>React components</strong> to <strong>Amazon product pages</strong>, making it easy for users to create affiliate links for Archer Affiliate.
        </template>

        <template #sub-description>
          <ArcherAffiliateSubDescription />
        </template>
      </ProjectCard>
    </div>
  </section>
</template>

<script setup lang="ts">
import EasyRouterSubDescription from '~/components/projects-descriptions/EasyRouterSubDescription.vue'
import { type ProjectImage, TechStackList } from '~/types'
import ArcherAffiliateSubDescription from '~/components/projects-descriptions/ArcherAffiliateSubDescription.vue'

const easyRouterImages: ProjectImage[] = [
  {
    src: '/projects/easy-router/desktop.png',
    alt: 'Easy Router Project Image 1',
  },
  {
    src: '/projects/easy-router/mobile_1.png',
    alt: 'Easy Router Project Image 1',
  },
  {
    src: '/projects/easy-router/mobile_2.png',
    alt: 'Easy Router Project Image 1',
  },
  {
    src: '/projects/easy-router/rpi.png',
    alt: 'Easy Router Project Image 1',
  },
]

const easyRouterTechStack: TechStackList[] = [
  TechStackList.VueJS,
  TechStackList.TailwindCSS,
  TechStackList.NodeJS,
  TechStackList.TypeScript,
  TechStackList.Linux,
]

const archerAffiliateTechStack: TechStackList[] = [
  TechStackList.TailwindCSS,
  TechStackList.ReactJS,
  TechStackList.TypeScript,
]

const getCardAlignment = (index: number) => {
  return index % 2 === 0 ? 'self-start' : 'self-end'
}
</script>
