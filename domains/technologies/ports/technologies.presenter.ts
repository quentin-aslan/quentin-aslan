import type { Technology } from '~/domains/technologies/entities/Technology'

export interface TechnologiesPresenter {
  present(technologies: Technology[]): void
}
