<script setup lang="ts">
definePageMeta({ validate: route => !route.params.lang || LANGS.includes(route.params.lang as Lang) && route.params.lang !== 'en' })
// Accessibility points hold inline <strong> from first-party content, so v-html is safe.

const { lang, profile, t, to } = useSite()
const home = profile.home[lang]
const { person } = profile
type Quote = typeof profile.testimonials[number]
// Railora, GLS and Bell get a large panel; Occitaline keeps its link in Experience, side projects theirs in Side projects.
const sideSlugs = profile.sideProjects.map(p => p.caseStudy)
const panels = profile.caseStudies.flatMap(c => c.panel && c.slug !== 'occitaline' && !sideSlugs.includes(c.slug) ? [{ ...c, panel: c.panel }] : [])
const sideProjects = [...profile.sideProjects].sort((a, b) => b.year - a.year)
const whatsapp = `https://wa.me/${person.phoneHref.slice(1)}?text=${encodeURIComponent(home.whatsappText)}`
const heroPhoto = profile.about.en.photos[0]!
const heroAlt = profile.about[lang].photos[0]!.alt
const aboutPhotos = profile.about[lang].photos.slice(1)
// Consecutive roles of the same kind are grouped, so freelance missions and employed roles never read as one list.
type Job = typeof profile.work[number]
type Kind = 'own' | 'freelance' | 'employed'
const kindOf = (job: Job): Kind => job.kind.en.startsWith('Freelance') ? 'freelance' : job.kind.en.startsWith('Own') ? 'own' : 'employed'
const groupTitle: Record<Kind, string | null> = { own: null, freelance: t.freelanceGroup, employed: t.employedGroup }
const groups = profile.work.reduce<{ kind: Kind, jobs: Job[] }[]>((acc, job) => {
  const kind = kindOf(job)
  const last = acc.at(-1)
  if (last && last.kind === kind) last.jobs.push(job)
  else acc.push({ kind, jobs: [job] })
  return acc
}, [])
// Smaller copies exported next to the originals (`gls-site-760.webp`).
const variant = (src: string, w: number) => src.replace(/\.webp$/, `-${w}.webp`)
const featuredQuote = profile.testimonials[0]!
const quotes = profile.testimonials.slice(1)
// Quotes show in the page language when a translation exists, otherwise in their original language.
const translated = (q: Quote) => q.lang !== lang && !!q.translation
const quoteText = (q: Quote) => translated(q) ? q.translation![lang as 'en' | 'es'] : q.text
const quoteLang = (q: Quote) => translated(q) ? lang : q.lang

useSeo({
  title: home.metaTitle,
  description: home.metaDescription,
  path: '/',
  jsonLd: [{
    '@type': 'ProfilePage',
    'url': person.url + to('/'),
    'inLanguage': lang,
    'dateModified': profile.updated,
    'mainEntity': personLd(lang),
  }, {
    '@type': 'WebSite',
    '@id': `${person.url}/#website`,
    'name': person.name,
    'url': `${person.url}/`,
    'inLanguage': ['en', 'fr', 'es'],
  }],
})
</script>

