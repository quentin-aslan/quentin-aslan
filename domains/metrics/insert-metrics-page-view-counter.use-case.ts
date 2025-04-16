import type { MetricsRepository } from '~/domains/metrics/ports/metrics.repository'
import type { PageViewCounterLabels } from '~/domains/metrics/entities/page-view-counter-labels'

export class InsertMetricsPageViewCounterUseCase {
  constructor(private readonly metricsRepository: MetricsRepository) {
  }

  public async execute(labels: PageViewCounterLabels) {
    await this.metricsRepository.insertPageViewCounter(labels)
  }
}
