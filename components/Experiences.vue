  <template>
    <section class="my-20 mx-auto w-full">
      <h2 class="text-xl font-extrabold text-primary uppercase text-center mb-8">Professional Experience</h2>
      <div class="flex flex-col w-full h-full gap-5 justify-center items-center">
        <div class="hidden lg:block absolute transform -translate-x-1/2 h-4/6 mx-auto border-2 border-primary"></div>
        <div
            v-for="(experience, i) in experiences"
            :key="experience.company"
            :class="`flex w-full justify-center ${(i%2 === 0) ? 'flex-row' : 'lg:flex-row-reverse'} ${(i%2 === 0) ? 'lg:pr-[50%]' : 'lg:pl-[50%]'}`">
          <div
              class="w-11/12 lg:w-[90%] p-4 bg-white border-2 border-primary shadow-primary hover:shadow-custom-shadow-primary duration-150 hover:-translate-y-1.5"
              :class="`${(i !== 0) ? 'lg:-mt-10  ' : ''} ${(i%2) === 0 ? 'hover:skew-x-3' : 'hover:skew-y-2'} `"
          >
            <time class="mb-1 text-sm font-normal leading-none text-gray-400">{{ experience.period }}</time>
            <h3 class="text-lg font-semibold text-gray-900">{{ experience.role }}</h3>
            <p class="text-base font-normal text-gray-500">{{ experience.company }} - {{ experience.location }}</p>
            <ul class="mt-2 text-sm text-gray-600 list-disc list-inside">
              <li v-for="detail in experience.details" :key="detail">{{ detail }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </template>

  <script lang="ts" setup>
  const experiences = [
    {
      period: '2022 - 2024',
      role: 'Frontend Engineer',
      company: 'Bell',
      location: 'Montréal, Canada 🇨🇦',
      description: 'Bell is Canada\'s largest telecommunications company, providing Mobile phone, TV, high speed and wireless Internet, and residential Home phone services.',
      details: [
        'Development of REST APIs with Node.js and integration with MongoDB.',
        'Design of responsive user interfaces using Vue.js, Bootstrap and jQuery.',
        'Managed the complete product development cycle, from creating the requirements document to production.',
        'Advanced skills in Linux system administration, including scripting, IP routing, firewall management (netfilter, iptables), and the use of systemctl.',
        'Implemented unit testing and CI/CD pipelines.',
        'Conducted technical product presentations to clients.',
        'Created a JavaScript-based viewer for 3D building models using the BIM (Building Information Modeling) approach.',
        'Developed a 2D graphic editor, featuring a variety of drawing tools.'
      ]
    },
    {
      period: '2019 - 2022',
      role: 'Software Engineer',
      company: 'Occitaline',
      location: 'Toulouse, France 🇫🇷',
      details: [
        'Integrated backend calls through a REST API.',
        'Developed Vue.js components for code reusability using the ElementPlus library and a cross-project SASS library to integrate the company\'s Design System.',
        'Collaborated with design teams to integrate their Figma mockups.',
        'Actively participated in Daily/Retrospectives and Planning to monitor project progress and adjust work based on priorities.'
      ]
    },
    {
      period: '2015 - 2023',
      role: 'Freelance Software Engineer',
      company: 'Various Clients',
      location: 'Remote',
      details: [
        'REST APIs, Linux system administration, Network Management.',
        'Intrusion testing, security auditing.',
        'Mobile apps, E-commerce and showcase websites.',
        'Web & Mobile application development for individuals and businesses.'
      ]
    }
  ];
  </script>
