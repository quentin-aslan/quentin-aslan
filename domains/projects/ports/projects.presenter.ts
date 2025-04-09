import type { Project } from '~/domains/projects/entities/Project'

export interface ProjectsPresenter {
  present(projects: Project[]): Promise<void> | void
}
