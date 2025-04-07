import type { Stack } from '~/domains/stacks/entities/Stack'

export interface Project {
  title: string
  position: string
  location: string
  startDate: Date
  endDate: Date | null
  description: string
  slug: string
  stack: Stack[]
  coverImages: string[]
  content: string
}

export type ProjectViewModel = Project
