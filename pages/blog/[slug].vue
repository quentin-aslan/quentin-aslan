<template>
  <main class="pt-20 pb-20 px-4 md:px-12 mx-auto text-black max-w-[90%] lg:max-w-[60%]">
    <article
      v-if="!article"
      class="text-center"
    >
      <h1 class="text-4xl md:text-5xl font-bold text-gray-800">
        No article found
      </h1>
      <p class="text-gray-500 mt-4">
        Please check the URL or go back to the article list.
      </p>
    </article>

    <article
      v-else
      class="flex flex-col gap-12  md:p-10 "
    >
      <!-- Cover Image -->
      <div
        v-if="article.cover"
        class="overflow-hidden rounded-xl shadow-md sm:max-h-full"
      >
        <img
          :src="article.cover.url"
          :alt="article.cover.alternativeText || 'Cover image'"
          class="w-full h-full object-contain rounded-xl transform duration-300 hover:scale-105"
        >
        <p
          v-if="article.cover.caption"
          class="text-sm text-gray-400 mt-2 italic text-center"
        >
          {{ article.cover.caption }}
        </p>
      </div>

      <!-- Title -->
      <header class="flex flex-col gap-2">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900">
          {{ article.title }}
        </h1>
      </header>

      <!-- Excerpt -->
      <QuoteCustom>
        <span v-html="article.excerpt" />
      </QuoteCustom>

      <!-- Stack Tech -->
      <section
        v-if="article.technologies?.length"
      >
        <h2 class="text-2xl font-semibold text-primary mb-4">
          Tech Stack
        </h2>
        <div class="flex flex-wrap gap-4">
          <div
            v-for="tech in article.technologies"
            :key="tech.label"
            class="flex items-center gap-2 border border-primary rounded-full px-3 py-1 text-sm bg-gray-50 hover:bg-primary hover:text-white transition duration-300"
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

      <section
        v-if="article.content"
        class="prose prose-base text-gray-800"
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
import 'highlight.js/styles/github-dark.css'

const route = useRoute()
const config = useRuntimeConfig()

const article = ref<ArticleViewModel | undefined>(undefined)

await useAsyncData('article', async () => {
  const articlesRepositoryStrapi = new ArticlesRepositoryStrapi(config.public.STRAPI_BASE_URL, config.public.STRAPI_READ_ONLY)
  const getArticleUseCase = new GetArticleUseCase(articlesRepositoryStrapi)
  await getArticleUseCase.execute(new ArticlePresenterImpl(vm => article.value = vm), route.params.slug)
})
</script>
