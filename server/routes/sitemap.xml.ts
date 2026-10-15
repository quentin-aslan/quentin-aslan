import profile from '~~/content/profile.json'

const { caseStudies, blog } = profile

const site = profile.person.url

const url = (path: string, translated: boolean, lastmod = profile.updated) => {
  const alternates = translated
    ? [...LANGS.map(l => `<xhtml:link rel="alternate" hreflang="${l}" href="${site}${localePath(l, path)}"/>`),
        `<xhtml:link rel="alternate" hreflang="x-default" href="${site}${path}"/>`]
    : []
  return (translated ? LANGS : ['en' as const]).map(l =>
    `<url><loc>${site}${localePath(l, path)}</loc><lastmod>${lastmod}</lastmod>${alternates.join('')}</url>`)
}

export default defineEventHandler((event) => {
  setHeader(event, 'content-type', 'application/xml; charset=utf-8')
  const urls = [
    ...url('/', true),
    ...caseStudies.flatMap(w => url(`/work/${w.slug}`, true)),
    ...blog.flatMap(b => url(`/blog/${b.slug}`, false, b.date)),
  ]
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`
})
