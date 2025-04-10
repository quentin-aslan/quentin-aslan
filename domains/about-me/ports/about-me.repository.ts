import type { AboutMe } from '~/domains/about-me/entities/AboutMe'

export interface AboutMeRepository {
  fetchAboutMe(): Promise<AboutMe>
}
