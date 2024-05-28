<template>
  <section
      ref="experienceDiv"
      class="w-full"
      :class="{'animate-fade-in-left': isOnLeft && isExperienceVisible, 'animate-fade-in-right': !isOnLeft && isExperienceVisible, 'lg:-mt-40': props.index !== 0 }"
  >
    <div class="flex w-full justify-center" :class="{'flex-row lg:pr-[50%]': isOnLeft, 'flex-row-reverse lg:pl-[50%]': !isOnLeft}">
      <div class="group w-11/12 lg:w-[90%] p-4 bg-white border-2 border-primary shadow-primary hover:shadow-custom-shadow-primary duration-150 hover:-translate-y-1.5">
        <time class="mb-1 text-sm font-normal leading-none text-gray-400"> {{ experience.period }} </time>
        <h3 class="text-lg font-semibold text-gray-900">{{ experience.role }}</h3>
        <img v-if="experience.company_img" class="w-10 my-1" :src="experience.company_img" :alt="experience.company" />
        <span v-else class="text-base font-semibold" :class="{'text-green-800': (experience.company === 'Occitaline')}">{{ experience.company }}</span>
        <p class="text-base font-normal text-gray-500">{{ experience.location }}</p>
        <ul class="mt-2 text-gray-700 list-disc list-inside flex flex-col gap-2">
          <li v-for="achievement in experience.keyAchievements" :key="achievement" v-html="achievement"></li>
        </ul>


        <div class="opacity-0 max-h-0 transition-all duration-700" :class="{ 'opacity-100 max-h-lvh': isAllVisible }">

          <div class="flex flex-row justify-center items-center my-5">
            <div class="block absolute transform w-10 mx-auto border-2 border-primary transition-all duration-700" :class="{'w-60': isAllVisible}"></div>
          </div>

          <ul class="mt-2 list-disc list-inside flex flex-col gap-2">

            <li
                v-for="detail in experience.moreDetails"
                :key="detail"
                class="opacity-0 transition-all duration-700"
                :class="{'opacity-100': isAllVisible}"
                :style="isAllVisible ? `transition-delay: ${100 * (experience.moreDetails.indexOf(detail) + 1)}ms` : ''"
                v-html="detail"
            ></li>
          </ul>

          <div class="text-right">
            <button v-if="isAllVisible" @click="isAllVisible = !isAllVisible" class="mt-2 text-secondary font-semibold duration-150 group-hover:border-b-2 group-hover:border-secondary hover:text-primary hover:border-primary hover:-translate-y-1.5">
              Show Less
            </button>
          </div>

        </div>

        <div v-if="experience.moreDetails && experience.moreDetails.length > 0" class="text-right">
          <button v-if="!isAllVisible" @click="isAllVisible = !isAllVisible" class="text-secondary font-semibold duration-150 group-hover:border-b-2 group-hover:border-secondary hover:text-primary hover:border-primary hover:-translate-y-1.5">
            Show More
          </button>
        </div>

      </div>
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

type Props = {
  index: number;
  experience: Experience;
}

const props: Props = defineProps<Props>();

const isAllVisible = ref(false);

const isOnLeft = computed(() => {
  return props.index % 2 === 0
});

const experienceDiv = ref<HTMLDivElement | null>(null);
const isExperienceVisible = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        isExperienceVisible.value = entry.isIntersecting;
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
