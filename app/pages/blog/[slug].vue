<script setup lang="ts">
import profile from '~~/content/profile.json'

definePageMeta({ translated: false, validate: route => profile.blog.some(b => b.slug === route.params.slug) })

const slug = useRoute().params.slug as string
const post = profile.blog.find(b => b.slug === slug)!
const html = renderMarkdown(`blog/${slug}.${post.lang}`)
const date = new Date(post.date).toLocaleDateString(post.lang, { dateStyle: 'long', timeZone: 'UTC' })

useSeo({
  title: `${post.title} · ${profile.person.name}`,
  description: post.description,
  path: `/blog/${slug}`,
  type: 'article',
  image: post.ogImage,
  imageAlt: post.title,
  jsonLd: [{
    '@type': 'BlogPosting',
    'headline': post.title,
    'description': post.description,
    'inLanguage': post.lang,
    'image': profile.person.url + post.image,
    'datePublished': post.date,
    'dateModified': post.date,
    'author': authorLd,
    'url': `${profile.person.url}/blog/${slug}`,
  }],
})
</script>

<template>
  <main id="main" tabindex="-1" class="article">
    <p class="label"><time :datetime="post.date">{{ date }}</time></p>
    <h1>{{ post.title }}</h1>
    <img class="cover" :src="post.image" alt="" width="1200" height="800">
    <div class="prose" v-html="html" />
  </main>
</template>
