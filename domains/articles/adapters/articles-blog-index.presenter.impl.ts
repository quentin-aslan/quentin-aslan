import { applyTailwindClasses } from '~/domains/apply-tailwind-classes'
import type { Article, ArticleViewModel } from '~/domains/articles/entities/Article'
import markedMdConfig from '~/domains/utils/marked-md-config'
import type { ArticlesPresenter } from '~/domains/articles/ports/articles.presenter'

export class ArticlesBlogIndexPresenterImpl implements ArticlesPresenter {
  constructor(
    private readonly articlesViewModel: (viewModel: ArticleViewModel[]) => void,
  ) {}

  public async present(articles: Article[]) {
    const formattedArticle = (await Promise.all(
      articles
        .sort(this.sortByDateDescending)
        .map(this.toViewModel),
    ))
    this.articlesViewModel(formattedArticle)
  }

  private sortByDateDescending = (a: Article, b: Article): number => {
    const dateA = new Date(a.createdAt)
    const dateB = new Date(b.createdAt)

    return dateB.getTime() - dateA.getTime()
  }

  private toViewModel = async (article: Article): Promise<ArticleViewModel> => {
    const content = await markedMdConfig.parse(article.content)

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
