<template>
  <section
    id="projects"
    ref="projectsListSection"
    class="flex flex-col gap-8 my-8 mx-auto text-gray-700 scroll-mt-16"
  >
    <header class="text-center">
      <h2 class="text-3xl font-extrabold text-primary">
        {{ $t('projectsList.title') }}
      </h2>
    </header>

    <div class="flex flex-col gap-4 justify-center items-center">
      <ProjectCard
        :class="getCardAlignment(1)"
        :tech-stack="easyRouterTechStack"
        :images="easyRouterImages"
        :title="$t('projectsList.easyRouter.title')"
        :role="$t('projectsList.easyRouter.role')"
        :date="$t('projectsList.easyRouter.date')"
        :location="$t('projectsList.easyRouter.location')"
      >
        <template #main-description>
          {{ $t('projectsList.easyRouter.mainDescription') }}
        </template>

        <template #sub-description>
          {{ $t('projectsList.easyRouter.subDescription') }}
        </template>

        <template #tablet-project-images="{ isSubDescriptionVisible }">
          <div
            v-if="easyRouterImages?.length > 0"
            class="h-full flex flex-col gap-4"
          >
            <Image
              :src="easyRouterImages[0].src"
              :alt="easyRouterImages[0].alt"
              class="w-full h-full"
              image-class="object-contain"
              preview
            />
            <div class="lg:grid lg:grid-cols-2">
              <Image
                :src="easyRouterImages[1].src"
                :alt="easyRouterImages[1].alt"
                class="w-full h-full object-contain"
                image-class="object-contain"
                preview
              />
              <Image
                :src="easyRouterImages[2].src"
                :alt="easyRouterImages[2].alt"
                class="w-full h-full object-contain"
                image-class="object-contain"
                preview
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
        :images="archerAffiliateImages"
        :title="$t('projectsList.archerAffiliate.title')"
        :role="$t('projectsList.archerAffiliate.role')"
        :date="$t('projectsList.archerAffiliate.date')"
        :location="$t('projectsList.archerAffiliate.location')"
      >
        <template #main-description>
          {{ $t('projectsList.archerAffiliate.mainDescription') }}
        </template>

        <template #sub-description>
          {{ $t('projectsList.archerAffiliate.subDescription') }}
        </template>

        <template #tablet-project-images>
          <div class="lg:grid lg:grid-cols-2">
            <Image
              :src="archerAffiliateImages[1].src"
              :alt="archerAffiliateImages[1].alt"
              class="w-full h-full object-contain"
              image-class="object-contain"
              preview
            />
            <Image
              :src="archerAffiliateImages[0].src"
              :alt="archerAffiliateImages[0].alt"
              class="w-full h-full object-contain"
              image-class="object-contain"
              preview
            />
          </div>
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

const archerAffiliateImages: ProjectImage[] = [
  {
    src: '/projects/archer-affiliate/popup_create_link.png',
    alt: 'Archer Affiliate Project Popup Create Link Image',
  },
  {
    src: '/projects/archer-affiliate/popup_generate_link.png',
    alt: 'Archer Affiliate Project Popup Generate Link Image',
  },
  {
    src: '/projects/archer-affiliate/popup_login.png',
    alt: 'Archer Affiliate Popup Login Image',
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
  TechStackList.Upwork,
]

const getCardAlignment = (index: number) => {
  // return index % 2 === 0 ? 'self-start' : 'self-end'
}
</script>
