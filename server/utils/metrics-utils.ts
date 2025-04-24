import { collectDefaultMetrics, Registry, Counter } from 'prom-client'

interface PageViewCounterLabels {
  path: string
  referer?: string
  agent?: string
  country?: string
}

class MetricsService {
  private pageViewCounter: Counter<string>

  private registry: Registry

  constructor() {
    const ADD_DEFAULT_METRICS_TO_REGISTERY = false
    this.registry = new Registry()

    collectDefaultMetrics((ADD_DEFAULT_METRICS_TO_REGISTERY) ? { register: this.registry } : {})

    this.pageViewCounter = new Counter({
      name: 'page_view_count',
      help: 'Compte le nombre de fois qu\'une page est affiché',
      labelNames: [
        'path',
        'referer',
        'agent',
        'country',
      ],
      registers: [this.registry],
    })
  }

  setPageViewCounter(labels: PageViewCounterLabels) {
    this.pageViewCounter.inc({
      path: labels.path,
      referer: labels.referer ?? 'unknown',
      agent: labels.agent ?? 'unknown',
      country: labels.country ?? 'unknown',
    }, 1)
  }

  async getMetrics() {
    return this.registry.metrics()
  }
}

// Singleton
const metricsService = new MetricsService()
export default metricsService
