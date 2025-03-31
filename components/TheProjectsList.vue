<template>
  <section
    id="projects"
    ref="projectsListSection"
    class="flex flex-col gap-8 my-8 mx-auto text-gray-700 scroll-mt-16"
  >
    <header class="text-center">
      <h2 class="text-3xl font-extrabold text-primary">
        Some of my projects 🤠
      </h2>
    </header>

    <div class="flex flex-col gap-4 justify-center items-center">
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

      <!-- GLS Experience -->
      <ProjectCard
        :class="getCardAlignment(3)"
        :tech-stack="glsTechStack"
        :images="glsImages"
        title="GLS Experience"
        role="Full-Stack Developer"
        date="Novembre 2024 - Mars 2025"
        location="Toulouse, France 🇫🇷"
      >
        <template #main-description>
          Développement et maintenance d'une application web permettant aux clients de GLS de suivre et de modifier leurs livraisons.
        </template>

        <template #sub-description>
          <p>Encadrement d'un stagiaire sur le développement frontend, en particulier sur Vue.js et les bonnes pratiques de développement.</p>
          <p>Gestion des déploiements et de l'intégration continue (CI/CD) avec GitLab et Terraform, applications déployées sur AWS.</p>
          <p>Création d'un microservice en GO, de la conception à la mise en production. Ajout de fonctionnalités à un backend existant avec Java Spring Boot.</p>
          <p>Mise en place de dashboards Grafana pour le suivi et le monitoring des applications en production.</p>
        </template>

        <template #tablet-project-images>
          <div class="lg:grid lg:grid-cols-2">
            <Image
              :src="glsImages[0].src"
              :alt="glsImages[0].alt"
              class="w-full h-full object-contain"
              image-class="object-contain"
              preview
            />
            <Image
              :src="glsImages[1].src"
              :alt="glsImages[1].alt"
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

const glsImages: ProjectImage[] = [
  {
    src: '/projects/gls/gls_dashboard.png',
    alt: 'GLS Dashboard Image',
  },
  {
    src: '/projects/gls/gls_microservice.png',
    alt: 'GLS Microservice Image',
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

const glsTechStack: TechStackList[] = [
  TechStackList.VueJS,
  TechStackList.TailwindCSS,
  TechStackList.NodeJS,
  TechStackList.TypeScript,
  TechStackList.Linux,
  TechStackList.Java,
  TechStackList.GO,
  TechStackList.GitLab,
  TechStackList.Terraform,
  TechStackList.AWS,
  TechStackList.Grafana,
]

const getCardAlignment = (index: number) => {
  // return index % 2 === 0 ? 'self-start' : 'self-end'
}
</script>
