<template>
  <div class="flex flex-col gap-4 w-[512px]">
    <Skeleton shape="circle" size="72px" />
    <Skeleton width="256px" height="20px" />
    <Skeleton width="512px" height="20px" />
    <Skeleton width="512px" height="64px" />
  </div>
</template>

<script setup>
import Skeleton from 'primevue/skeleton';
</script>