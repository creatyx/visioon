<template>
  <article class="relative py-16 bg-white overflow-hidden">
    <div class="relative px-4 sm:px-6 lg:px-8">
      <div class="text-lg max-w-prose mx-auto mb-6">
        <p class="text-base text-center leading-6 text-blue-600 font-semibold tracking-wide uppercase">{{ page.category }}</p>
        <h1 class="mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">{{ page.title }}</h1>
        <p class="text-xl text-gray-500 leading-8 text-center">{{ page.subtitle }}</p>
      </div>
    
      <nuxt-content class="prose prose-sm sm:prose lg:prose-lg xl:prose-xl text-gray-500 mx-auto mt-3 text-base sm:text-lg md:text-xl" :document="page" />
    </div>
  </article>
</template>

<script>
export default {
  head() {
    return {
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.description
        },
      ],
      title: this.page.title
    }
  },
  async asyncData ({ $content, app, params }) {
    const page = await $content(`/`, params.slug).fetch()

    return {
      page
    }
  },
  components: {
    AppBox: () => import('~/components/box'),
    AppBgDots: () => import('~/components/layout/BgDots'),
    PageHeader: () => import('~/components/layout/page/Header'),
  },
}
</script>
