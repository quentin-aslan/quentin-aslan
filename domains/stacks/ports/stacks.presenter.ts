import type { Stack } from '~/domains/stacks/entities/Stack'

export interface StacksPresenter {
  present(stacks: Stack[]): void
}
