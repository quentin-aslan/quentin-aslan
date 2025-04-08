import type { Technology } from '~/domains/technologies/entities/Technology'

export interface Project {
  title: string
  position: string
  location: string
  startDate: Date
  endDate: Date | null
  description: string
  slug: string
  technologies: Technology[]
  coverImages: string[]
  content: string
}

export interface ProjectViewModel {
  title: string
  position: string
  location: string
  startDate: string
  endDate: string | null
  description: string
  slug: string
  technologies: Technology[]
  coverImages: string[]
  content: string
}
