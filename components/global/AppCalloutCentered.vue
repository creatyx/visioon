<template>
  <div class="bg-gray-300">
    <div class="max-w-screen-xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <h2 class="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
        <slot></slot>
      </h2>
      <div class="mt-8 flex justify-center">
        <div v-if="ctaMain !== undefined" class="inline-flex rounded-md shadow">
          <nuxt-link :to="ctaMain.link" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
            {{ ctaMain.anchor }}
          </nuxt-link>
        </div>
        <div v-if="ctaSecondary !== undefined" class="ml-3 inline-flex">
          <nuxt-link :to="ctaSecondary.link" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline focus:border-indigo-300 transition duration-150 ease-in-out">
            {{ ctaSecondary.anchor }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppCalloutCentered',
  props: {
    ctaMain: {
      type: Object,
      required: false
    },
    ctaSecondary: {
      type: Object,
      required: false
    }
  }
}
</script>
