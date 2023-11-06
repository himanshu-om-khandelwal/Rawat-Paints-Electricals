<script setup lang="ts">
defineProps<{
    img: string,
}>()
</script>

<template>
    <div class="w-96 bg-gradient-to-r from-green-600 via-yellow-600 to-orange-600 rounded-lg flex flex-col">
        <div class="h-64 m-2 flex justify-center">
            <img :src=img />
        </div>
    </div>
</template>