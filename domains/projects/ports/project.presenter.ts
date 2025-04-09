import type { Project } from '~/domains/projects/entities/Project'

export interface ProjectPresenter {
  present(project: Project): Promise<void> | void
}
