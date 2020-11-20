<template>
  <article class="relative py-16 overflow-hidden">
    <page-header :page="page"></page-header>

    <nuxt-content :document="page" />

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
  nuxtI18n: {
    paths: {
      en: '/about-us', // -> accessible at /about-us (no prefix since it's the default locale)
      fr: '/a-propos', // -> accessible at /fr/a-propos
      es: '/sobre-nosotros'     // -> accessible at /es/sobre
    }
  },
  async asyncData ({ $content, app, params }) {
    const page = await $content(`/`, 'about_us').fetch()

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
