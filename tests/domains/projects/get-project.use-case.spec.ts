import { describe, it, expect } from 'vitest'
import type { Project, ProjectViewModel } from '~/domains/projects/entities/Project'
import { ProjectsRepositoryMock } from '~/domains/projects/adapters/projects.repository.mock'
import { GetProjectUseCase } from '~/domains/projects/get-project.use-case'
import { ProjectPresenterImpl } from '~/domains/projects/adapters/project.presenter.impl'

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
    coverImage: {
      url: 'https://example.com/image.jpg',
      alternativeText: 'Router Easy Image',
      caption: 'Router Easy Caption',
    },
  },
]

describe('get-project.use-case test', () => {
  it('Should return the project filtered by slug', async () => {
    let project: ProjectViewModel | undefined

    const getProjectsUseCase = new GetProjectUseCase(new ProjectsRepositoryMock(projectsMock))
    await getProjectsUseCase.execute(new ProjectPresenterImpl(vm => project = vm), 'router-easy')

    expect(project?.slug).eq('router-easy')
  })

  it('The project link should be well generate', async () => {
    let project: ProjectViewModel | undefined

    const getProjectsUseCase = new GetProjectUseCase(new ProjectsRepositoryMock(projectsMock))
    await getProjectsUseCase.execute(new ProjectPresenterImpl(vm => project = vm), 'router-easy')

    expect(project?.projectLink).eq('/project/router-easy')
  })
})
