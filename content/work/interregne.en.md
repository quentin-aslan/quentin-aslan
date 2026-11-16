## The context

Interrègne is an online review of geopolitics, human sciences, philosophy and aesthetic criticism, founded in 2026 by a history teacher and an essayist. They had a mockup and a site they could not update themselves. They needed a platform where every author writes, illustrates and publishes on their own.

## The stack

- **Application**: Next.js 16 (App Router, React 19, TypeScript) and Payload 3 in a single process: the public site and the back office share one codebase and one SQLite database, with no internal API between them.
- **Editor**: Lexical, extended with custom blocks for footnotes, cross-references to other articles, quotes with sources, pull quotes, images and videos, all inserted with "/".
- **Infrastructure**: Docker on a VPS behind Cloudflare and Caddy, CI/CD with GitHub Actions, nightly backups to Cloudflare R2.

## What I built

- **Public site** ported from the mockup: sections, articles, authors, dossiers, themes, keywords, index, server-side search, RSS, light and dark themes. Pages were checked against the mockup with Playwright and pixelmatch visual diffs.
- **SEO**: canonical URLs, Open Graph, JSON-LD (Organization, Article, Person), sitemap, robots and a title and description on every page.
- **Back office in French** with role-based access control: admin, editor, author and contributor. Server-side validation blocks publishing an article without a standfirst, a cover, a theme, an author or a section.
- **Scheduled publishing** with Payload jobs, versions, preview and autosave.
- **Images**: original kept, WebP derivatives generated with sharp.
- **Migration** from Directus and PostgreSQL: 24 articles with their images, 6 sections, 6 dossiers and the static pages.
- **Deploys**: GitHub Actions builds the Docker image and ships it over an SSH key restricted to the deploy script. The deploy fails if the site does not answer after restart.
- **Backups**: database and media to Cloudflare R2 every night, with a disaster recovery procedure tested end to end.

## Results

- Live on interregne.com since 6 November 2026, with all the articles of the previous site.
- The editors write, schedule and publish on their own, without a developer.
