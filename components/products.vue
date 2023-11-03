<script setup lang="ts">
const products = ref([
    {
        img: '/img/shalimar.jpg',
    },
    {
        img: '/img/asian.jpg',
    },
    {
        img: '/img/berger.jpg',
    },
    {
        img: '/img/putty.png',
    },
    {
        img: '/img/sakarni.png',
    },
    {
        img: '/img/limestone.png',
    },
    {
        img: '/img/brush_roller.jpg',
    },
    {
        img: '/img/fevicol.jpg',
    },
    {
        img: '/img/ultramarine_blue.jpg'
    },
    {
        img: '/img/modulur_series.png',
    },
    {
        img: '/img/extension_board.jpg'
    },
    {
        img: '/img/emery_paper.jpg'
    }
])
</script>

<template>
    <div class="flex justify-center">
        <div class="flex flex-col max-w-fit">
            <div class="pl-3 flex justify-center mb-10">
                <div class="max-w-fit px-6 py-1 bg-gradient-to-r from-green-600 via-yellow-600 to-orange-600 rounded-lg">
                    <span class="text-3xl font-bold">We sale</span>
                </div>
                
            </div>
            <div class="flex flex-wrap gap-5 p-3 justify-center">
                <div v-for="product in products">
                    <Product :img="product.img"/>
                </div>
            </div>
        </div>
    </div>
    
</template>