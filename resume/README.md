# Resume

Quentin Aslan's resume: one content source, one PDF per target market.

## Versions

| Version | Status | Language | Paper | Length | Photo | Style |
|---|---|---|---|---|---|---|
| `na` (USA / Canada) | 🚧 next | EN | Letter | 1 page (2 max) | ❌ | Plain, 1 column, black text |
| `fr` (France) | 🚧 next | FR | A4 | 1 page (2 max) | ⚖️ optional | Designed, text must parse in order |
| `uk` (UK / Europe EN) | ⏳ later | EN (UK spelling) | A4 | 2 pages max | ❌ | `na` style on A4 |
| `de` (Germany) | 💤 maybe | Same as posting | A4 | ~2 pages | ⚖️ optional (common) | Tabular, dated + signed |

```
resume/
  README.md      # this file: specs per market
  (data + templates + build: to come)
```

The website already serves PDFs from `../public/resume/`.

## Rules for every version

| Rule | Source |
|---|---|
| Submit as PDF | Inc. (Google recruiters), BA, Tech Interview Handbook |
| Experience before education, newest first | Inc. (Google recruiters), CDG40 |
| Bullets: "Accomplished [X] as measured by [Y], by doing [Z]" | Inc. (Laszlo Bock, Google) |
| Put the GitHub link with contact info; list languages prominently | Inc. (Google recruiters) |
| No side columns, headers or footers for key text: parsers detach them | atsverification |
| Contract roles: title + ", Contractor"; group small gigs under "Self-Employed" | Freesumes |

## USA / Canada (`na`)

| Rule | Value | Source |
|---|---|---|
| Paper | Letter, 8.5 × 11 in (216 × 279 mm) | Jake's Resume (`letterpaper`), Novoresume CA, UWO |
| Length | 1 page; 2 when senior (8+ yrs) with substantive content | Inc. (Google), techinterview.org, Novoresume CA |
| Length, Canada | "Limit your resume to two pages" | 🏛 Job Bank (Gov. of Canada) |
| Photo | No. "Not the norm in Canada", "can actually lower your chances" | 🏛 Job Bank |
| Photo, US | No. EEOC: photos could be used as evidence in a discrimination claim; some recruiters skip resumes that include one | The Muse (EEOC statement) |
| Age, marital status, SIN | Leave out | 🏛 Job Bank |
| Location | City + state or province (`Georgetown, TX`) | Jake's Resume, WelcomeAide, Novoresume CA |
| Dates | `Aug. 2018 – May 2021` (US); `Jan 2024` style is common in Canada | Jake's Resume, resumegeni |
| Objective | Skip it | Inc. (Google) |
| Work authorization | One line under contact info, stating actual status | f1jobs, atsverification |
| Spelling, Canada | Canadian: colour, centre, cheque | Novoresume CA |
| Québec | Same language as the posting; Letter; no photo or age; 2–3 pages common | Novoresume CA, ImmigrantQuébec, resumegeni |

⚠️ Conflicts:
- Work authorization: Novoresume CA says leave immigration status off; f1jobs and atsverification say add a status line.
- Dates in Canada: Novoresume CA says `mm/yyyy`; resumegeni says `MMM YYYY`. We use `MMM YYYY` everywhere because it is unambiguous.

## France (`fr`)

| Rule | Value | Source |
|---|---|---|
| Paper | A4 | CDG40 |
| Length | "Sur 1 page, 2 pages maximum" | CDG40 |
| Length (stricter view) | 1 page; 2 only for 15+ years of experience | resumegeni FR |
| Photo | Optional; it "personnalise le CV, le rend plus attractif" | Apecita, CDG40 |
| Photo (counter-view) | Omit for tech startups, international firms and English postings | resumegeni FR |
| Age, marital status | Optional, only if professionally relevant | Apecita |
| Law | Employers may only ask for information with "un lien direct et nécessaire avec l'emploi proposé" | 🏛 Code du travail L1221-6 |
| Title | A job title at the top is required | CDG40, Apecita |
| Content | Experience is about 2/3 of the CV; quantify results | Apecita |
| Languages | Concrete evidence (tests, immersion), not "bon niveau" | Apecita |

⚠️ Conflict: CDG40 recommends stating your age; Apecita and resumegeni FR say leave it off. We leave it off.

## UK / Europe EN (`uk`)

| Rule | Value | Source |
|---|---|---|
| Paper | A4 | Prospects, Toptal |
| Length | "No longer than two A4 pages" | Prospects (Univ. of Chester careers) |
| Photo | Only for acting or modelling jobs | Prospects |
| Personal details | Avoid any that "could lead to discrimination" | Toptal |
| Date of birth | Leave out | Prospects |
| Opening | A personal profile, focused on the target sector | Prospects |
| Spelling | British: organised, centre, programme | Toptal |
| Layout | Single column; two-column layouts confuse ATS (Workday, Greenhouse, Taleo) | GPTPrompts |
| Fonts | Body 10–12 pt, headings 14–16 pt, 2.5 cm margins | Prospects |

