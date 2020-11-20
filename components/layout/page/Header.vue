<template>
  <div class="top-header exapath-w">
    <div class="total-grad-inverse"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="wrapper">
            <h1 class="heading">{{ page.title }}</h1>
            <div class="subheding">{{ page.subtitle }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    page: {
      type: Object,
      required: true
    }
  }
}
</script>
