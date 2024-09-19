<template>
  <section
    id="about-me"
    ref="aboutMeSection"
    class="bg-white text-gray-700 p-10"
  >
    <div class="flex flex-col lg:flex-row gap-4 items-center">
      <div
        class="flex flex-col gap-4 items-center lg:text-center lg:border-r-2 lg:w-2/4"
        :class="{ 'animate-fade-in-left': isSectionVisible }"
      >
        <h2 class="text-3xl text-primary font-extrabold uppercase">
          About me
        </h2>
        <h3 class="text-2xl lg:text-3xl font-extrabold lg:w-3/4">
          Full-Stack Developer based in Montréal, Canada 📍
        </h3>
      </div>

      <div
        class="flex flex-col gap-5 text-lg text-gray-600 w-full lg:text-left lg:pl-10"
        :class="{ 'animate-fade-in-right': isSectionVisible }"
      >
        <p>
          My name is Quentin Aslan, and I'm a <strong>25-year-old Full-Stack software engineer</strong>. My passion for technology started in my adolescence, and I've been developing professional websites since 2015.
        </p>

        <h3 class="text-xl font-semibold">
          International Experience
        </h3>
        <p>
          Originally from France <span aria-label="France flag">🇫🇷</span>, I spent the last two years living in Canada <span aria-label="Canada flag">🇨🇦</span>
          (2022–September 2024) to gain international experience.
        </p>

        <p>
          This journey also took me to Boston, USA <span aria-label="USA flag">🇺🇸</span> to solidify my fluency in English.
        </p>

        <p>
          Additionally, I’ve had the opportunity to enhance and practice my Spanish during stays in Colombia
          <span aria-label="Colombia flag">🇨🇴</span> and Guatemala <span aria-label="Guatemala flag">🇬🇹</span>.
        </p>

        <h3 class="text-xl font-semibold">
          Expertise in Development
        </h3>
        <p>
          As a full-stack software engineer, I specialize in developing <span class="font-semibold">websites and mobile applications 📱</span>.
        </p>

        <p>
          My expertise extends to <span class="font-semibold">network management</span> and <span class="font-semibold">Linux system administration</span>.
        </p>

        <h3 class="text-xl font-semibold">
          Passion for Collaboration and Learning
        </h3>
        <p>
          I thrive in collaborative environments, working closely with cross-functional teams to deliver robust, user-friendly solutions.
        </p>

        <p>
          Passionate about continuous learning and new technologies, I aim to create impactful and innovative software.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const isSectionVisible = ref(false)
const aboutMeSection = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        isSectionVisible.value = entry.isIntersecting
      }
    })
  })

  if (aboutMeSection.value) {
    observer.observe(aboutMeSection.value)
  }

  onUnmounted(() => {
    if (aboutMeSection.value) {
      observer.unobserve(aboutMeSection.value)
    }
  })
})
</script>
