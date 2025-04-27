import type { Article } from '~/domains/articles/entities/Article'

export interface ArticlePresenter {
  present(article: Article): Promise<void> | void
}
