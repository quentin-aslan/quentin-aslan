<template>
  <article
    class="group flex flex-col lg:flex-row gap-5 p-10 w-[90%]
    rounded-lg bg-white border-2 border-primary shadow-primary shadow-custom-shadow-primary duration-150 hover:-translate-y-1.5"
  >
    <!-- Cover image -->
    <div class="w-full lg:w-1/3 overflow-hidden rounded-md">
      <img
        :src="project.coverImage.url"
        :alt="project.coverImage.alternativeText"
        class="object-cover w-full h-64 lg:h-full rounded-md transform duration-300 group-hover:scale-105"
      >
      <p class="text-sm text-gray-400 mt-1 text-center italic">
        {{ project.coverImage.caption }}
      </p>
    </div>

    <!-- Project content -->
    <div class="flex flex-col gap-4 w-full">
      <header class="flex flex-col gap-1">
        <h3 class="text-2xl font-bold">
          <NuxtLink :to="project.projectLink">
            {{ project.title }}
          </NuxtLink>
        </h3>
        <div class="flex flex-col">
          <span class="text-lg text-gray-900">{{ project.position }}</span>
          <span class="text-base text-gray-500">{{ project.startDate }} | {{ project.location }}</span>
        </div>
      </header>

      <div class="flex flex-col gap-2">
        <blockquote class="lg:p-4 lg:bg-gray-50">
          <span v-html="project.description" />
        </blockquote>

        <section>
          <h4 class="text-xl text-primary">
            Tech Stack:
          </h4>

          <div
            class="flex flex-wrap gap-1 mt-2 p-2"
          >
            <TechBadge
              v-for="tech in project.technologies"
              :key="tech.label"
              :img-src="tech.imgSrc"
              :label="tech.label"
            />
          </div>
        </section>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { ProjectViewModel } from '~/domains/projects/entities/Project'

type Props = {
  project: ProjectViewModel
}

const props = defineProps<Props>()
</script>
