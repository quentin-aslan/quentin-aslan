## The context

Interrègne is an online review of theory, history and criticism, founded in September 2026 by Aurélien B. and Gabriel R.-M. Its first site ran on Next.js, the Directus CMS and Vercel. The founders wanted to publish their articles without asking a developer each time, and Aurélien had drawn a mockup of the new site.

## My role

I built it alone and pro bono, for a friend: technical choices, development, content migration, hosting and the editors' guide. The visual design is the founders' mockup.

## What I built

- One Next.js 16 app that serves both the public site and the Payload 3 back office, on SQLite. There is no separate CMS to host and no internal API between the two.
- The public site, ported from the mockup: home page, sections, articles, authors, dossiers, themes, keywords, index, server-side search, RSS, and light and dark themes. A Playwright and pixelmatch harness compared each page with the mockup.
- A French back office with four roles: admin, editor, author (own articles only) and contributor (drafts only). An article cannot be published without a standfirst, a cover, a theme, an author and a section.
- An editor where typing "/" adds a footnote, a link to another article, a quote, an image or a video. Scheduled publishing runs as a server job every minute.
- A migration script from Directus: 24 articles with their images, 6 sections, 6 dossiers and the static pages.
- Hosting in a Docker container on a VPS, behind Cloudflare and Caddy. GitHub Actions builds the image and deploys it over an SSH key that can only run the deploy script.
- Nightly backups of the database and images to Cloudflare R2, on the review's own account, with a restore procedure tested end to end.
- An illustrated guide for the editors.

## Results

- The site has been live on interregne.com since 6 November 2026, with the articles of the previous site.
- The editors write, schedule and publish their articles themselves.

## What I learned

Building the Docker image on the VPS ran it out of memory. The image is now built in CI, and the server only loads it.

The real test data of an editorial site is a long article pasted from Word. The first one hit a 40,000-character limit, which I removed the same day.
