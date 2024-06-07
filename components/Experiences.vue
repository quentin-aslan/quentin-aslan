  <template>
    <section ref="experiencesEl" class="my-20 mx-auto w-full">
      <h2 class="text-xl font-extrabold text-primary uppercase text-center mb-8">Professional Experience</h2>
      <div class="flex flex-col w-full gap-5 justify-center items-center">
        <Experience v-for="(experience, index) in experiences" :key="experience.company" :index="index" :experience="experience" :is-last-experience="index === experiences.length-1" />
      </div>
    </section>

  </template>

  <script setup lang="ts">

  type Experience = {
    period: string;
    role: string;
    company: string;
    company_img?: string;
    location: string;
    keyAchievements: string[];
    moreDetails: string[];
  }

  const experiences: Experience[] = [
    {
      period: '2022 - 2024',
      role: 'Frontend Engineer',
      company: 'Bell',
      company_img: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Bell_logo.svg',
      location: 'Montréal, Canada 🇨🇦',
      keyAchievements: [
        '<span class="text-primary font-semibold">Led the complete redesign of a critical B2B application</span> for Bell, improving functionality and user experience.',
        '<span class="text-primary font-semibold">Developed a scalable and reusable frontend architecture</span> with VueJS 3 and Pinia.',
        '<span class="text-primary font-semibold">Enhanced proficiency in Figma</span> by working closely with UX design teams.',
        'Successfully managed and collaborated in a large, cross-functional team using Agile methodologies.',
        'Integrated advanced user tracking with Matomo, providing valuable insights into application usage.'
      ],
      moreDetails: [
        'Worked closely with UX teams to ensure seamless integration of design and functionality.',
        'Implemented unit testing and CI/CD pipelines to ensure code quality and efficient deployment',
        'Collaborated with cross-functional teams to gather and implement feedback, improving the overall user experience.',
        'Utilized Agile methodology to manage project timelines and deliverables effectively.',
        'Conducted technical presentations to demonstrate new features and functionalities to stakeholders.',
        'Technologies Used: VueJS 3, Pinia, SASS, Figma, Matomo, Java Spring, Azure DevOps, GitLab.'
      ]
    },
    {
      period: '2019 - 2022',
      role: 'Software Engineer',
      company: 'Occitaline',
      location: 'Toulouse, France 🇫🇷',
      keyAchievements: [
        '<span class="text-primary font-semibold">Created an application for configuring Linux routers </span>, used by multiple companies including the <span class="text-primary font-semibold">National Center for Space Research (CNES) in France</span> or <span class="text-primary font-semibold">The France\'s stadium</span>.',
        '<span class="text-primary font-semibold">Designed and implemented REST APIs</span> with Node.js and integrated them with MongoDB.',
        'Built responsive user interfaces using Vue.js, Bootstrap, and jQuery.',
        'Implemented unit testing and CI/CD pipelines, ensuring robust and efficient development processes.',
        'Managed the complete product development cycle, from requirements gathering to production deployment.',
        'Developed a JavaScript-based 3D model viewer using the BIM (Building Information Modeling) approach.'
      ],
      moreDetails: [
          '<span class="text-primary font-semibold">Worked closely with UX teams</span> to ensure seamless integration of design and functionality.',
          '<span class="text-primary font-semibold">Implemented unit testing and CI/CD pipelines</span> to ensure code quality and efficient deployment 🚀.',
          '<span class="text-primary font-semibold">Collaborated with cross-functional teams</span> to gather and implement feedback, improving the overall user experience.',
          '<span class="text-primary font-semibold">Utilized Agile methodology</span> to manage project timelines and deliverables effectively.',
          '<span class="text-primary font-semibold">Conducted technical presentations</span> to demonstrate new features and functionalities to stakeholders.',
          '<span class="text-primary font-semibold">Technologies Used</span>: Vue.js 3, jQuery, HTML/CSS, Node.js GitLab.'
      ]
    },
    {
      period: '2015 - 2022',
      role: 'Freelance Software Engineer',
      company: 'Various Clients',
      company_img: undefined,
      location: 'Remote',
      keyAchievements: [
        'REST APIs, Linux system administration, Network Management.',
        'Intrusion testing, security auditing.',
        'Mobile apps, E-commerce and showcase websites.',
        'Web & Mobile application development for individuals and businesses.'
      ],
      moreDetails: []
    }
  ]

  </script>
