<script setup lang="ts">
const isHindiEnabled = ref(false)
</script>
<template>
   <div class="m-10 max-w-fit mx-auto flex flex-grow-col gap-3">
        <div >
            <UToggle v-model="isHindiEnabled"/>
        </div>
        <div>
            <span>हिन्दी</span>
        </div>
        
        
    </div> 
</template>