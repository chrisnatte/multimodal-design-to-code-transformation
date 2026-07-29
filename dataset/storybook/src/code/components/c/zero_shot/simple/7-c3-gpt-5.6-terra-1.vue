<template>
    <div class="flex min-h-[272px] w-[560px] flex-col bg-white p-6">
        <Skeleton shape="circle" size="4.5rem" />
        <Skeleton width="16rem" height="1.25rem" class="mt-4" />
        <Skeleton width="100%" height="1.25rem" class="mt-4" />
        <Skeleton width="100%" height="4rem" class="mt-4" />
    </div>
</template>

<script setup>
import Skeleton from 'primevue/skeleton'
</script>