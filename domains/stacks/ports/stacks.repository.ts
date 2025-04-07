import type { Stack } from '~/domains/stacks/entities/Stack'

export interface StacksRepository {
  fetchStacks(): Promise<Stack[]>
}
