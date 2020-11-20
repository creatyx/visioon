<template>
  <div class="py-12 bg-white mt-5">
    <div class="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-screen-xl lg:px-8">
      <div class="lg:grid lg:grid-cols-3 lg:gap-8">
        <div v-for="(feature, index) in features" :key="feature.icon" :class="{'mt-10 lg:mt-0': index === 0}">
          <div class="flex items-center justify-center h-20 w-20 m-auto rounded-full bg-gray-400 text-white">

          </div>
          <div class="mt-5">
            <h5 class="text-lg leading-6 font-medium text-gray-900 text-center">{{ feature.title }}</h5>
            <p class="mt-2 text-base leading-6 text-gray-500">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppFeature',
  props: {
    features: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
svg {
  max-height: 40px;
}
</style>