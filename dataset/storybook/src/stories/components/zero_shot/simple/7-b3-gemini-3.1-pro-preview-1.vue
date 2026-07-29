<template>
  <div class="bg-white p-6 flex flex-col">
    <div class="flex flex-col gap-4 w-[512px]">
      <Skeleton width="72px" height="72px" />
      <Skeleton width="256px" height="20px" />
      <Skeleton width="100%" height="20px" />
      <Skeleton width="100%" height="64px" />
    </div>
  </div>
</template>

<script setup>
import Skeleton from 'primevue/skeleton';
</script>