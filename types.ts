export type TechStacksType = {
    type: 'single' | 'multiple'
    techs: {
        label: string
        icon: string
    }[]
}


export type ProjectImage = {
    src: string
    alt: string
}