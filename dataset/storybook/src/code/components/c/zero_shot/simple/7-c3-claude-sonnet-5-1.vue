<template>
  <div class="p-6 bg-surface-0 dark:bg-surface-900">
    <Skeleton shape="circle" size="4rem" class="mb-4"></Skeleton>
    <Skeleton width="16rem" height="1rem" class="mb-4"></Skeleton>
    <Skeleton width="100%" height="1.25rem" class="mb-4"></Skeleton>
    <Skeleton width="100%" height="3rem"></Skeleton>
  </div>
</template>

<script setup>
import Skeleton from 'primevue/skeleton';
</script>