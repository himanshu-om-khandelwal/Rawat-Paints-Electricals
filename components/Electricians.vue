<script setup lang="ts">
    const electricians = ref([
        
    ])
</script>
<template>
    <div class="border border-red-600 mx-10 my-5 p-5 rounded-lg">
        <div class="bg-gradient-to-r from-violet-300 via-green-300 to-red-300 max-w-fit px-3 py-1 rounded-lg m-10">
            <span class="text-2xl">Our Electricians</span>
        </div>
        <hr >
        <div class="flex flex-wrap gap-5 justify-center mt-10">
            <div v-for="electrician in electricians">
                <Person :img=electrician.img :name=electrician.name />
            </div>
        </div>
    </div>
</template>