<template>
  <div class="flex flex-col gap-4 w-[32rem]">
    <Skeleton shape="circle" width="4.5rem" height="4.5rem" />
    <Skeleton width="16rem" height="1.25rem" />
    <Skeleton class="w-full" height="1.25rem" />
    <Skeleton class="w-full" height="4rem" />
  </div>
</template>

<script setup>
import Skeleton from 'primevue/skeleton';
</script>