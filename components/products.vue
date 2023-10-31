<script setup lang="ts">
const products = ref([
    {
        img: 'https://static.asianpaints.com/content/dam/asian_paints/products/packshots/interior-walls-tractor-uno-asian-paints.png',
        title: 'Distemper',
        titleHindi: ''
    },
    {
        img: 'https://static.asianpaints.com/content/dam/asian_paints/products/packshots/interior-walls-tractor-sparc-advanced-packshot-asian-paints.png',
        title: 'Tractor Sparc Advanced',
        titleHindi: ''
    },
    {
        img: 'https://static.asianpaints.com/content/dam/asian_paints/products/packshots/exterior-walls-ace-sparc-advanced-asian-paints.png',
        title: 'Ace Sparc Advanced',
        titleHindi: ''
    },
    {
        img: 'https://static.asianpaints.com/content/dam/asian_paints/products/packshots/exterior-walls-ace-shyne-asian-paints.png',
        title: 'Ace Shyne',
        titleHindi: ''
    },
    {
        img: 'https://static.asianpaints.com/content/dam/asian_paints/products/packshots/metals-trucare-red-oxide-metal-primer-asian-paints.png',
        title: 'Red Oxide Metal Primer',
        titleHindi: ''
    },
    {
        img: 'https://static.asianpaints.com/content/dam/asian_paints/products/packshots/exterior-walls-ace-exterior-emulsion-asian-paints.png',
        title: 'Ace Exterior Emulsion',
        titleHindi: ''
    },
    {
        img: 'https://static.asianpaints.com/content/dam/asian_paints/products/packshots/exterior-walls-apex-shyne-dust-proof-packshot-asian-paints.png',
        title: 'Apex Shyne',
        titleHindi: ''
    },
])
</script>

<template>
    <div class="flex flex-wrap gap-5 p-3 justify-center">
        <div v-for="product in products">
            <Product :img="product.img" :title="product.title" :titleHindi="product.titleHindi"/>
        </div>
    </div>
</template>