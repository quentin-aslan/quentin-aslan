import type { Technology } from '~/domains/technologies/entities/Technology'
import type { StrapiApiResponse, StrapiApiResponseSingle } from '~/domains/strapi-type'
import type { StrapiTechnologiesResponse } from '~/domains/technologies/adapters/technologies.repository.strapi'
import type { ArticlesRepository } from '~/domains/articles/ports/articles.repository'
import type { Article } from '~/domains/articles/entities/Article'

type StrapiArticlesResponse = StrapiApiResponse<{
  title: string
  slug: string
  content: string
  excerpt: string
  locale: string
  technologies: StrapiTechnologiesResponse['data']
  cover: StrapiApiResponseSingle<{
    name: string
    alternativeText: string
    caption: string
    width: number
    height: number
    url: string
  }>['data']
  localizations: []
}>

export class ArticlesRepositoryStrapi implements ArticlesRepository {
  constructor(private readonly strapiUrl: string, private readonly strapiBearer: string) {}

  public async fetchArticles(): Promise<Article[]> {
    const { data } = await $fetch<StrapiArticlesResponse>(this.strapiUrl + '/api/articles', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + this.strapiBearer,
      },
      params: {
        populate: '*',
      },
    })

    return data.map(article => this.mapStrapiArticleToArticle(article))
  }

  public async fetchArticleBySlug(slug: string): Promise<Article | undefined> {
    const { data } = await $fetch<StrapiArticlesResponse>(this.strapiUrl + '/api/articles/', {
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
      return undefined
    }

    return this.mapStrapiArticleToArticle(data[0])
  }

  private mapStrapiArticleToArticle(article: StrapiArticlesResponse['data'][0]): Article {
    const response: Article = {
      title: article.title,
      slug: article.slug,
      excerpt: article.excerpt,
      content: article.content,
      technologies: article.technologies.map(technology => ({
        label: technology.label,
        imgSrc: technology.logoUrl,
        category: technology.category as Technology['category'],
      })),
      createdAt: new Date(article.createdAt),
      updatedAt: new Date(article.updatedAt),
    }

    if (article.cover) {
      response.cover = {
        alternativeText: article.cover?.alternativeText ?? '',
        caption: article.cover?.caption ?? '',
        url: `${this.strapiUrl}${article.cover?.url}`,
      }
    }

    return response
  }
}
