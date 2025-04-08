import type { Technology } from '~/domains/technologies/entities/Technology'

export interface TechnologiesRepository {
  fetchTechnologies(): Promise<Technology[]>
}
