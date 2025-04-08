import type { TechnologiesPresenter } from '~/domains/technologies/ports/technologies.presenter'
import type { Technology } from '~/domains/technologies/entities/Technology'

// In this case the presenter does not do anything, but it is a good practice to have it
export class TechnologiesPresenterImpl implements TechnologiesPresenter {
  constructor(
    private readonly technologiesViewModel: (viewModel: Technology[]) => void,
  ) {}

  present(technologies: Technology[]) {
    this.technologiesViewModel(technologies)
  }
}
