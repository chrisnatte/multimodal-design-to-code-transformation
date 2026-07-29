<template>
  <div class="p-6 bg-white flex flex-col w-[560px]">
    <div class="flex flex-col gap-4 w-full">
      <Skeleton shape="circle" size="72px" />
      <Skeleton width="256px" height="20px" />
      <Skeleton width="100%" height="20px" />
      <Skeleton width="100%" height="64px" />
    </div>
  </div>
</template>

<script setup>
import Skeleton from 'primevue/skeleton';
</script>