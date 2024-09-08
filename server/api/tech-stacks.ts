import {TechStacksType} from "~/types";

export default defineEventHandler(async (event) => {
    const techStacks: TechStacksType[] = [
        {
            type: 'multiple',
            techs: [
                {
                    label: 'HTML5',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg'
                },
                {
                    label: 'CSS3',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg'
                }
            ]
        },
        {
            type: 'multiple',
            techs: [
                {
                    label: 'JavaScript',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg'
                },
                {
                    label: 'TypeScript',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg'
                }
            ]
        },
        {
            type: 'multiple',
            techs: [
                {
                    label: 'VueJS',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg'
                },
                {
                    label: 'NuxtJS',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-original.svg'
                }
            ]
        },
        {
            type: 'multiple',
            techs: [
                {
                    label: 'React',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'
                },
                {
                    label: 'NextJS',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-plain.svg'
                }
            ]
        },
        {
            type: 'multiple',
            techs: [
                {
                    label: 'Tailwind CSS',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg'
                },
                {
                    label: 'Sass',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg'
                }
            ]
        },
        {
            type: 'multiple',
            techs: [
                {
                    label: 'Node JS',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg'
                },
                {
                    label: 'Express',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg'
                }
            ]
        },
        {
            type: 'multiple',
            techs: [
                {
                    label: 'Java',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg'
                },
                {
                    label: 'Spring',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg'
                }
            ]
        },
        {
            type: 'multiple',
            techs: [
                {
                    label: 'MongoDB',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg'
                },
                {
                    label: 'PostgreSQL',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg'
                }
            ]
        },
        {
            type: 'single',
            techs: [
                {
                    label: 'Supabase',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg'
                }
            ]
        }
    ]
    return techStacks
})