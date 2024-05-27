<template>
  <section class="container mx-auto max-w-full lg:w-3/5 lg:h-screen pt-40 mb-20 text-gray-700">
    <div class="flex flex-col gap-20 justify-between items-center">

      <div class="flex flex-col lg:flex-row-reverse gap-20 lg:gap-20 items-center">
        <div class="inline-block rounded-full overflow-hidden border-4 border-gray-700 w-80 lg:w-96 duration-150 lg:duration-700 hover:w-96 hover:rotate-45 hover:lg:w-full">
          <img src="/img/me_aurora.png" alt="Quentin Aslan" class="w-full h-full object-cover aspect-square">
        </div>
        <div class="flex flex-col text-center lg:text-left gap-2 w-4/5">
          <h1 class="text-6xl font-bold">Software Engineer <span class="wave">👋</span></h1>
          <p class="mt-2 text-xl text-gray-600 leading-8">Hi, I'm Quentin Aslan. A passionate Full-Stack Developer based in Montreal, Canada. 📍</p><p></p>
        </div>
      </div>
      <TechStack />
    </div>
  </section>
</template>
<script setup lang="ts">
</script>
