import type { AboutMe } from '~/domains/about-me/entities/AboutMe'

export interface AboutMePresenter {
  present(aboutMe: AboutMe): Promise<void>
}
