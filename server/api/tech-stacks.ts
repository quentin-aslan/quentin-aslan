import type { TechStacksType } from '~/types'

export default defineEventHandler(async (event) => {
  // Gestion des technologies ?? Via API ?
  const techStacks: TechStacksType[] = [
    {
      type: 'multiple',
      techs: [
        {
          label: 'JavaScript',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
          category: 'frontend',
        },
        {
          label: 'TypeScript',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
          category: 'frontend',
        },
      ],
    },
    {
      type: 'multiple',
      techs: [
        {
          label: 'VueJS',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg',
          category: 'frontend',
        },
        {
          label: 'NuxtJS',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-original.svg',
          category: 'frontend',
        },
      ],
    },
    {
      type: 'multiple',
      techs: [
        {
          label: 'Java',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
          category: 'backend',
        },
        {
          label: 'Spring',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg',
          category: 'backend',
        },
      ],
    },
    {
      type: 'single',
      techs: [
        {
          label: 'Go',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg',
          category: 'backend',
        },
      ],
    },
    {
      type: 'multiple',
      techs: [
        {
          label: 'HTML5',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
          category: 'frontend',
        },
        {
          label: 'CSS3',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
          category: 'frontend',
        },
      ],
    },
    {
      type: 'multiple',
      techs: [
        {
          label: 'React',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
          category: 'frontend',
        },
        {
          label: 'NextJS',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-plain.svg',
          category: 'frontend',
        },
      ],
    },
    {
      type: 'multiple',
      techs: [
        {
          label: 'Tailwind CSS',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
          category: 'frontend',
        },
        {
          label: 'Sass',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg',
          category: 'frontend',
        },
      ],
    },
    {
      type: 'multiple',
      techs: [
        {
          label: 'Node JS',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg',
          category: 'backend',
        },
        {
          label: 'Express',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
          category: 'backend',
        },
      ],
    },
    {
      type: 'multiple',
      techs: [
        {
          label: 'MongoDB',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg',
          category: 'database',
        },
        {
          label: 'PostgreSQL',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
          category: 'database',
        },
      ],
    },
    {
      type: 'single',
      techs: [
        {
          label: 'Supabase',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg',
          category: 'database',
        },
      ],
    },
    {
      type: 'single',
      techs: [
        {
          label: 'Amazon Web Services',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
          category: 'devops',
        },
      ],
    },
    {
      type: 'single',
      techs: [
        {
          label: 'Grafana',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-original.svg',
          category: 'devops',
        },
      ],
    },
    {
      type: 'single',
      techs: [
        {
          label: 'Docker',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
          category: 'devops',
        },
      ],
    },
    {
      type: 'multiple',
      techs: [
        {
          label: 'Vitest',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitest/vitest-original.svg',
          category: 'frontend',
        }, {
          label: 'Jest',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg',
          category: 'frontend',
        }, {
          label: 'Cypress',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg',
          category: 'frontend',
        },
      ],
    },
  ]
  return techStacks
})
