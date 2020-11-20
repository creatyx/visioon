<template>
    <div>
        <div v-if="true === false" id="spinner-area">
            <div class="spinner">
                <div class="double-bounce1"></div>
                <div class="double-bounce2"></div>
                <div class="spinner-txt">Visioon...</div>
            </div>
        </div>

        <app-header/>

        <nuxt/>

        <app-footer/>

        <a href="#0" class="cd-top"> <i class="fas fa-angle-up"></i> </a>
    </div>
</template>

<script>
import AppHeader from '~/components/header'
import AppFooter from '~/components/footer'
export default {
    components: {
        AppHeader,
        AppFooter
    }
}
</script>
