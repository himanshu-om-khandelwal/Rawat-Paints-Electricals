<script setup lang="ts">

defineProps<{
    img: string,
    title: string,
    titleHindi: string
}>()
</script>

<template>
    <div class="w-96 bg-gradient-to-r from-green-600 via-yellow-600 to-orange-600 flex justify-center flex-col">
        <div class="h-64 m-2 flex justify-center">
            <img :src=img class="max-w-full max-h-full"/>
        </div>
        <div class="h-36 bg-gradient-to-r from-red-400 via-violet-300 to-red-400 flex justify-center items-center">
            <div class="bg-yellow-300 text-black rounded-lg p-2">
                <span class="text-3xl">
                    {{title}}
                </span>
                <span class="text-3xl">
                    {{titleHindi}}
                </span>
            </div>
            
        </div>
    </div>
</template>