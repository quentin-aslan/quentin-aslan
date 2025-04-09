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
        v-for="project of projects"
        :key="project.title"
        :project="project"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ProjectViewModel } from '~/domains/projects/entities/Project'
import { ProjectsRepositoryStrapi } from '~/domains/projects/adapters/projects.repository.strapi'
import { ProjectsMainPagePresenterImpl } from '~/domains/projects/adapters/projects-main-page.presenter.impl'
import { GetProjectsUseCase } from '~/domains/projects/get-projects.use-case'

const projects = ref<ProjectViewModel[]>([])

const config = useRuntimeConfig()

await useAsyncData('projects', async () => {
  const projectsRepositoryStrapi = new ProjectsRepositoryStrapi(config.public.STRAPI_BASE_URL, config.public.STRAPI_READ_ONLY)
  const projectsPresenter = new ProjectsMainPagePresenterImpl(vm => projects.value = vm)
  const getProjectsUseCase = new GetProjectsUseCase(projectsRepositoryStrapi)
  await getProjectsUseCase.execute(projectsPresenter)
})
</script>
