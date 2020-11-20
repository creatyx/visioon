<template>
    <div>
        <app-header/>

        <nuxt/>

        <app-footer/>
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
