import { marked } from 'marked'
import profile from '~~/content/profile.json'

const OG_LOCALE: Record<Lang, string> = { en: 'en_US', fr: 'fr_FR', es: 'es_ES' }
const PERSON_ID = `${profile.person.url}/#person`
const REDIRECT = `if(!document.referrer.startsWith(location.origin)){const l=navigator.languages.map(x=>x.slice(0,2)).find(x=>['en','fr','es'].includes(x));if(l&&l!=='en')location.replace('/'+l+(location.pathname==='/'?'':location.pathname)+location.search+location.hash)}`

// Bundled at build time; pages are prerendered, so the HTML ships and the Markdown never does.
const markdown = import.meta.glob<string>('../../content/**/*.md', { query: '?raw', import: 'default', eager: true })

/** `content/<path>.md` as trusted first-party HTML; `tabindex` lets keyboard users scroll code blocks. */
export function renderMarkdown(path: string) {
  const source = markdown[`../../content/${path}.md`]
  if (source === undefined) throw new Error(`Missing content/${path}.md`)
  return marked.parse(source, { async: false }).replaceAll('<pre>', '<pre tabindex="0" role="region" aria-label="Code">')
}

export function useSite() {
  const route = useRoute()
  const lang = (route.params.lang || route.meta.lang || 'en') as Lang
  return { lang, profile, t: profile.ui[lang], to: (path?: string) => localePath(lang, path) }
}

export function personLd(lang: Lang) {
  const { person, home, languages } = profile
  return {
    '@type': 'Person',
    '@id': PERSON_ID,
    'name': person.name,
    'jobTitle': home[lang].title,
    'description': home[lang].metaDescription,
    'url': `${person.url}/`,
    'email': `mailto:${person.email}`,
    'homeLocation': { '@type': 'Place', 'name': `${person.city}, Spain` },
    'image': person.url + person.photo,
    'sameAs': [person.linkedin, person.github],
    'alumniOf': { '@type': 'CollegeOrUniversity', 'name': person.alumniOf },
    'knowsLanguage': languages.map(l => l.code),
    'knowsAbout': person.knowsAbout,
  }
}

export const authorLd = { '@type': 'Person', '@id': PERSON_ID, 'name': profile.person.name, 'url': `${profile.person.url}/` }

export function breadcrumbLd(items: { name: string, path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, i) => ({
      '@type': 'ListItem', 'position': i + 1, 'name': item.name, 'item': profile.person.url + item.path,
    })),
  }
}

interface SeoInput {
  title: string
  description: string
  /** Path without the language prefix, e.g. `/work/gls`. */
  path: string
  image?: string
  imageAlt?: string
  type?: 'website' | 'article'
  jsonLd?: object[]
}

/** Title, description, canonical, hreflang, Open Graph and JSON-LD for one page. */
export function useSeo(input: SeoInput) {
  const { lang } = useSite()
  const translated = useRoute().meta.translated !== false
  const site = profile.person.url
  const url = site + (translated ? localePath(lang, input.path) : input.path)
  const others = translated ? LANGS : []

  useHead({
    htmlAttrs: { lang },
    title: input.title,
    link: [
      { rel: 'canonical', href: url },
      ...others.map(l => ({ rel: 'alternate' as const, hreflang: l, href: site + localePath(l, input.path) })),
      ...(translated ? [{ rel: 'alternate' as const, hreflang: 'x-default', href: site + input.path }] : []),
    ],
    script: [
      ...(input.jsonLd?.length
        ? [{ type: 'application/ld+json' as const, innerHTML: JSON.stringify({ '@context': 'https://schema.org', '@graph': input.jsonLd }) }]
        : []),
      // English pages send visitors arriving from outside to their browser's language.
      // Links inside the site never redirect, so a manual choice sticks without storage.
      ...(lang === 'en' && translated ? [{ innerHTML: REDIRECT }] : []),
    ],
  })
  useSeoMeta({
    description: input.description,
    ogTitle: input.title,
    ogDescription: input.description,
    ogType: input.type ?? 'website',
    ogUrl: url,
    ogImage: { url: site + (input.image ?? `/og/${lang}.png`), width: 1200, height: 630 },
    ogImageAlt: input.imageAlt ?? `${profile.person.name}, ${profile.home[lang].title}`,
    ogLocale: OG_LOCALE[lang],
    ogLocaleAlternate: translated ? others.filter(l => l !== lang).map(l => OG_LOCALE[l]) : undefined,
    ogSiteName: profile.person.name,
    twitterCard: 'summary_large_image',
  })
}

const formatMonth = (ym: string | null, lang: Lang) => ym
  ? new Date(`${ym}-01T00:00:00Z`).toLocaleDateString(lang, { month: 'short', year: 'numeric', timeZone: 'UTC' })
  : profile.ui[lang].present

/** "Sep 2022 – May 2024", or a single month when a job started and ended in it. */
export const formatPeriod = (start: string, end: string | null, lang: Lang) =>
  start === end ? formatMonth(start, lang) : `${formatMonth(start, lang)} – ${formatMonth(end, lang)}`
