import type { StacksPresenter } from '~/domains/stacks/ports/stacks.presenter'
import type { Stack } from '~/domains/stacks/entities/Stack'

// In this case the presenter does not do anything, but it is a good practice to have it

export class StacksPresenterImpl implements StacksPresenter {
  constructor(
    private readonly stacksViewModel: (viewModel: Stack[]) => void,
  ) {}

  present(stacks: Stack[]) {
    this.stacksViewModel(stacks)
  }
}
