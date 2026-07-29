<template>
  <div class="flex w-full flex-col bg-white p-6">
    <div class="flex w-full flex-col gap-4">
      <Skeleton shape="circle" size="72px" />
      <Skeleton width="256px" height="20px" />
      <Skeleton width="100%" height="20px" />
      <Skeleton width="100%" height="64px" />
    </div>
  </div>
</template>

<script setup>
import Skeleton from 'primevue/skeleton'
</script>