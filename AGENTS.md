# Working on this repository (humans and AI agents)

Read [README.md](README.md) first.

## Rules

- **No client JavaScript.** `features.noScripts` is on; the only executable script is the one-line language redirect on translated English pages. Anything interactive is done with HTML and CSS, or not at all.
- **Content only in `content/`.** Never hard-code visible text in a component; add it to `profile.json` for all three languages (the French-only legal page and the 404 page are the exceptions).
- **Facts are curated upstream.** `profile.json` is a filtered copy of a private career profile. Do not add or reword a claim (role, date, figure, client) without the owner's approval. Figures that belong to a client are labelled as the client's.
- **Three languages, always.** A page that exists in one language exists in all three, or is marked `definePageMeta({ translated: false })`.
- **Writing style.** No emojis. Plain, specific sentences; one claim per sentence, no marketing superlatives. Spanish is neutral international Spanish.
- **Accessibility.** Keep WCAG 2.2 AA: text contrast 4.5:1, visible focus, targets at least 24 px, meaningful `alt`, `lang` on quotes in another language.
- **Simplicity.** Before adding a dependency, a file or an abstraction, check whether HTML, CSS, Nuxt or the existing code already does it.

## Before you finish

`npm run typecheck` and `npm run generate` must pass (the build fails on broken internal links), then check the page with `npm run preview`.
