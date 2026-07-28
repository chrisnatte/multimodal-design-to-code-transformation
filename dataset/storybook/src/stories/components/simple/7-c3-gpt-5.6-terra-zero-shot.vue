<template>
    <div class="flex min-h-[272px] flex-col gap-4 bg-white p-6">
        <Skeleton shape="circle" size="4.5rem" />
        <Skeleton width="16rem" height="1.25rem" />
        <Skeleton width="100%" height="1.25rem" />
        <Skeleton width="100%" height="4rem" />
    </div>
</template>

<script setup>
import Skeleton from 'primevue/skeleton';
</script>