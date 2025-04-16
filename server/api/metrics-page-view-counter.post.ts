import metricsService from '~/server/utils/metrics-utils'

export default defineEventHandler(async (event) => {
  const { path }: { path: string } = await readBody(event)

  metricsService.setPageViewCounter({
    path,
  })
})