## Germany (`de`)

| Rule | Value | Source |
|---|---|---|
| Paper | DIN A4 | 🏛 BA |
| Layout | "Tabellarisch aufbauen", no gaps in the timeline | 🏛 BA |
| Ending | "Datum und Unterschrift" | 🏛 BA |
| Photo | "evtl. mit Foto": optional; top right if used | 🏛 BA |
| Photo, tech | "Still common, though not mandatory in tech"; less common at international startups | JobRise |
| Date of birth | DD.MM.YYYY in the personal data | Expatrio |
| Leave out | Religion, political party, health, parents' details | 🏛 BA |
| Language | Same as the job posting | Expatrio |
| Length | About two pages | Expatrio, JobRise |

## Sources (all opened and read on 2026-10-09)

🏛 = official or government source. The other sources are guides, mostly commercial.

**Official**
- 🏛 [Job Bank: write a good resume (Gov. of Canada)](https://www.jobbank.gc.ca/findajob/resources/write-good-resume)
- 🏛 [Code du travail L1221-6](https://code.travail.gouv.fr/code-du-travail/l1221-6)
- 🏛 [BA (Bundesagentur für Arbeit): "Das kommt an!", sheet 25.1](https://a.storyblok.com/f/85081/x/b6a461a6a9/25-1_ib_das_kommt_an.pdf)
- 🏛 [CDG40: rédiger un CV](https://cdg40.fr/documents/emploi/rediger_un_cv.pdf)

**Templates and recruiting**
- Jake's Resume: [`resume.tex`](https://github.com/jakegut/resume/blob/master/resume.tex) · [preview](https://github.com/jakegut/resume/raw/master/resume.png) · [Overleaf](https://www.overleaf.com/latex/templates/jakes-resume/syzfjbzwjncs)
- [Inc.: Google's X-Y-Z formula (via UT Austin)](https://law.utexas.edu/wp-content/uploads/sites/44/2020/09/Google-Recruiters-Say-Using-the-X-Y-Z-Formula-on-Your-Resume-Will-Improve-Your-Odds-of-Getting-Hired-at-Google-_-Inc.com_.pdf)
- [Pragmatic Engineer resume template](https://blog.pragmaticengineer.com/the-pragmatic-engineers-resume-template/)
- [Tech Interview Handbook](https://www.techinterviewhandbook.org/resume/)
- [techinterview.org: 1 vs 2 pages](https://www.techinterview.org/post/3233474607/engineering-resume-one-page-vs-two/)
- [The Muse: resume photos (EEOC)](https://www.themuse.com/advice/resume-picture)
- [Freesumes: contract work](https://www.freesumes.com/how-to-list-contract-work-on-a-resume-tips-and-examples/)
- Work authorization: [f1jobs](https://www.f1jobs.io/resources/blog/work-authorization-line-resume-f1-opt-h1b) · [atsverification](https://atsverification.com/blog/work-authorization-resume-sponsorship/)

**By country**
- Canada: [Novoresume CA](https://novoresume.com/career-blog/canada-resume-format) · [UWO Engineering](https://eng.uwo.ca/coop/students/career_planning/resume-tips/professional-format-and-appearance.html) · [WelcomeAide](https://welcomeaide.com/vi/blog/canadian-resume-format-guide-newcomers) · [resumegeni CA](https://resumegeni.com/blog/how-to-write-resume-canada) · [ImmigrantQuébec](https://immigrantquebec.com/fr/reussir-votre-installation/emploi/votre-recherche-d-emploi/cv-et-lettre-de-motivation/)
- France: [Apecita, sheet 07 (agri/agro job board)](https://www.apecita.com/uploads/advice_card/5c69b486d5b1b421072142.pdf) · [resumegeni FR](https://resumegeni.com/fr/blog/how-to-write-resume-france)
- UK: [Prospects](https://www.prospects.ac.uk/careers-advice/cvs-and-cover-letters/how-to-write-a-cv) · [Toptal](https://www.toptal.com/resume/resume-templates/british) · [GPTPrompts](https://gptprompts.ai/cv-format-uk)
- Germany: [Expatrio](https://www.expatrio.com/about-germany/german-cv-guide?hsLang=en) · [JobRise DE](https://jobrise.io/en/blog/germany-software-engineer-application-guide-2026/)

**Not reachable:** APEC (403), France Travail (404), make-it-in-germany (bot wall), EEOC website (no photo mention found).
