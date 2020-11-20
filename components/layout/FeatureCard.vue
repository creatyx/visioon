<template>
    <div class="flex space-x-3">
        <svg class="flex-shrink-0 h-6 w-6 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        <div class="space-y-2">
            <dt class="text-lg leading-6 font-medium text-gray-900">{{ title }}</dt>
            <dd class="flex space-x-3 lg:py-0 lg:pb-4">
                <span class="text-base leading-6 text-gray-500">{{ description }}</span>
            </dd>
        </div>
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
