<template>
  <div class="p-6 bg-white">
    <div class="flex flex-col gap-4">
      <Skeleton shape="circle" size="4rem"></Skeleton>
      <Skeleton width="16rem" height="1rem"></Skeleton>
      <Skeleton width="100%" height="1.25rem"></Skeleton>
      <Skeleton width="100%" height="3rem"></Skeleton>
    </div>
  </div>
</template>

<script setup>
import Skeleton from 'primevue/skeleton';
</script>