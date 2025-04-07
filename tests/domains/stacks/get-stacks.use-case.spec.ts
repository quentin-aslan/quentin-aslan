import { describe, it, expect } from 'vitest'
import { GetStacksUseCase } from '~/domains/stacks/get-stacks.use-case'
import { StacksRepositoryMock } from '~/domains/stacks/adapters/stacks.repository.mock'
import { StacksPresenterImpl } from '~/domains/stacks/adapters/stacks.presenter.impl'
import type { Stack } from '~/domains/stacks/entities/Stack'

describe('get-stacks.use-case test', () => {
  it('should get stacks', async () => {
    let stacksList: Stack[] = []

    const getStacksUseCase = new GetStacksUseCase(new StacksRepositoryMock([
      {
        label: 'MockLabel',
        category: 'frontend',
        imgSrc: 'test_img_src_frontend',
      },
      {
        label: 'MockLabel2',
        category: 'backend',
        imgSrc: 'test_img_src_backend',
      },
    ]))

    await getStacksUseCase.execute(new StacksPresenterImpl(vm => stacksList = vm))

    // check if the stacksList is equal to the stacks returned by the repository
    expect(stacksList).toEqual([
      {
        label: 'MockLabel',
        category: 'frontend',
        imgSrc: 'test_img_src_frontend',
      },
      {
        label: 'MockLabel2',
        category: 'backend',
        imgSrc: 'test_img_src_backend',
      },
    ])

    expect(stacksList).toHaveLength(2)
  })
})
