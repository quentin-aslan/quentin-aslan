<template>
  <section
    v-show="projects.length > 0"
    id="projects"
    ref="projectsListSection"
    class="bg-white flex flex-col gap-8 py-10 mx-auto text-gray-700 scroll-mt-16"
  >
    <header class="text-center">
      <h2 class="text-3xl font-extrabold text-primary">
        Some of my projects 🤠
      </h2>
    </header>

    <div class="flex flex-col gap-8 justify-center items-center">
      <AnimatedBox
        v-for="(project, index) of projects"
        :key="project.slug"
        :rotation-val="(index % 2 === 0) ? 45 : -45"
        :translate-x-data="{
          translateXMinVal: (index % 2 === 0) ? -100 : 100,
          translateXInitVal: (index % 2 === 0) ? 100 : -100,
          translateXMaxVal: 0,
        }"
      >
        <ProjectCard
          :project="project"
        />
      </AnimatedBox>
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
