<template>
  <main class="pt-20 pb-20 px-4 md:px-12 max-w-6xl mx-auto text-black">
    <article
      v-if="!article"
      class="text-center"
    >
      <h1 class="text-4xl md:text-5xl font-bold">
        No article found
      </h1>
      <p class="text-gray-500 mt-4">
        Please check the URL or go back to the article list.
      </p>
    </article>

    <!-- Project -->
    <article
      v-else
      class="flex flex-col gap-10 bg-white p-6 md:p-10 rounded-xl shadow-custom-shadow-primary border-2 border-primary"
    >
      <!-- Cover Image -->
      <div
        v-if="article.cover"
        class="overflow-hidden rounded-lg"
      >
        <img
          :src="article.cover.url"
          :alt="article.cover.alternativeText"
          class="w-full h-64 md:h-[400px] object-cover rounded-lg transform duration-300 hover:scale-105"
        >
        <p class="text-sm text-gray-400 mt-2 italic text-center">
          {{ article.cover.caption }}
        </p>
      </div>

      <!-- Main Information -->
      <header class="flex flex-col gap-2">
        <h1 class="text-3xl md:text-5xl font-bold">
          {{ article.title }}
        </h1>
      </header>

      <!-- Description -->
      <section class="prose prose-lg max-w-none text-justify">
        <span v-html="article.excerpt" />
      </section>

      <!-- Tech Stack -->
      <section>
        <h2 class="text-2xl font-semibold text-primary mb-4">
          Tech Stack
        </h2>
        <div class="flex flex-wrap gap-4">
          <div
            v-for="tech in article.technologies"
            :key="tech.label"
            class="flex items-center gap-2 border border-primary rounded-full px-3 py-1 text-sm bg-gray-50 hover:bg-primary hover:text-white transition"
          >
            <img
              :src="tech.imgSrc"
              alt=""
              class="w-5 h-5"
            >
            <span>{{ tech.label }}</span>
          </div>
        </div>
      </section>

      <!-- Main Content -->
      <section
        v-if="article.content"
        class="prose prose-base"
      >
        <div v-html="article.content" />
      </section>
    </article>
  </main>
</template>

<script lang="ts" setup>
import type { ArticleViewModel } from '~/domains/articles/entities/Article'
import { ArticlesRepositoryStrapi } from '~/domains/articles/adapters/articles.repository.strapi'
import { GetArticleUseCase } from '~/domains/articles/get-article.use-case'
import { ArticlePresenterImpl } from '~/domains/articles/adapters/article.presenter.impl'

const route = useRoute()
const config = useRuntimeConfig()

const article = ref<ArticleViewModel | undefined>(undefined)

await useAsyncData('article', async () => {
  const articlesRepositoryStrapi = new ArticlesRepositoryStrapi(config.public.STRAPI_BASE_URL, config.public.STRAPI_READ_ONLY)
  const getArticleUseCase = new GetArticleUseCase(articlesRepositoryStrapi)
  await getArticleUseCase.execute(new ArticlePresenterImpl(vm => article.value = vm), route.params.slug)
})
</script>
