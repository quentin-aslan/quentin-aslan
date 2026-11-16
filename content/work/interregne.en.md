## The context

Interrègne is an online review founded in 2026. Its founders wanted to publish without a developer, on a new site built from their mockup.

## What I built

- One Next.js 16 app serving the public site and the Payload 3 back office, on SQLite.
- A French back office: 4 roles, footnotes, quotes and cross-references typed with "/", scheduled publishing.
- Migration from Directus: 24 articles, 6 sections, 6 dossiers.
- Docker on a VPS behind Cloudflare, deployed by GitHub Actions.
- Nightly backups to Cloudflare R2, with a tested restore.

## Results

- Live on interregne.com since 6 November 2026.
- The editors publish on their own.
