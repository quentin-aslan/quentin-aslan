import type { Technology } from '~/domains/technologies/entities/Technology'
import type { TechnologiesRepository } from '~/domains/technologies/ports/technologies.repository'
import type { StrapiApiResponse } from '~/domains/strapi-type'

export type StrapiTechnologiesResponse = StrapiApiResponse<{
  label: string
  logoUrl: string
  category: string
}>

export class TechnologiesRepositoryStrapi implements TechnologiesRepository {
  constructor(private readonly strapiUrl: string, private readonly strapiBearer: string) {}

  public async fetchTechnologies(): Promise<Technology[]> {
    const { data } = await $fetch<StrapiTechnologiesResponse>(this.strapiUrl + '/api/technologies', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + this.strapiBearer,
      },
      params: {
        'pagination[pageSize]': 50,
      },
    })

    return data.map(technology => ({
      label: technology.label,
      imgSrc: technology.logoUrl,
      category: technology.category as Technology['category'],
    }))
  }
}
