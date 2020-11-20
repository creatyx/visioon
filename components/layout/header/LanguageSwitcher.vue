<template>
  <div class="relative" v-if="!isContentPage">
    <button
      @click="isOpen = !isOpen"
      type="button"
      class="group text-gray-500 inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
      :class="isOpen ? 'text-gray-900' : 'text-gray-500'"
    >
      <span>{{ current }}</span>
      <svg
      class="text-gray-400 h-5 w-5 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150"
      :class="isOpen ? 'text-gray-600' : 'text-gray-400'"
      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
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
      <div v-if="isOpen" class="absolute left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
        <div class="rounded-lg shadow-lg">
          <div class="rounded-lg shadow-xs overflow-hidden">
            <div class="z-20 relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
              <nuxt-link v-if="$i18n.locale !== 'en'" class="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150" :to="switchLocalePath('en')">
                <country-flag class="flex-shrink-0 h-6 w-6 text-red-600" country='gb' size='normal'/>
                <div class="space-y-1">
                  <p class="text-base leading-6 font-medium text-gray-900">
                    EN. English
                  </p>
                  <!-- <p class="text-sm leading-5 text-gray-500">
                    Get a better understanding of where your traffic is coming from.
                  </p> -->
                </div>
              </nuxt-link>
              <nuxt-link v-if="$i18n.locale !== 'es'"
                class="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150" :to="switchLocalePath('es')"
              >
                <country-flag class="flex-shrink-0 h-6 w-6 text-red-600" country='es' size='normal'/>
                <div class="space-y-1">
                  <p class="text-base leading-6 font-medium text-gray-900">
                    ES. Español
                  </p>
                  <!-- <p class="text-sm leading-5 text-gray-500">
                    Get a better understanding of where your traffic is coming from.
                  </p> -->
                </div>
              </nuxt-link>
              <nuxt-link v-if="$i18n.locale !== 'fr'" class="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150" :to="switchLocalePath('fr')">
                <country-flag class="flex-shrink-0 h-6 w-6 text-red-600" country='fr' size='normal'/>
                <div class="space-y-1">
                  <p class="text-base leading-6 font-medium text-gray-900">
                    FR. Français
                  </p>
                  <!-- <p class="text-sm leading-5 text-gray-500">
                    Get a better understanding of where your traffic is coming from.
                  </p> -->
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import CountryFlag from 'vue-country-flag'
export default {
  data() {
    return {
      isOpen: false
    }
  },
  computed: {
    current() {
      return this.$i18n.locale.toUpperCase()
    },
    isContentPage() {
      if (null !== this.$route.name) {
        return this.$route.name.includes('slug');
      }
      return false;
    }
  },
  components: {
    CountryFlag
  }
}
</script>

<style scoped>
.absolute {
  z-index: 9999;
}
</style>
