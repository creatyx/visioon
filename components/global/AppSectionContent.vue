<template>
  <section class="sec-normal sec-bg2">
      <div class="team">
        <div class="container">
          <div class="randomline">
            <div class="bigline"></div>
            <div class="smallline"></div>
          </div>
          <div class="row">
            <div class="col-sm-12 col-md-12">
              <h2 class="section-heading">{{ title }}</h2>
              <p class="section-subheading">{{ subtitle }}</p>
            </div>
            <div class="col-sm-12 col-md-12">
              <div class="wrapper">
                <div class="team-info">
                  <slot name="content">

                  </slot>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  props: {
    subtitle: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: false
    }
  }
}
</script>
