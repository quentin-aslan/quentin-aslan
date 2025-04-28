<template>
  <main class="mx-auto text-black">
    <section
      v-if="articles && articles.length > 0"
      class="flex flex-col gap-8"
    >
      <header class="text-center">
        <h1 class="text-3xl font-extrabold text-primary">
          Blog Articles
        </h1>
      </header>

      <div class="flex flex-col gap-8 justify-center items-center">
        <article
          v-for="article in articles"
          :key="article.slug"
          class="flex flex-col lg:flex-row gap-5 p-8 w-[90%] mx-[5%]
          rounded border-l-4 border-primary  duration-150 hover:-translate-y-1.5"
        >
          <!-- Article content -->
          <div class="flex flex-col gap-4 w-full">
            <header class="flex flex-col gap-1">
              <h2 class="text-2xl font-bold hover:underline cursor-pointer underline-offset-4 decoration-primary">
                <NuxtLink :to="article.articleLink">
                  {{ article.title }}
                </NuxtLink>
              </h2>
              <div class="text-sm text-gray-600">
                {{ new Date(article.createdAt).toLocaleDateString() }}
              </div>
            </header>

            <div class="flex flex-col gap-4">
              <QuoteCustom>
                {{ article.excerpt }}
              </QuoteCustom>

              <!-- Read more text -->
              <NuxtLink
                :to="article.articleLink"
                class="group text-primary hover:underline cursor-pointer text-lg italic"
              >
                Read More <span class="hidden group-hover:inline-block ml-2 transition-opacity opacity-0 group-hover:opacity-100 duration-300">
                  → → →
                </span>

              </NuxtLink>
            </div>
          </div>
        </article>
      </div>
    </section>

    <div
      v-else
      class="text-center py-10"
    >
      <p class="text-xl text-gray-600">
        No articles found.
      </p>
    </div>
  </main>
</template>

<script lang="ts" setup>
import type { ArticleViewModel } from '~/domains/articles/entities/Article'
import { ArticlesRepositoryStrapi } from '~/domains/articles/adapters/articles.repository.strapi'
import { GetArticlesUseCase } from '~/domains/articles/get-articles.use-case'
import { ArticlesBlogIndexPresenterImpl } from '~/domains/articles/adapters/articles-blog-index.presenter.impl'

const route = useRoute()
const config = useRuntimeConfig()

const articles = ref<ArticleViewModel[] | undefined>(undefined)

await useAsyncData('articles', async () => {
  const articlesRepositoryStrapi = new ArticlesRepositoryStrapi(config.public.STRAPI_BASE_URL, config.public.STRAPI_READ_ONLY)
  const getArticleUseCase = new GetArticlesUseCase(articlesRepositoryStrapi)
  await getArticleUseCase.execute(new ArticlesBlogIndexPresenterImpl(vm => articles.value = vm), route.params.slug)
})
</script>
