import type { ProjectsRepository } from '~/domains/projects/ports/projects.repository'
import type { ProjectsPresenter } from '~/domains/projects/ports/projects.presenter'

export class GetProjectsUseCase {
  constructor(private projectsRepository: ProjectsRepository) {}

  async execute(presenter: ProjectsPresenter) {
    const projects = await this.projectsRepository.fetchProjects()
    await presenter.present(projects)
  }
}
