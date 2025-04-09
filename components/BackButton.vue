<template>
  <button
    v-if="showButton"
    class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-primary text-primary
           hover:bg-primary hover:text-white transition duration-200"
    @click="goBack"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M15 19l-7-7 7-7"
      />
    </svg>
    Back
  </button>
</template>

<script setup lang="ts">
const showButton = ref(false)
const router = useRouter()

// TOOD: A REVOIR CAR IL FAUT STORE L'ETAT DE L'UTILISATEUR (DANS UN COMPOSABLE PAR EXEMPLE)

onMounted(() => {
  const referrer = document.referrer
  const currentOrigin = window.location.origin

  // Only show the button if the referrer is from the same origin
  if (referrer && referrer.startsWith(currentOrigin)) {
    showButton.value = true
  }
})

const goBack = () => {
  router.back()
}
</script>
