import type { PageViewCounterLabels } from '~/domains/metrics/entities/page-view-counter-labels'

export interface MetricsRepository {
  insertPageViewCounter(labels: PageViewCounterLabels): Promise<void>
}
