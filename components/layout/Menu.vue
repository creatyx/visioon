<template>
    <div :class="classes">
        <nuxt-link :class="linkClasses" to="/caracteristicas">Caracteristicas</nuxt-link>
        <nuxt-link :class="otherLinkClasses" to="/blog">Blog</nuxt-link>
        <nuxt-link :class="otherLinkClasses" to="/sobre-nosotros">Sobre nosotros</nuxt-link>
    </div>
</template>

<script>
export default {
    computed: {
        otherLinkClasses() {
            return this.marginClasses+' '+this.linkClasses
        }
    },
    props: {
        classes: {
            type: String,
            required: false
        },
        linkClasses: {
            type: String,
            required: false
        },
        marginClasses: {
            type: String,
            required: false
        }
    }
}
</script>