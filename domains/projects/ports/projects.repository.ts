import type { Project } from '~/domains/projects/entities/Project'

export interface ProjectsRepository {
  fetchProjects(): Promise<Project[]>
}
