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
      <div
        v-for="project of projects"
        :key="project.title"
        class="border border-blue-900"
      >
        <h3>{{ project.title }}</h3>
      </div>
    </div>

    {{ projects }}
  </section>
</template>

<script setup lang="ts">
import { GetProjectsUseCase } from '~/domains/projects/get-projects.use-case'
import { ProjectsRepositoryMock } from '~/domains/projects/adapters/projects.repository.mock'
import type { Project, ProjectViewModel } from '~/domains/projects/entities/Project'
import { ProjectsMainPagePresenterImpl } from '~/domains/projects/adapters/projects-main-page.presenter.impl'

const projectsMock: Project[] = [
  {
    title: 'Router Easy',
    position: 'Fullstack Developer',
    startDate: new Date('2024-02-01'),
    endDate: new Date('2024-03-01'),
    location: 'I was at Boston, USA',
    description: 'The Easy Router Project is a web application designed to simplify the configuration of a travel router setup on a Raspberry Pi.',
    content: 'Bla bla content',
    slug: 'router-easy',
    technologies: [],
    coverImages: [],
  },
]

const projects = ref<ProjectViewModel[]>([])

const projectsRepositoryMock = new ProjectsRepositoryMock(projectsMock)
const getProjectsUseCase = new GetProjectsUseCase(projectsRepositoryMock)
const projectsPresenter = new ProjectsMainPagePresenterImpl(vm => projects.value = vm)
await getProjectsUseCase.execute(projectsPresenter)
</script>
