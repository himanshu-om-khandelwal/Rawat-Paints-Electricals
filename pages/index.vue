<script setup lang="ts">
</script>

<template>
    <div class="flex flex-col min-h-screen flex-grow">
        <!-- Header -->
        <div>
            <WebHeader />
        </div>

        <!-- Main content -->
        <div class="flex-1">
            <LangToggle />
            <div>
                <Products />
            </div>
        </div>

        <!-- Footer -->
        <div class="mt-10">
            <WebFooter />
        </div>
    </div>
</template>