<template>
  <div class="flex flex-col gap-4 p-4 w-full max-w-lg">
    <Skeleton shape="circle" size="4rem" />
    <Skeleton width="60%" height="1rem" />
    <Skeleton width="100%" height="1rem" />
    <Skeleton width="100%" height="4rem" />
  </div>
</template>

<script setup>
import Skeleton from 'primevue/skeleton';
</script>