<script setup lang="ts">
import profile from '~~/content/profile.json'

definePageMeta({
  validate: route => (!route.params.lang || ['fr', 'es'].includes(route.params.lang as string))
    && profile.caseStudies.some(c => c.slug === route.params.slug),
})

const { lang, t, to } = useSite()
const slug = useRoute().params.slug as string
const page = profile.caseStudies.find(c => c.slug === slug)!
// Oldest first, like the story told on the page.
const jobs = profile.work.filter(j => j.caseStudy === slug).sort((a, b) => a.start.localeCompare(b.start))
const html = renderMarkdown(`work/${slug}.${lang}`)
const letter = page.letter && { ...page.letter, html: renderMarkdown(`letters/${page.letter.source[lang]}`), lang: page.letter.source[lang].split('.')[1] }
const path = `/work/${slug}`
const screens = page.screens ?? []
const homeWork = `${to('/')}#work`
const index = profile.caseStudies.indexOf(page)
const next = profile.caseStudies[(index + 1) % profile.caseStudies.length]!

useSeo({
  // The h1 keeps the full title; search results get the short part before the colon.
  title: `${page.title[lang].split(':')[0]} · ${t.caseStudyNoun} · ${profile.person.name}`,
  description: page.description[lang],
  path,
  type: 'article',
  image: page.ogImage,
  imageAlt: `${page.title[lang]} · ${profile.person.name}`,
  jsonLd: [
    {
      '@type': 'Article',
      'headline': page.title[lang],
      'description': page.description[lang],
      'inLanguage': lang,
      'image': profile.person.url + page.ogImage,
      'datePublished': page.date,
      'dateModified': profile.updated,
      'author': authorLd,
      'url': profile.person.url + to(path),
    },
    breadcrumbLd([
      { name: profile.person.name, path: to('/') },
      { name: page.title[lang], path: to(path) },
    ]),
  ],
})
</script>

<template>
  <main id="main" tabindex="-1" class="article">
    <nav class="breadcrumb" :aria-label="t.breadcrumb">
      <ol>
        <li><a :href="to('/')">{{ profile.person.name }}</a></li>
        <li><a :href="homeWork">{{ t.nav.work }}</a></li>
      </ol>
    </nav>
    <h1>{{ page.title[lang] }}</h1>
    <p class="intro">{{ page.description[lang] }}</p>
    <GithubLink v-if="page.repo" class="btn btn-ghost" :href="page.repo" :label="t.viewCode" />
    <a v-if="page.product" class="btn btn-ghost" :href="page.product.url">{{ page.product.label[lang] }} <span aria-hidden="true">↗</span></a>
    <dl v-for="job in jobs" :key="job.id" class="facts-table">
      <dt>{{ t.role }}</dt><dd>{{ job.role[lang] }} · {{ job.org }}</dd>
      <dt>{{ t.period }}</dt><dd>{{ formatPeriod(job.start, job.end, lang) }}</dd>
      <dt>{{ t.place }}</dt><dd>{{ job.place[lang] }}</dd>
      <dt>{{ t.stack }}</dt><dd>{{ job.stack.join(', ') }}</dd>
    </dl>
    <div v-if="screens.length" class="screens">
      <img v-for="s in screens" :key="s.src" :src="s.src" :alt="s.alt[lang]" width="500" height="1087" loading="lazy">
    </div>
    <img v-else-if="page.image" class="cover" fetchpriority="high" :src="page.image" :alt="page.imageAlt[lang]" :width="page.imageW ?? undefined" :height="page.imageH ?? undefined">
    <div class="prose" v-html="html" />
    <p v-if="page.repo" class="actions">
      <GithubLink class="btn btn-accent" :href="page.repo" :label="t.viewCode" />
    </p>
    <section v-if="letter" id="letter" class="letter" aria-labelledby="letter-title">
      <h2 id="letter-title">{{ letter.title[lang] }}</h2>
      <p class="note">{{ letter.note[lang] }}</p>
      <blockquote class="prose" :lang="letter.lang" v-html="letter.html" />
      <p class="actions">
        <a v-for="f in letter.pdf" :key="f.href" class="btn btn-ghost" :href="f.href" :hreflang="f.lang">{{ f.label[lang] }}</a>
      </p>
    </section>
    <p class="cta-note">{{ t.contactLead }}</p>
    <p class="actions">
      <a class="btn btn-accent" :href="`mailto:${profile.person.email}`">{{ t.emailMe }}</a>
      <a class="btn btn-ghost" :href="homeWork">{{ t.backToWork }}</a>
    </p>
    <p class="next"><a class="link-arrow" :href="to(`/work/${next.slug}`)">{{ t.nextCase }}: {{ next.title[lang] }} <span aria-hidden="true">→</span></a></p>
  </main>
</template>
