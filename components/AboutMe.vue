<template>
  <section
    ref="aboutMeSection"
    class="bg-white text-gray-700 p-10"
  >
    <div class="flex flex-col lg:flex-row gap-4 items-center">
      <div
        class="flex flex-col gap-4 items-center lg:text-center lg:border-r-2 lg:w-2/4"
        :class="{ 'animate-fade-in-left': isSectionVisible }"
      >
        <h2 class="text-xl text-primary dark:text-primary-dark font-extrabold uppercase">
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
          Hey, my name is Quentin Aslan and I'm 24-year-old <span class="font-semibold">Full-Stack software engineer 🧑‍💻</span>.
          My passion for technology started in my adolescence, and I've been developing professional websites since 2015.
        </p>

        <p>
          Originally from France 🇫🇷, I'm currently living in Canada 🇨🇦 to gain international experience since 2022.
        </p>

        <p>
          As a full-stack software engineer, I specialize in developing <span class="font-semibold">websites and mobile applications📱</span>.
        </p>

        <p class="flex flex-row items-center gap-2">
          My expertise extends to network management and Linux system administration.
        </p>

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
