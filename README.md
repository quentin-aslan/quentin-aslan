# quentinaslan.com

Source of [quentinaslan.com](https://quentinaslan.com), the portfolio of Quentin Aslan, senior full-stack engineer. English, French and Spanish.

## Principles

- **HTML first.** Every page is prerendered at build time and ships **no JavaScript bundle**. Search engines, AI assistants and screen readers get the full content in the first response.
- **One content file.** Everything shown on the site lives in [`content/profile.json`](content/profile.json), in three languages. Long texts (case studies, the blog post) are Markdown files next to it.
- **Accessible by construction.** WCAG 2.2 AA: landmarks, one `h1` per page, skip link, visible focus, 24 px targets, AA contrast, `lang` on every page and quote, no content hidden behind animation.
- **Right language.** One inline line on translated English pages sends visitors arriving from outside to `/fr` or `/es` according to their browser languages. Links inside the site never redirect, so a manual choice sticks without a cookie. Crawlers stay on English, the `x-default`. It is the only executable script on the site.
- **As few moving parts as possible.** Two runtime dependencies (`nuxt`, `marked`) and Wrangler for deploys, plain CSS with custom properties, three self-hosted fonts (Instrument Serif, Schibsted Grotesk, JetBrains Mono).

## Stack

| Layer | Choice |
|---|---|
| Framework | [Nuxt 4](https://nuxt.com) with `features.noScripts`, `nuxt generate` |
| Content | `content/profile.json` + `content/**/*.md`, rendered with `marked` at build time |
| Styles | `app/assets/main.css` (no framework): editorial serif display, CSS-only motion (`animation-timeline: view()`), disabled under `prefers-reduced-motion` |
| Hosting | Cloudflare Workers, static assets only ([`wrangler.jsonc`](wrangler.jsonc)) |
| SEO | canonical, `hreflang` (en, fr, es, x-default), Open Graph, JSON-LD (`ProfilePage`, `Person`, `Article`, `BreadcrumbList`), [`sitemap.xml`](server/routes/sitemap.xml.ts), [`robots.txt`](public/robots.txt), [`llms.txt`](server/routes/llms.txt.ts) |

## Structure

```
content/
  profile.json            all data and UI strings, in en / fr / es
  work/<slug>.<lang>.md   case studies
  letters/<name>.<lang>.md recommendation letters (full text)
  blog/<slug>.<lang>.md   articles
app/
  app.vue                 header + page + footer
  pages/[[lang]]/index.vue          home: /, /fr, /es
  pages/[[lang]]/work/[slug].vue    case studies
  pages/blog/[slug].vue             articles (English only)
  pages/mentions-legales.vue        legal notice (French law)
  error.vue               404 page
  composables/useSite.ts  current language, UI strings, SEO and JSON-LD helpers
  components/             SiteHeader, SiteFooter
  assets/main.css
shared/utils/locale.ts    languages and localized paths (app and server)
server/routes/            sitemap.xml and llms.txt, prerendered
public/                   images, fonts, CVs, letters (PDF), robots.txt, _redirects, _headers
```

## Commands

```sh
npm install
npm run dev        # http://localhost:3000
npm run preview    # production build served like Cloudflare (redirects, 404, clean URLs)
npm run deploy     # build and deploy with Wrangler
```

Production deploys run from the Git integration of Cloudflare Workers (build command `npm run generate`, deploy command `npx wrangler deploy`), so the repository holds no deploy secret.

## Adding a case study

1. Add an entry to `caseStudies` in `content/profile.json` (slug, title, description, image, `ogImage`). Give it a `panel` to show it as a large panel on the home page, and set `caseStudy: "<slug>"` on the matching `work` or `sideProjects` entry.
2. Write `content/work/<slug>.en.md`, `.fr.md` and `.es.md`.
3. Run `npm run generate`. The page, its three URLs, `hreflang` links, the sitemap and `llms.txt` follow.

No Vue code is needed. A broken internal link fails the build.

## How AI was used

This site was designed and built with AI agents (Claude Code), with a human deciding every step:

- **Research.** Retrieval agents gathered sources on portfolio patterns, how clients and recruiters scan pages, web credibility research, multilingual SEO, structured data and AI crawlers. Every claim was logged with its URL and date, and a separate agent checked it adversarially before it reached a decision.
- **Architecture.** An architect agent reviewed the plan against the installed Nuxt version and cut what was not needed (CMS, client-side rendering, CSS framework, analytics script).
- **Review.** Persona agents (client, recruiters in three markets, an AI assistant) and code, accessibility and SEO reviewers checked each iteration against the running site.
- **Content.** Every fact comes from a single curated career profile that also feeds the CVs and other profiles; agents may not add a claim that is not in it.

## License

Code: [MIT](LICENSE). Content, photos, logos and CVs are not covered by the license: all rights reserved. Company logos belong to their owners. Flags come from [flag-icons](https://github.com/lipis/flag-icons) (MIT).
