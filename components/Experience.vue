<template>
  <section
    ref="experienceDiv"
    class="w-full h-full z-10 relative flex flex-col items-center justify-center"
    :class="{
      'animate-fade-in-left': isEven && isExperienceVisible,
      'animate-fade-in-right': !isEven && isExperienceVisible,
    }"
  >
    <div
      v-if="!isLastExperience"
      class="-bottom-5 absolute transform -translate-x-1/2 h-10 border-2 border-primary -z-10"
    />
    <div
      class="group flex flex-col gap-5 w-11/12 rounded-md lg:w-[90%] p-4 bg-white border-2 border-primary shadow-primary hover:shadow-custom-shadow-primary duration-150 hover:-translate-y-1.5 cursor-pointer"
      @click="(experience.moreDetails && experience.moreDetails.length > 0) ? isAllVisible = !isAllVisible : undefined "
    >
      <!-- Experience Information -->
      <div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400"> {{ experience.period }} </time>
        <h3 class="text-lg font-semibold text-gray-900">
          {{ experience.role }}
        </h3>
        <NuxtImg
          v-if="experience.company_img"
          class="w-10 my-1"
          :src="experience.company_img"
          :alt="experience.company"
        />
        <span
          v-else
          class="text-base font-semibold"
          :class="{ 'text-green-800': (experience.company === 'Occitaline') }"
        >{{ experience.company }}</span>
        <p class="text-base font-normal text-gray-500">
          {{ experience.location }}
        </p>
      </div>

      <!-- Experience skills -->
      <div class="flex flex-col gap-5">
        <ul class="text-gray-700 list-disc list-inside flex flex-col gap-2">
          <li
            v-for="achievement in experience.keyAchievements"
            :key="achievement"
            v-html="achievement"
          />
        </ul>
        <div
          class="flex flex-col gap-5 opacity-0 max-h-0 transition-all duration-700"
          :class="{ 'opacity-100 max-h-lvh': isAllVisible }"
        >
          <div class="flex flex-row justify-center items-center">
            <div
              class="block absolute transform w-10 mx-auto border-2 border-primary transition-all duration-700"
              :class="{ 'w-60': isAllVisible }"
            />
          </div>

          <ul class="list-disc list-inside flex flex-col gap-2">
            <li
              v-for="detail in experience.moreDetails"
              :key="detail"
              class="opacity-0 transition-all duration-700"
              :class="{ 'opacity-100': isAllVisible }"
              :style="isAllVisible ? `transition-delay: ${100 * (experience.moreDetails.indexOf(detail) + 1)}ms` : ''"
              v-html="detail"
            />
          </ul>
        </div>
      </div>

      <!-- Show More button -->
      <div
        v-if="experience.moreDetails && experience.moreDetails.length > 0"
        class="text-right"
      >
        <button class="text-secondary font-semibold duration-150 group-hover:border-b-2 group-hover:border-secondary hover:text-primary hover:border-primary hover:-translate-y-1.5">
          {{ isAllVisible ? 'Show less' : 'Show more' }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type Experience = {
  period: string
  role: string
  company: string
  company_img?: string
  location: string
  keyAchievements: string[]
  moreDetails: string[]
}

type Props = {
  index: number
  experience: Experience
  isLastExperience: boolean
}

const props: Props = defineProps<Props>()

const isAllVisible = ref(false)

const isEven = computed(() => {
  return props.index % 2 === 0
})

const experienceDiv = ref<HTMLDivElement | null>(null)
const isExperienceVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        isExperienceVisible.value = entry.isIntersecting
      }
    })
  })

  if (experienceDiv.value) {
    observer.observe(experienceDiv.value)
  }

  onUnmounted(() => {
    if (experienceDiv.value) {
      observer.unobserve(experienceDiv.value)
    }
  })
})
</script>
