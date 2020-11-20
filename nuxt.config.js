module.exports = {
  target: 'static',
  head: {
    titleTemplate: '%s - Visioon',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ]
  },
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxt/content',
    '@nuxtjs/robots',
    ['nuxt-matomo', {
      matomoUrl: '//matomo.encre-informatique.com/',
      siteId: 14,
      cookies: false
    }]
  ],
  buildModules: [
    '@nuxt/components',
    '@nuxtjs/pwa',
  ],
  plugins: [{ src: '~/plugins/vueCarousel.js', ssr: false }],
  rules: [
    {
      test: /\.s[ac]ss$/i,
      use: ['style-loader','css-loader','sass-loader',],
    }
  ],
  bootstrapVue: {
    bootstrapCSS: false, 
    bootstrapVueCSS: false
  },
  components: true,
  content: {
    liveEdit: true,
    markdown: {
      prism: {
        theme: 'static/css/prism-vsc-dark-plus.css'
      },
      externalLinks: {
        target: "_blank",
        rel: "noopener"
      }
    }
  },
  css: [
    '@/assets/scss/layout.scss'
  ],
  pwa: {
    manifest: {
      name: 'Visioon',
      lang: 'fr',
      short_name: 'Visioon'
    },
    meta: {
      theme_color: '#1c64f2'
    }
  },
  robots: [
    {
      UserAgent: '*',
      Allow: '/'
    },
    {
      UserAgent: '*',
      Disallow: '/_nuxt/'
    }
  ]
}
