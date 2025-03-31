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
          {{ $t('aboutMe.title') }}
        </h2>
        <h3 class="text-2xl lg:text-3xl font-extrabold lg:w-3/4">
          {{ $t('aboutMe.subtitle') }}
        </h3>
      </div>

      <div
        class="flex flex-col gap-5 text-lg text-gray-600 w-full lg:text-left lg:pl-10"
        :class="{ 'animate-fade-in-right': isSectionVisible }"
      >
        <p>
          {{ $t('aboutMe.description') }}
        </p>

        <h3 class="text-xl font-semibold">
          {{ $t('aboutMe.internationalExperience') }}
        </h3>
        <p>
          {{ $t('aboutMe.internationalExperienceDescription') }}
        </p>

        <p>
          {{ $t('aboutMe.usaExperience') }}
        </p>

        <p>
          {{ $t('aboutMe.spanishExperience') }}
        </p>

        <h3 class="text-xl font-semibold">
          {{ $t('aboutMe.expertise') }}
        </h3>
        <p>
          {{ $t('aboutMe.expertiseDescription') }}
        </p>

        <p>
          {{ $t('aboutMe.networkManagement') }}
        </p>

        <h3 class="text-xl font-semibold">
          {{ $t('aboutMe.collaboration') }}
        </h3>
        <p>
          {{ $t('aboutMe.collaborationDescription') }}
        </p>

        <p>
          {{ $t('aboutMe.learning') }}
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
