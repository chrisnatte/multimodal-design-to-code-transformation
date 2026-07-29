<template>
    <div class="flex flex-col bg-white p-6">
        <div class="flex w-[512px] flex-col gap-4">
            <Skeleton width="72px" height="72px" />
            <Skeleton width="256px" height="20px" />
            <Skeleton width="512px" height="20px" />
            <Skeleton width="512px" height="64px" />
        </div>
    </div>
</template>

<script setup>
import Skeleton from 'primevue/skeleton';
</script>