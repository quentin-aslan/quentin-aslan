export type TechStacksType = {
  type: 'single' | 'multiple'
  techs: {
    label: string
    icon: string
  }[]
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
