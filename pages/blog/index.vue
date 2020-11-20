<template>
  <div class="blog container mx-auto">
    <blog-list v-if="posts.length > 0" :posts="posts" />
  </div>
</template>

<script>
import AppBox from '~/components/box.vue';
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
  async asyncData ({ $content, app }) {
    const page = await $content(`/blog`).fetch()
    const posts = await $content(`/articles`).fetch();

    return {
      page,
      posts,
    };
  },
  components: {
    AppBox,
    BlogList: () => import('~/components/blog/List')
  }
}
</script>

<style lang="scss" scoped>

</style>
