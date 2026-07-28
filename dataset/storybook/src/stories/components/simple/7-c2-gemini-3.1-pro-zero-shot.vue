<template>
  <div class="flex flex-col gap-4 p-4 w-full max-w-2xl">
    <Skeleton shape="circle" size="5rem" />
    <Skeleton width="45%" height="1.5rem" />
    <Skeleton width="100%" height="1.5rem" />
    <Skeleton width="100%" height="6rem" />
  </div>
</template>

<script setup>
import Skeleton from 'primevue/skeleton';
</script>