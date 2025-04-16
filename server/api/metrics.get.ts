import metricsService from '~/server/utils/metrics-utils'

export default defineEventHandler(async (event) => {
  setHeader(event, 'Content-Type', 'text/plain; charset=utf-8')
  return await metricsService.getMetrics()
})
