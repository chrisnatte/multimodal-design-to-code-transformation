<template>
  <div class="bg-white p-6 flex flex-col">
    <div class="flex flex-col gap-4 w-[512px]">
      <Skeleton shape="circle" size="4.5rem" />
      <Skeleton width="16rem" height="1.25rem" />
      <Skeleton width="100%" height="1.25rem" />
      <Skeleton width="100%" height="4rem" />
    </div>
  </div>
</template>

<script setup>
import Skeleton from 'primevue/skeleton';
</script>