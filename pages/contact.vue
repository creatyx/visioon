<template>
  <article>
    <page-header :page="page"></page-header>

    <section class="sec-normal sec-bg2">
      <div class="team">
        <div class="container">
          <div class="randomline">
            <div class="bigline"></div>
            <div class="smallline"></div>
          </div>
          <div class="row">
            <div class="col-sm-12 col-md-12">
      
              <nuxt-content class="prose prose-sm sm:prose lg:prose-lg xl:prose-xl text-gray-500 mx-auto mt-3 text-base sm:text-lg md:text-xl" :document="page" />

            </div>
          </div>
        </div>
      </div>
    </section>
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
