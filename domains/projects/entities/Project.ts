import type { Technology } from '~/domains/technologies/entities/Technology'

export interface Project {
  title: string
  position: string
  location: string
  startDate: Date
  endDate: Date | null
  description: string
  technologies: Technology[]
  content: string
  coverImage: {
    url: string
    alternativeText: string
    caption: string
  }
  slug: string
}

export interface ProjectViewModel {
  title: string
  position: string
  location: string
  startDate: string
  endDate: string | null
  description: string
  slug: string
  projectLink: string
  technologies: Technology[]
  coverImage: {
    url: string
    alternativeText: string
    caption: string
  }
  content: string
}
