<template>
  <article class="relative py-16 overflow-hidden">
    <page-header :page="page"></page-header>

    <nuxt-content :document="page" />

  </article>
</template>

<script>
export default {
  layout: 'default',
  head() {
    return {
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.description
        },
      ],
      title: this.page.meta_title
    }
  },
  async asyncData ({ $content, app, params }) {
    const page = await $content(`/`, 'features').fetch()

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
