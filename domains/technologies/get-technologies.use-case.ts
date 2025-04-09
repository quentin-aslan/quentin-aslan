import type { TechnologiesRepository } from '~/domains/technologies/ports/technologies.repository'
import type { TechnologiesPresenter } from '~/domains/technologies/ports/technologies.presenter'

export class GetTechnologiesUseCase {
  constructor(private technologiesRepository: TechnologiesRepository) {}

  async execute(presenter: TechnologiesPresenter) {
    const technologies = await this.technologiesRepository.fetchTechnologies()
    presenter.present(technologies)
  }
}
