<template>
  <div class="p-6 bg-surface-0 dark:bg-surface-900">
    <div class="mb-4">
      <Skeleton shape="circle" size="4rem"></Skeleton>
    </div>
    <div class="mb-4">
      <Skeleton width="15rem" height="1rem"></Skeleton>
    </div>
    <div class="mb-4">
      <Skeleton width="100%" height="1.2rem"></Skeleton>
    </div>
    <div>
      <Skeleton width="100%" height="3rem"></Skeleton>
    </div>
  </div>
</template>

<script setup>
import Skeleton from 'primevue/skeleton';
</script>