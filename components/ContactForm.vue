<template>
  <section
    id="contact"
    class="bg-white"
  >
    <form>
      <div class="flex flex-col text-left gap-5">
        <div>
          <label
            for="email"
            class="block font-medium text-gray-700"
          >Email</label>
          <input
            id="email"
            v-model="email"
            type="email"
            name="email"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
          >
        </div>
        <div>
          <label
            for="message"
            class="block font-medium text-gray-700"
          >Message</label>
          <textarea
            id="message"
            v-model="message"
            name="message"
            rows="4"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
          />
        </div>
      </div>
      <div class="mt-6">
        <button
          type="submit"
          class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          Send
        </button>
      </div>
    </form>
  </section>
</template>

<script setup lang="ts">
const email = ref('')
const message = ref('')
</script>
