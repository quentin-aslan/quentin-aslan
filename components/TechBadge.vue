<template>
  <div
    class="flex items-center gap-2 border border-primary rounded-full px-3 py-1 bg-gray-50
           hover:bg-primary hover:text-white transition duration-200 ease-in-out cursor-default"
  >
    <NuxtImg
      v-if="imgSrc"
      :src="imgSrc"
      :alt="label"
      class="w-5 h-5 object-contain"
    />
    <span>{{ label }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string
  imgSrc?: string
}>()
</script>
