<template>
  <footer class="flex flex-col md:flex-row items-center justify-between bg-zinc-700 text-white py-4 px-5 lg:px-20 h-auto md:h-40">
    <div class="flex flex-col md:flex-row items-center gap-2 md:gap-4">
      <span class="text-xs lg:text-lg">Copyright © {{ new Date().getFullYear() }}. All rights are reserved.</span>
      <NuxtLink to="/mentions-legales" class="text-xs lg:text-lg hover:underline">Mentions légales</NuxtLink>
    </div>
    <span class="mt-2 md:mt-0 text-xs lg:text-lg">Developed by <NuxtLink
      to="https://quentinaslan.fr"
      class="font-bold cursor-pointer hover:underline"
    >Quentin Aslan</NuxtLink> 😃</span>
  </footer>
</template>
