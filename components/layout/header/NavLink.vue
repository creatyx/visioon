<template>
  <nuxt-link
    :to="to"
    class="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
  >
    {{ name }}
  </nuxt-link>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    to: {
      required: true
    }
  }
}
</script>
