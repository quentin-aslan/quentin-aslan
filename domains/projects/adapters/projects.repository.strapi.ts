import type { Technology } from '~/domains/technologies/entities/Technology'
import type { StrapiApiResponse } from '~/domains/strapi-type'
import type { ProjectsRepository } from '~/domains/projects/ports/projects.repository'
import type { Project } from '~/domains/projects/entities/Project'
import type { StrapiTechnologiesResponse } from '~/domains/technologies/adapters/technologies.repository.strapi'

type StrapiProjectsResponse = StrapiApiResponse<{
  title: string
  position: string
  location: string
  startDate: string
  endDate: string | null
  description: string
  content: string
  slug: string
  locale: string
  technologies: StrapiTechnologiesResponse['data']
  coverImages: StrapiApiResponse<{
    name: string
    alternativeText: string
    caption: string
    width: number
    height: number
    url: string
    // There are more properties, but we don't need them for now
  }>['data']
  localizations: []
}>

export class ProjectsRepositoryStrapi implements ProjectsRepository {
  constructor(private readonly strapiUrl: string, private readonly strapiBearer: string) {}

  public async fetchProjects(): Promise<Project[]> {
    const { data } = await $fetch<StrapiProjectsResponse>(this.strapiUrl + '/api/projects', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + this.strapiBearer,
      },
      params: {
        populate: '*',
      },
    })

    return data.map(project => this.mapStrapiProjectToProject(project))
  }

  public async fetchProjectBySlug(slug: string): Promise<Project> {
    const { data } = await $fetch<StrapiProjectsResponse>(this.strapiUrl + '/api/projects/', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + this.strapiBearer,
      },
      params: {
        'filters[slug][$eq]': slug,
        'populate': '*',
      },
    })

    if (data.length === 0) {
      return null
    }

    return this.mapStrapiProjectToProject(data[0])
  }

  private mapStrapiProjectToProject(project: StrapiProjectsResponse): Project {
    return {
      title: project.title,
      position: project.position,
      location: project.location,
      startDate: new Date(project.startDate),
      endDate: project.endDate ? new Date(project.endDate) : null,
      description: project.description,
      content: project.content,
      slug: project.slug,
      technologies: project.technologies.map(technology => ({
        label: technology.label,
        imgSrc: technology.logoUrl,
        category: technology.category as Technology['category'],
      })),
      coverImage: {
        name: project.coverImages[0].name,
        alternativeText: project.coverImages[0].alternativeText,
        caption: project.coverImages[0].caption,
        width: project.coverImages[0].width,
        height: project.coverImages[0].height,
        url: `${this.strapiUrl}${project.coverImages[0].url}`,
      },
    }
  }
}
