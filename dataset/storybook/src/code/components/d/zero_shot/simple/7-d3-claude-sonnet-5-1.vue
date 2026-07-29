<template>
  <div class="p-6 bg-white inline-block">
    <div class="flex flex-col gap-4" style="width: 512px;">
      <Skeleton shape="circle" size="72px"></Skeleton>
      <Skeleton width="256px" height="20px"></Skeleton>
      <Skeleton width="100%" height="20px"></Skeleton>
      <Skeleton width="100%" height="64px"></Skeleton>
    </div>
  </div>
</template>

<script setup>
import Skeleton from 'primevue/skeleton';
</script>