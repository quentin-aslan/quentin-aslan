import type { ArticlesRepository } from '~/domains/articles/ports/articles.repository'
import type { Article } from '~/domains/articles/entities/Article'

export class ArticlesRepositoryMock implements ArticlesRepository {
  constructor(private readonly articlesToReturn: Article[] = []) {}

  public async fetchProjects(): Promise<Article[]> {
    return this.articlesToReturn
  }

  public async fetchArticleBySlug(slug: string): Promise<Article | undefined> {
    return this.articlesToReturn.find(article => article.slug === slug)
  }
}
