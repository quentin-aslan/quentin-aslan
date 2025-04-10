import { describe, it, expect } from 'vitest'
import type { Technology } from '~/domains/technologies/entities/Technology'
import { GetTechnologiesUseCase } from '~/domains/technologies/get-technologies.use-case'
import { TechnologiesRepositoryMock } from '~/domains/technologies/adapters/technologies.repository.mock'
import { TechnologiesPresenterImpl } from '~/domains/technologies/adapters/technologies.presenter.impl'
import type { AboutMe } from '~/domains/about-me/entities/AboutMe'
import { GetAboutMeUseCase } from '~/domains/about-me/get-about-me.use-case'
import { AboutMeRepositoryMock } from '~/domains/about-me/adapters/about-me.repository.mock'
import { AboutMePresenterImpl } from '~/domains/about-me/adapters/about-me.presenter.impl'

describe('get-about-me.use-case test', () => {
  it('should get about-me', async () => {
    let aboutMe: AboutMe | null = null

    const getAboutMeUseCase = new GetAboutMeUseCase(new AboutMeRepositoryMock({
      title: 'MockTitle',
      subtitle: 'MockSubtitle',
      content: 'MockContent',
      heroContent: 'MockHeroContent',
    }))

    await getAboutMeUseCase.execute(new AboutMePresenterImpl(vm => aboutMe = vm))

    expect(aboutMe).toBeDefined()
    expect(aboutMe).toHaveProperty('title')
    expect(aboutMe).toHaveProperty('subtitle')
    expect(aboutMe).toHaveProperty('content')
    expect(aboutMe).toHaveProperty('heroContent')
  })
})
