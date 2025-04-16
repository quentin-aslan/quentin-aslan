import type { MetricsRepository } from '~/domains/metrics/ports/metrics.repository'
import type { PageViewCounterLabels } from '~/domains/metrics/entities/page-view-counter-labels'

export class MetricsRepositoryNuxt implements MetricsRepository {
  public async insertPageViewCounter(labels: PageViewCounterLabels): Promise<void> {
    useFetch('/api/metrics-page-view-counter', {
      method: 'POST',
      body: labels,
    })
  }
}
