import type { Article } from '~/domains/articles/entities/Article'

export interface ArticlesRepository {
  fetchArticles(): Promise<Article[]>
  fetchArticleBySlug(slug: string): Promise<Article | undefined>
}
