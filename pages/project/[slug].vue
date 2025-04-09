<template>
  <main class="pt-20 pb-20 px-4 md:px-12 max-w-6xl mx-auto text-black">
    <article
      v-if="!project"
      class="text-center"
    >
      <h1 class="text-4xl md:text-5xl font-bold">
        No project found
      </h1>
      <p class="text-gray-500 mt-4">
        Please check the URL or go back to the project list.
      </p>
    </article>

    <!-- Project -->
    <article
      v-else
      class="flex flex-col gap-10 bg-white p-6 md:p-10 rounded-xl shadow-custom-shadow-primary border-2 border-primary"
    >
      <!-- Cover Image -->
      <div class="overflow-hidden rounded-lg">
        <img
          :src="project.coverImage.url"
          :alt="project.coverImage.alternativeText"
          class="w-full h-64 md:h-[400px] object-cover rounded-lg transform duration-300 hover:scale-105"
        >
        <p class="text-sm text-gray-400 mt-2 italic text-center">
          {{ project.coverImage.caption }}
        </p>
      </div>

      <!-- Main Information -->
      <header class="flex flex-col gap-2">
        <h1 class="text-3xl md:text-5xl font-bold">
          {{ project.title }}
        </h1>
        <div class="text-lg text-gray-700">
          {{ project.position }} — {{ project.location }}
        </div>
        <div class="text-base text-gray-500">
          {{ project.startDate }} <span v-if="project.endDate">– {{ project.endDate }}</span>
        </div>
      </header>

      <!-- Description -->
      <section class="prose prose-lg max-w-none text-justify">
        <span v-html="project.description" />
      </section>

      <!-- Tech Stack -->
      <section>
        <h2 class="text-2xl font-semibold text-primary mb-4">
          Tech Stack
        </h2>
        <div class="flex flex-wrap gap-4">
          <div
            v-for="tech in project.technologies"
            :key="tech.label"
            class="flex items-center gap-2 border border-primary rounded-full px-3 py-1 text-sm bg-gray-50 hover:bg-primary hover:text-white transition"
          >
            <img
              :src="tech.imgSrc"
              alt=""
              class="w-5 h-5"
            >
            <span>{{ tech.label }}</span>
          </div>
        </div>
      </section>

      <!-- Main Content -->
      <section
        v-if="project.content"
        class="prose prose-base mt-8"
      >
        <div v-html="project.content" />
      </section>
    </article>
  </main>
</template>

<script lang="ts" setup>
import { GetProjectUseCase } from '~/domains/projects/get-project.use-case'
import { ProjectsRepositoryStrapi } from '~/domains/projects/adapters/projects.repository.strapi'
import type { ProjectViewModel } from '~/domains/projects/entities/Project'
import { ProjectPresenterImpl } from '~/domains/projects/adapters/project.presenter.impl'

const route = useRoute()
const config = useRuntimeConfig()

const project = ref<ProjectViewModel | undefined>(undefined)

await useAsyncData('project', async () => {
  const projectsRepositoryStrapi = new ProjectsRepositoryStrapi(config.public.STRAPI_BASE_URL, config.public.STRAPI_READ_ONLY)
  const getProjectUseCase = new GetProjectUseCase(projectsRepositoryStrapi)
  await getProjectUseCase.execute(new ProjectPresenterImpl(vm => project.value = vm), route.params.slug)
})
</script>
