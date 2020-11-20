<template>
  <div id="masthead" class="menu-wrap" role="banner">
    <div class="nav-menu">
      <div class="container">
        <div class="row">
          <div class="col-2 col-md-2">
            <nuxt-link to="/" class="navbar-brand">
              <img src="../assets/img/logo-white.svg" class="svg logo-menu" alt="Visioon">
            </nuxt-link>
          </div>
          <nav id="menu" class="col-10 col-md-10">
            <div class="navigation float-right">
              <button class="menu-toggle">
                  <span class="icon"></span>
                  <span class="icon"></span>
                  <span class="icon"></span>
              </button>

              <ul class="main-menu nav navbar-nav navbar-right">
                <li class="menu-item">
                  <nuxt-link to="/fonctionnalites" class="v-stroke">Fonctionnalités</nuxt-link>
                </li>
                <li class="menu-item">
                  <nuxt-link to="/contact" class="v-stroke">Contact</nuxt-link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    appName() {
      return process.env.APP_NAME ?? "Visioon";
    },
    github() {
      return process.env.APP_GITHUB;
    },
    twitter() {
      return process.env.APP_TWITTER;
    }
  }
}
</script>

<style scoped>
.menu-wrap {
  top: 0;
  z-index: 999;
}
.relative {
  z-index: 999;
}
</style>
