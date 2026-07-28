<template>
    <div class="flex w-full max-w-[512px] flex-col gap-4" aria-busy="true">
        <Skeleton width="72px" height="72px" />
        <Skeleton width="256px" height="20px" />
        <Skeleton width="100%" height="20px" />
        <Skeleton width="100%" height="64px" />
    </div>
</template>

<script setup>
import Skeleton from 'primevue/skeleton';
</script>