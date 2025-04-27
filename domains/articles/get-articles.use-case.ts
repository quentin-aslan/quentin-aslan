import type { ArticlesPresenter } from '~/domains/articles/ports/articles.presenter'
import type { ArticlesRepository } from '~/domains/articles/ports/articles.repository'

export class GetArticlesUseCase {
  constructor(private articlesRepository: ArticlesRepository) {}

  async execute(presenter: ArticlesPresenter) {
    const articles = await this.articlesRepository.fetchArticles()
    await presenter.present(articles)
  }
}
