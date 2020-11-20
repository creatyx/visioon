<template>
    <section class="getready sec-bg1">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="column-support-txt">
                        <h2 class="section-heading">{{ title }}</h2>
                        <p class="section-subheading">
                            <slot name="content">

                            </slot>
                        </p>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="btn-floats">
                        <a v-if="button" :href="button.link" class="btn btn-default-pink-fill">
                            {{ button.anchor }}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'AppCallout',
    props: {
        button: {
            type: Object,
            required: false
        },
        subtitle: {
            type: String,
            required: false
        },
        title: {
            type: String,
            required: true
        }
    }
}
</script>