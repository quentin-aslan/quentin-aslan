import type { StrapiApiResponseSingle } from '~/domains/strapi-type'
import type { AboutMeRepository } from '~/domains/about-me/ports/about-me.repository'
import type { AboutMe } from '~/domains/about-me/entities/AboutMe'

export type StrapiAboutMeResponse = StrapiApiResponseSingle<{
  title: string
  subtitle: string
  content: string
  heroContent: string
}>

export class AboutMeRepositoryStrapi implements AboutMeRepository {
  constructor(private readonly strapiUrl: string, private readonly strapiBearer: string) {}

  public async fetchAboutMe(): Promise<AboutMe> {
    const { data } = await $fetch<StrapiAboutMeResponse>(this.strapiUrl + '/api/about-me', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + this.strapiBearer,
      },
    })

    return {
      title: data.title,
      subtitle: data.subtitle,
      content: data.content,
      heroContent: data.heroContent,
    }
  }
}
