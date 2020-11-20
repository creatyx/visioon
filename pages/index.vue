<template>
  <div>
    <carousel class="home-carousel" :per-page="1" :pagination-enabled="false">
      <slide class="full h-100">
        <div class="total-grad-grey"></div>
        <div class="vc-parent">
          <div class="vc-child">
            <div class="top-banner">
              <div class="container">
                <img class="svg custom-element-right" src="../assets/patterns/rack.svg"
                    alt="Dedicated Server">
                <div class="heading">Visioonez votre<br>communication numérique
                  <div class="animatype">Avec <span id="typed3"></span></div>
                </div>
                <h3 class="subheading">un outil tout-en-un qui vous permet<br>
                    d'<strong>analyser vos profils sociaux</strong>.<br>
                    Visuellement. Simplement.<br>
                </h3>
                <nuxt-link to="/fonctionnalites" class="btn btn-default-pink-fill">En savoir plus</nuxt-link>
                <nuxt-link to="/contact" class="btn btn-default-yellow-fill mr-3">Tarifs</nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </slide>
      <slide class="full h-100">
        <div class="total-grad-grey-inverse"></div>
        <div class="vc-parent">
          <div class="vc-child">
            <div class="top-banner">
              <div class="container">
                <img class="svg custom-element-right" src="../assets/patterns/cloudvps.svg"
                    alt="Cloud VPS Server">
                <h1 class="heading">Monitorez vos investissements<br>en marketing digital</h1>
                <h3 class="subheading">
                  <i class="c-pink feat fas fa-check-circle mr-2"></i> Evolution de vos abonnés<br>
                  <i class="c-pink feat fas fa-check-circle mr-2"></i> Audit de performances<br>
                  <i class="c-pink feat fas fa-check-circle mr-2"></i> Rappels de publications
                </h3>
                <nuxt-link to="/fonctionnalites" class="btn btn-default-pink-fill">En savoir plus</nuxt-link>
                <nuxt-link to="/contact" class="btn btn-default-yellow-fill mr-3">Je m'abonne</nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </slide>
    </carousel>

    <nuxt-content :document="page" />

    <!-- <blog-list v-if="posts.length > 0" :posts="posts" /> -->

  </div>
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
  data() {
    return {
      isOpen: false
    }
  },
  computed: {
    appName() {
      return process.env.APP_NAME ?? "Visioon";
    },
  },
  async asyncData ({ $content, app }) {
    const page = await $content(`/home`).fetch()
    // const posts = await $content(`/articles`).fetch();

    return {
      page,
      // posts
    };
  },
  components: {
    BlogList: () => import('~/components/blog/List'),
    OwlCarousel: () => import('vue-owl-carousel')
  }
}
</script>

<style lang="scss" scoped>
.home-carousel {
  .full {
    min-height: 600px;
    padding-bottom: 140px;
    padding-top: 140px;
  }

  .h-100 {
    height: 100%!important;
  }
}
</style>