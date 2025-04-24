import { UAParser } from 'ua-parser-js'
import { InsertMetricsPageViewCounterUseCase } from '~/domains/metrics/insert-metrics-page-view-counter.use-case'
import { MetricsRepositoryNuxt } from '~/domains/metrics/adapters/metrics.repository.nuxt'

export default defineNuxtRouteMiddleware((to) => {
  if (import.meta.client) {
    const { browser, device } = UAParser(navigator.userAgent)
    const agent = device?.type === 'mobile' ? 'mobile' : browser?.name?.toLowerCase() || 'unknown'
    const country = 'FR'
    const referer = document.referrer || 'direct'

    const insertMetricsPageViewCounterUseCase = new InsertMetricsPageViewCounterUseCase(new MetricsRepositoryNuxt())
    insertMetricsPageViewCounterUseCase.execute({
      path: to.fullPath,
      referer,
      agent,
      country,
    })
  }
})