<template>
  <main id="main" tabindex="-1">
    <section class="hero" aria-labelledby="hero-title">
      <div class="wrap hero-grid">
        <div class="hero-copy">
          <h1 id="hero-title">
            <span class="who"><strong>{{ person.name }}</strong> · {{ home.title }}</span>
            {{ home.claim }}
          </h1>
          <p class="lead">{{ home.intro }}</p>
          <p class="availability">{{ home.availability }}</p>
          <div class="actions">
            <a class="btn btn-accent" :href="person.cal">{{ home.callCta }} <span aria-hidden="true">→</span></a>
            <a class="btn btn-ghost" :href="whatsapp">{{ home.whatsapp }}</a>
          </div>
          <p class="hero-links">
            <a :href="`mailto:${person.email}`">{{ home.emailCta }}</a> ·
            <a :href="person.linkedin">LinkedIn</a> ·
            <a :href="profile.cv[lang]" download>{{ t.cvPdf }}</a>
          </p>
        </div>
        <div class="hero-photo">
          <img :src="heroPhoto.src" :alt="heroAlt" :width="heroPhoto.w" :height="heroPhoto.h" fetchpriority="high">
        </div>
      </div>
    </section>

    <section class="trust" aria-labelledby="companies-title">
      <div class="wrap">
        <h2 id="companies-title" class="label">{{ t.companies }}</h2>
        <ul class="logos">
          <li v-for="c in profile.companies" :key="c.name">
            <img v-if="c.logo" :src="c.logo" :alt="c.name" :style="{ '--h': `${c.h}px` }" height="32" loading="lazy">
            <span v-else class="wordmark">{{ c.name }}</span>
          </li>
        </ul>
      </div>
    </section>

    <RailoraLive />

    <section id="services" class="section" aria-labelledby="services-title">
      <div class="wrap">
        <h2 id="services-title" class="section-title">{{ home.capabilities.title }}</h2>
        <p class="section-lead">{{ home.capabilities.lead }}</p>
        <ul class="capabilities">
          <li v-for="c in home.capabilities.items" :key="c.domain">
            <p class="eyebrow">{{ c.domain }}</p>
            <h3>{{ c.title }}</h3>
            <p>{{ c.text }}</p>
            <ul class="chips">
              <li v-for="s in c.stack" :key="s">{{ s }}</li>
            </ul>
          </li>
        </ul>
      </div>
    </section>

    <section id="work" class="section" aria-labelledby="featured-title">
      <div class="wrap">
        <h2 id="featured-title" class="section-title">{{ t.featuredTitle }}</h2>
        <article v-for="c in panels" :key="c.slug" class="feature">
          <a class="feature-visual" :href="to(`/work/${c.slug}`)" tabindex="-1" aria-hidden="true">
            <span v-if="c.screens" class="phones">
              <img v-for="s in c.screens" :key="s.src" :src="variant(s.src, 320)" :srcset="`${variant(s.src, 320)} 320w, ${s.src} 500w`" sizes="(max-width: 760px) 28vw, 160px" alt="" width="500" height="1087" loading="lazy">
            </span>
            <img v-else-if="c.image" :src="variant(c.image, 760)" :srcset="`${variant(c.image, 760)} 760w, ${c.image} 1200w`" sizes="(max-width: 760px) 90vw, 560px" alt="" :width="c.imageW ?? undefined" :height="c.imageH ?? undefined" loading="lazy">
          </a>
          <div class="feature-copy">
            <p class="eyebrow">{{ c.panel.eyebrow[lang] }}</p>
            <h3><a :href="to(`/work/${c.slug}`)">{{ c.panel.title[lang] }}</a></h3>
            <p>{{ c.panel.text[lang] }}</p>
            <ul class="chips">
              <li v-for="s in c.panel.stack.split(' · ')" :key="s">{{ s }}</li>
            </ul>
            <a class="link-arrow" :href="to(`/work/${c.slug}`)">{{ t.caseStudy }}<span class="visually-hidden">: {{ c.panel.title[lang] }}</span> <span aria-hidden="true">→</span></a>
          </div>
        </article>
        <p class="proof-line">{{ t.a11yStatement }}</p>
      </div>
    </section>

    <section id="experience" class="section" aria-labelledby="work-title">
      <div class="wrap">
        <h2 id="work-title" class="section-title reveal">{{ t.workTitle }}</h2>
        <div v-for="g in groups" :key="g.jobs[0]!.id" class="exp-group">
          <h3 v-if="groupTitle[g.kind]" class="label">{{ groupTitle[g.kind] }}</h3>
          <ol class="exp">
            <li v-for="job in g.jobs" :key="job.id">
              <details>
                <summary>
                  <time class="when" :datetime="job.start">{{ formatPeriod(job.start, job.end, lang) }}</time>
                  <span class="org">
                    <img :src="job.logo" alt="" width="24" height="24" loading="lazy">
                    {{ job.org }}
                  </span>
                  <span class="role">{{ job.title[lang] }}</span>
                  <span class="where">
                    <img v-if="job.country" class="flag" :src="`/flags/${job.country}.svg`" :alt="profile.countries[job.country as 'fr' | 'ca' | 'nl'][lang]" width="20" height="15">
                    {{ job.place[lang] }}
                  </span>
                </summary>
                <div class="exp-body">
                  <p class="exp-meta">
                    <template v-if="job.role[lang] !== job.title[lang]">{{ job.role[lang] }} · </template>{{ job.kind[lang] }}<span class="exp-place"> · {{ job.place[lang] }}</span>
                  </p>
                  <p>{{ job.summary[lang] }}</p>
                  <ul>
                    <li v-for="b in job.bullets[lang]" :key="b">{{ b }}</li>
                  </ul>
                  <ul class="chips">
                    <li v-for="s in job.stack" :key="s">{{ s }}</li>
                  </ul>
                  <a v-if="job.caseStudy" class="link-arrow" :href="to(`/work/${job.caseStudy}`)">{{ t.caseStudy }}<span class="visually-hidden">: {{ job.org }}</span> <span aria-hidden="true">→</span></a>
                </div>
              </details>
            </li>
          </ol>
        </div>
        <p class="exp-more">
          {{ t.fullHistory }}
          <a :href="profile.cv[lang]" download>{{ t.cvPdf }}</a> ·
          <a :href="person.linkedin">LinkedIn</a>
        </p>
      </div>
    </section>

    <section id="reviews" class="section quotes-band" aria-labelledby="quotes-title">
      <div class="wrap">
        <h2 id="quotes-title" class="section-title reveal">{{ t.testimonialsTitle }}</h2>
        <figure class="quote-featured">
          <blockquote :lang="quoteLang(featuredQuote)">
            <p>{{ quoteText(featuredQuote) }}</p>
          </blockquote>
          <figcaption>
            <span class="quote-by">
              <strong>{{ featuredQuote.name }}</strong>
              <span>{{ featuredQuote.role[lang] }}, {{ featuredQuote.source }}</span>
              <span v-if="translated(featuredQuote)" class="quote-note">{{ t.translatedFromFr }}</span>
            </span>
            <a v-if="featuredQuote.link" class="link-arrow" :href="to(featuredQuote.link)">{{ t.readLetter }} <span aria-hidden="true">→</span></a>
          </figcaption>
        </figure>
        <ul class="quotes">
          <li v-for="q in quotes" :key="q.name">
            <figure>
              <blockquote :lang="quoteLang(q)">
                <p>“{{ quoteText(q) }}”</p>
              </blockquote>
              <figcaption class="quote-by">
                <strong>{{ q.name }}</strong>
                <span>{{ q.role[lang] }}</span>
                <span class="quote-note">{{ t.via }} {{ q.source }}<template v-if="translated(q)"> · {{ t.translatedFromFr }}</template></span>
              </figcaption>
            </figure>
          </li>
        </ul>
      </div>
    </section>

    <section id="builder" class="section" aria-labelledby="builder-title">
      <div class="wrap">
        <h2 id="builder-title" class="section-title reveal">{{ t.sideProjects }}</h2>
        <p class="section-lead">{{ t.builderLead }}</p>
        <ul class="builds">
          <li v-for="p in sideProjects" :key="p.year + p.text.en">
            <p class="eyebrow">{{ p.year }}</p>
            <h3>{{ typeof p.name === 'string' ? p.name : p.name[lang] }}</h3>
            <p>{{ p.text[lang] }}</p>
            <p class="project-links">
              <a v-if="p.caseStudy" class="link-arrow" :href="to(`/work/${p.caseStudy}`)">{{ t.caseStudy }}<span class="visually-hidden">: {{ typeof p.name === 'string' ? p.name : p.name[lang] }}</span> <span aria-hidden="true">→</span></a>
              <GithubLink v-if="p.repo" class="link-arrow" :href="p.repo" :label="t.codeShort" />
            </p>
          </li>
        </ul>
      </div>
    </section>

    <section id="about" class="section" aria-labelledby="about-title">
      <div class="wrap about">
        <div>
          <h2 id="about-title" class="section-title reveal">{{ t.aboutTitle }}</h2>
          <p v-for="p in profile.about[lang].paragraphs.slice(1, 3)" :key="p" v-html="p" />
          <dl class="facts">
            <div>
              <dt>{{ t.languagesTitle }}</dt>
              <dd v-for="l in profile.languages" :key="l.code"><strong>{{ l.name[lang] }}</strong> · {{ l.level[lang] }}</dd>
            </div>
            <div>
              <dt>{{ t.educationTitle }}</dt>
              <dd v-for="e in profile.education[lang]" :key="e">{{ e }}</dd>
            </div>
            <div>
              <dt>{{ t.writingTitle }}</dt>
              <dd v-for="b in profile.blog" :key="b.slug">
                <a :href="`/blog/${b.slug}`" :hreflang="b.lang" :lang="b.lang">{{ b.title }}</a> · {{ b.date.slice(0, 4) }}<template v-if="b.lang !== lang">, {{ t.inEnglish }}</template>
              </dd>
            </div>
          </dl>
        </div>
        <div class="collage">
          <img v-for="ph in aboutPhotos" :key="ph.src" :src="ph.src" :alt="ph.alt" :width="ph.w" :height="ph.h" loading="lazy">
        </div>
      </div>
    </section>

    <section id="contact" class="contact" aria-labelledby="contact-title">
      <div class="wrap">
        <h2 id="contact-title" class="reveal">{{ t.contactTitle }}</h2>
        <p>{{ t.contactLead }}</p>
        <p class="contact-cta"><a class="btn btn-light" :href="person.cal">{{ home.callCta }} <span aria-hidden="true">→</span></a></p>
        <a class="contact-email" :href="`mailto:${person.email}`">{{ person.email }}</a>
        <p><a class="contact-phone" :href="`tel:${person.phoneHref}`">{{ person.phone }}</a></p>
        <ul class="contact-links">
          <li><a :href="person.linkedin">LinkedIn</a></li>
          <li><a :href="person.malt">Malt</a></li>
          <li><a :href="person.github">GitHub</a></li>
          <li><a :href="profile.cv.en" hreflang="en" download>{{ t.cvEn }}</a></li>
          <li><a :href="profile.cv.fr" hreflang="fr" download>{{ t.cvFr }}</a></li>
        </ul>
      </div>
    </section>
  </main>
</template>
