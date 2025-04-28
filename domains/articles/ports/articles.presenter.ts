import type { Article } from '~/domains/articles/entities/Article'

export interface ArticlesPresenter {
  present(articles: Article[]): Promise<void> | void
}
