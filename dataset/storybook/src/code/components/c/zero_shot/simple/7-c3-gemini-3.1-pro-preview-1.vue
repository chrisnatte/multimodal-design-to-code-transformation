<template>
    <div class="flex flex-col gap-4 w-full">
        <Skeleton shape="circle" size="5rem" />
        <Skeleton width="45%" height="1.5rem" />
        <Skeleton width="100%" height="1.5rem" />
        <Skeleton width="100%" height="5rem" />
    </div>
</template>

<script setup>
import Skeleton from 'primevue/skeleton';
</script>