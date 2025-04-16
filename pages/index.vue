<template>
  <main class="max-w-full mx-auto flex flex-col">
    <BackgroundAurora />
    <TheHero />
    <TheMainPageProjectList />
    <TheTechStack />
    <TheContact />
  </main>
</template>

<script setup lang="ts">
import { MetricsRepositoryNuxt } from '~/domains/metrics/adapters/metrics.repository.nuxt'
import { InsertMetricsPageViewCounterUseCase } from '~/domains/metrics/insert-metrics-page-view-counter.use-case'

const route = useRoute()

useAsyncData('metric', async () => {
  const insertMetricsHttpCounterUseCase = new InsertMetricsPageViewCounterUseCase(new MetricsRepositoryNuxt())
  await insertMetricsHttpCounterUseCase.execute({ path: route.fullPath })
})
</script>
