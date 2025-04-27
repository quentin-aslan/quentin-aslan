import type { ArticlesRepository } from '~/domains/articles/ports/articles.repository'
import type { ArticlePresenter } from '~/domains/articles/ports/article.presenter'

export class GetArticleUseCase {
  constructor(private articlesRepository: ArticlesRepository) {}

  async execute(presenter: ArticlePresenter, slug: string) {
    try {
      const article = await this.articlesRepository.fetchArticleBySlug(slug)

      if (!article) {
        throw new Error(`Article "${slug}" not found`)
      }

      await presenter.present(article)
    }
    catch (error) {
      console.error(error)
    }
  }
}
