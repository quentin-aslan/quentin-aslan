import metricsService from '~/server/utils/metrics-utils'

export default defineEventHandler(async (event) => {
  const { path, agent, country, referer }: { path: string
    referer?: string
    agent?: string
    country?: string
  } = await readBody(event)

  metricsService.setPageViewCounter({
    path,
    agent,
    country,
    referer,
  })
})
