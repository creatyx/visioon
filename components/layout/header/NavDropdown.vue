<template>
  <div class="relative" @click.away="isOpen = false">
    <button
      @mouseover="open()"
      :class="isOpen ? 'text-gray-900' : 'text-gray-500'"
      type="button"
      class="group inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
    ><!--@click="isOpen = !isOpen"-->
        <span>{{ name }}</span>
        <svg
          class="text-gray-400 h-5 w-5 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150"
          :class="isOpen ? 'text-gray-600' : 'text-gray-400'"
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
        >
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
    </button>

    <transition
      enter-active-class="transition ease-out duration-200"
      enter-class="opacity-0 translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-1"
    >
      <div
        v-if="isOpen"
        @mouseleave="isOpen = false"
        :class="twoColumns ? '-ml-4 max-w-md lg:max-w-3xl' : 'left-1/2 -translate-x-1/2 max-w-xs sm:px-0'"
        class="absolute mt-3 transform w-screen"
      >
        <div class="rounded-lg shadow-lg">
          <div class="rounded-lg shadow-xs overflow-hidden">
            <div
              :class="{'lg:grid-cols-2' : twoColumns}"
              class="z-20 relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"
            >
              <slot name="default"></slot>
            </div>
            <div v-if="hasFooterSlot" class="p-5 bg-gray-50 sm:p-8">
              <slot name="footer"></slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    }
  },
  props: {
    name: {
      type: String,
      required: true
    },
    twoColumns: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    open() {
      this.isOpen = true;
      this.$emit('open', true);
    }
  },
  computed: {
    hasFooterSlot() {
      return !!this.$slots.footer
    }
  }
}
</script>

<style scoped>
.absolute {
  z-index: 9999;
}
</style>
