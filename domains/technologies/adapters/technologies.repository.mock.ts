import type { Technology } from '~/domains/technologies/entities/Technology'
import type { TechnologiesRepository } from '~/domains/technologies/ports/technologies.repository'

export class TechnologiesRepositoryMock implements TechnologiesRepository {
  constructor(private readonly technologiesToReturn: Technology[] = []) {}

  public async fetchTechnologies(): Promise<Technology[]> {
    return this.technologiesToReturn
  }
}
