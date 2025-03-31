<template>
  <footer class="flex items-center justify-between bg-zinc-700 text-white py-4 px-5  lg:px-20 h-40">
    <span class="max-w-[40%] lg:max-w-full text-xs lg:text-lg">{{ $t('footer.copyright', { year: new Date().getFullYear() }) }}</span>
    <span class="max-w-[40%] lg:max-w-full text-xs lg:text-lg">{{ $t('footer.developedBy') }}</span>
  </footer>
</template>
