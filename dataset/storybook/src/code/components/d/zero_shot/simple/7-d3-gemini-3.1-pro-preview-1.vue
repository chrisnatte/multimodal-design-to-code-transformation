<template>
  <div class="p-6 bg-surface-0 dark:bg-surface-900 flex flex-col gap-4 w-full max-w-[560px]">
    <Skeleton shape="circle" size="4.5rem" />
    <Skeleton width="16rem" height="1.25rem" />
    <Skeleton width="100%" height="1.25rem" />
    <Skeleton width="100%" height="4rem" />
  </div>
</template>

<script setup>
import Skeleton from 'primevue/skeleton';
</script>