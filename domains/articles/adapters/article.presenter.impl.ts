import { marked } from 'marked'
import { applyTailwindClasses } from '~/domains/apply-tailwind-classes'
import type { ArticlePresenter } from '~/domains/articles/ports/article.presenter'
import type { Article, ArticleViewModel } from '~/domains/articles/entities/Article'

export class ArticlePresenterImpl implements ArticlePresenter {
  constructor(
    private readonly articleViewModel: (viewModel: ArticleViewModel) => void,
  ) {}

  public async present(article: Article) {
    const formattedArticle = await this.toViewModel(article)
    this.articleViewModel(formattedArticle)
  }

  private toViewModel = async (article: Article): Promise<ArticleViewModel> => {
    const content = await marked.parse(article.content)

    return {
      title: article.title,
      excerpt: article.excerpt,
      content: applyTailwindClasses(content),
      cover: article.cover,
      slug: article.slug,
      articleLink: `/blog/${article.slug}`,
      technologies: article.technologies,
      createdAt: article.createdAt,
      updatedAt: article.updatedAt,
    }
  }
}
