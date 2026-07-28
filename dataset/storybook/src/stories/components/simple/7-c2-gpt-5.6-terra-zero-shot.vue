<template>
    <div class="min-h-[272px] bg-white px-6 py-6">
        <div class="flex flex-col gap-4">
            <Skeleton shape="circle" size="4.5rem" />
            <Skeleton width="16rem" height="1.25rem" />
            <Skeleton width="32rem" height="1.25rem" />
            <Skeleton width="32rem" height="4rem" />
        </div>
    </div>
</template>

<script setup>
import Skeleton from 'primevue/skeleton';
</script>