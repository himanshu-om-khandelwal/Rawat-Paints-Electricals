<script setup lang="ts">
defineProps<{
    img?: string,
    name?: string
}>()
</script>

<template>
    <div class="w-64 bg-gradient-to-r from-green-600 via-yellow-600 to-orange-600 flex flex-col">
        <div class="h-64 m-2 flex justify-center">
            <img :src=img class="rounded-lg"/>
        </div>
        <div class="h-20 flex justify-center items-center bg-gradient-to-r from-violet-300 via-green-300 to-red-300">
            <span class="text-3xl">{{ name }}</span>
        </div>
    </div>
</template>