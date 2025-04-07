import type { StacksRepository } from '~/domains/stacks/ports/stacks.repository'
import type { Stack } from '~/domains/stacks/entities/Stack'

export class StacksRepositoryMock implements StacksRepository {
  constructor(private readonly stacksToReturn: Stack[] = []) {}

  public async fetchStacks(): Promise<Stack[]> {
    return this.stacksToReturn
  }
}
