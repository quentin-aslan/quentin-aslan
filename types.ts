export type TechStacksType = {
    type: 'single' | 'multiple'
    techs: {
        label: string
        icon: string
    }[]
}

export enum TechStackList {
    VueJS = 'VueJS',
    NodeJS = 'NodeJS',
    TypeScript = 'TypeScript',
    TailwindCSS = 'TailwindCSS',
    Linux = 'Linux'
}

export type ProjectImage = {
    src: string
    alt: string
}