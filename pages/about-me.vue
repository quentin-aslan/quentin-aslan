<template>
  <main class="pt-14">
    <TheAboutMe />
  </main>
</template>

<script lang="ts" setup>
import { InsertMetricsPageViewCounterUseCase } from '~/domains/metrics/insert-metrics-page-view-counter.use-case'
import { MetricsRepositoryNuxt } from '~/domains/metrics/adapters/metrics.repository.nuxt'

const route = useRoute()
useAsyncData('metric', async () => {
  const insertMetricsHttpCounterUseCase = new InsertMetricsPageViewCounterUseCase(new MetricsRepositoryNuxt())
  await insertMetricsHttpCounterUseCase.execute({ path: route.fullPath })
})
</script>
