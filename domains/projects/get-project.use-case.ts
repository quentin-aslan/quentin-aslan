import type { ProjectsRepository } from '~/domains/projects/ports/projects.repository'
import type { ProjectPresenter } from '~/domains/projects/ports/project.presenter'

export class GetProjectUseCase {
  constructor(private projectsRepository: ProjectsRepository) {}

  async execute(presenter: ProjectPresenter, slug: string) {
    const project = await this.projectsRepository.fetchProjectBySlug(slug)

    if (!project) {
      throw new Error(`Project with slug "${slug}" not found`)
    }

    await presenter.present(project)
  }
}
