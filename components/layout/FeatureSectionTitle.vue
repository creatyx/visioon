<template>
    <div class="text-lg max-w-prose mx-auto mb-6">
        <h1 class="mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">{{ title }}</h1>
        <p class="text-xl text-gray-500 leading-8 text-center">{{ description }}</p>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    }
}
</script>
