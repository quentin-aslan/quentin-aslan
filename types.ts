export type TechStacksType = {
  type: 'single' | 'multiple'
  techs: Tech[]
}

export type Tech = {
  label: string
  icon: string
  category: 'frontend' | 'backend' | 'devops' | 'database' | 'other'
}

export enum TechStackList {
  VueJS = 'VueJS',
  ReactJS = 'ReactJS',
  NodeJS = 'NodeJS',
  TypeScript = 'TypeScript',
  TailwindCSS = 'TailwindCSS',
  Linux = 'Linux',
  Upwork = 'Upwork',
}

export type ProjectImage = {
  src: string
  alt: string
}
