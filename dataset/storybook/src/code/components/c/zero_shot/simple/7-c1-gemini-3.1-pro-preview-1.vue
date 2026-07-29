<template>
  <div class="flex flex-col gap-4 p-8 w-full max-w-4xl bg-white">
    <Skeleton shape="circle" size="6rem" class="mb-2"></Skeleton>
    <Skeleton width="24rem" height="1.5rem" borderRadius="1rem"></Skeleton>
    <Skeleton width="100%" height="1.5rem" borderRadius="1rem"></Skeleton>
    <Skeleton width="100%" height="8rem" borderRadius="0.5rem"></Skeleton>
  </div>
</template>

<script setup>
import Skeleton from 'primevue/skeleton';
</script>