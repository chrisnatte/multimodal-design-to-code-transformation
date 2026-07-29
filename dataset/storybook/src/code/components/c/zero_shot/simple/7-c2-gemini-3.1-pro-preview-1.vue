<template>
  <div class="flex flex-col gap-4 p-6 w-full max-w-2xl bg-surface-0 dark:bg-surface-900 rounded-lg">
    <Skeleton shape="circle" size="5rem" />
    <Skeleton width="50%" height="1.25rem" borderRadius="16px" />
    <Skeleton width="100%" height="1.25rem" borderRadius="16px" />
    <Skeleton width="100%" height="4rem" borderRadius="8px" />
  </div>
</template>

<script setup>
import Skeleton from 'primevue/skeleton';
</script>