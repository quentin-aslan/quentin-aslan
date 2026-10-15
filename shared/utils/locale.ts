export const LANGS = ['en', 'fr', 'es'] as const
export type Lang = typeof LANGS[number]

/** `/work/gls` in French is `/fr/work/gls`; English has no prefix. */
export const localePath = (lang: Lang, path = '/') =>
  (lang === 'en' ? '' : `/${lang}`) + (path === '/' && lang !== 'en' ? '' : path)
