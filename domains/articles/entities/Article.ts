import type { Technology } from '~/domains/technologies/entities/Technology'

export interface Article {
  title: string
  slug: string
  content: string
  excerpt: string
  technologies: Technology[]
  cover?: {
    url: string
    alternativeText: string
    caption: string
  }
  createdAt: Date
  updatedAt: Date
}

export interface ArticleViewModel {
  title: string
  slug: string
  content: string
  excerpt: string
  articleLink: string
  technologies: Technology[]
  cover?: {
    url: string
    alternativeText: string
    caption: string
  }
  createdAt: Date
  updatedAt: Date
}
