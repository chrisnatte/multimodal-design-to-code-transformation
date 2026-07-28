<template>
  <div class="flex flex-col gap-4 w-[32rem]">
    <Skeleton shape="circle" size="4.5rem" />
    <Skeleton width="16rem" height="1.25rem" />
    <Skeleton width="100%" height="1.25rem" />
    <Skeleton width="100%" height="4rem" />
  </div>
</template>

<script setup>
import Skeleton from 'primevue/skeleton';
</script>