import type { Project } from '~/domains/projects/entities/Project'
import type { ProjectsRepository } from '~/domains/projects/ports/projects.repository'

export class ProjectsRepositoryMock implements ProjectsRepository {
  constructor(private readonly projectsToReturn: Project[] = []) {}

  public async fetchProjects(): Promise<Project[]> {
    return this.projectsToReturn
  }
}
