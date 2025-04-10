import type { AboutMeRepository } from '~/domains/about-me/ports/about-me.repository'
import type { AboutMe } from '~/domains/about-me/entities/AboutMe'

export class AboutMeRepositoryMock implements AboutMeRepository {
  constructor(private readonly aboutMeToReturn: AboutMe = {
    title: 'MockTitle',
    subtitle: 'MockSubTitle',
    content: 'MockContent',
    heroContent: 'MockHeroContent',
  }) {}

  public async fetchAboutMe(): Promise<AboutMe> {
    return this.aboutMeToReturn
  }
}
