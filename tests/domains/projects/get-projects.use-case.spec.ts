import { describe, it, expect } from 'vitest'
import type { Project, ProjectViewModel } from '~/domains/projects/entities/Project'
import { GetProjectsUseCase } from '~/domains/projects/get-projects.use-case'
import { ProjectsRepositoryMock } from '~/domains/projects/adapters/projects.repository.mock'
import { ProjectsMainPagePresenterImpl } from '~/domains/projects/adapters/projects-main-page.presenter.impl'

describe('get-projects.use-case test', () => {
  it('should get projects and return it to project view model', async () => {
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

    let projectsList: ProjectViewModel[] = []

    const getProjectsUseCase = new GetProjectsUseCase(new ProjectsRepositoryMock(projectsMock))
    await getProjectsUseCase.execute(new ProjectsMainPagePresenterImpl(vm => projectsList = vm))

    expect(projectsList).toHaveLength(1)
  })
})
