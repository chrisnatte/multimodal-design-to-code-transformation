<template>
  <div class="flex flex-col gap-4 p-6 bg-white w-full max-w-2xl rounded-xl">
    <Skeleton shape="circle" size="5rem" class="mb-2"></Skeleton>
    <Skeleton width="45%" height="1.5rem" borderRadius="16px"></Skeleton>
    <Skeleton width="100%" height="1.5rem" borderRadius="16px"></Skeleton>
    <Skeleton width="100%" height="6rem" borderRadius="8px"></Skeleton>
  </div>
</template>

<script setup>
import Skeleton from 'primevue/skeleton';
</script>