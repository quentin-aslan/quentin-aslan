import type { AboutMeRepository } from '~/domains/about-me/ports/about-me.repository'
import type { AboutMePresenter } from '~/domains/about-me/ports/about-me.presenter'

export class GetAboutMeUseCase {
  constructor(private aboutMeRepository: AboutMeRepository) {}

  async execute(presenter: AboutMePresenter) {
    const aboutMe = await this.aboutMeRepository.fetchAboutMe()
    await presenter.present(aboutMe)
  }
}
