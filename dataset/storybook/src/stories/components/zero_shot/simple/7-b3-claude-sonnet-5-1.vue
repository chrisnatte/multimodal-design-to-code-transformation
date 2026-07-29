<template>
  <div class="flex flex-col p-6 bg-white w-fit">
    <div class="flex flex-col gap-4 w-[512px]">
      <Skeleton shape="circle" size="72px"></Skeleton>
      <Skeleton width="256px" height="20px"></Skeleton>
      <Skeleton width="100%" height="20px"></Skeleton>
      <Skeleton width="512px" height="64px"></Skeleton>
    </div>
  </div>
</template>

<script setup>
import Skeleton from 'primevue/skeleton';
</script>