import { describe, it, expect } from 'vitest'
import type { Technology } from '~/domains/technologies/entities/Technology'
import { GetTechnologiesUseCase } from '~/domains/technologies/get-technologies.use-case'
import { TechnologiesRepositoryMock } from '~/domains/technologies/adapters/technologies.repository.mock'
import { TechnologiesPresenterImpl } from '~/domains/technologies/adapters/technologies.presenter.impl'

describe('get-technologies.use-case test', () => {
  it('should get technologies', async () => {
    let technosList: Technology[] = []

    const getTechnosUseCase = new GetTechnologiesUseCase(new TechnologiesRepositoryMock([
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

    await getTechnosUseCase.execute(new TechnologiesPresenterImpl(vm => technosList = vm))

    // check if the technosList is equal to the technologies returned by the repository
    expect(technosList).toEqual([
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

    expect(technosList).toHaveLength(2)
  })
})
