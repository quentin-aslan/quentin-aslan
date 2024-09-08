<template>
  <div class="flex flex-col gap-2 items-center duration-150 hover:-translate-y-1.5">
    <NuxtImg :src="`/tech-stack/${icon}.svg`" :alt="label" class="w-16" />
    <span v-if="isLabelDisplayed" class="text-xs lg:text-base">{{ label }}</span>
  </div>
</template>

<script setup lang="ts">
type props = {
  icon: string,
  label: string
  isLabelDisplayed?: boolean
}

const props = defineProps<props>()
</script>