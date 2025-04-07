import type { StacksRepository } from '~/domains/stacks/ports/stacks.repository'
import type { StacksPresenter } from '~/domains/stacks/ports/stacks.presenter'

export class GetStacksUseCase {
  constructor(private stacksRepository: StacksRepository) {}

  async execute(presenter: StacksPresenter) {
    const stacks = await this.stacksRepository.fetchStacks()
    presenter.present(stacks)
  }
}
