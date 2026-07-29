<template>
  <div class="flex w-[560px] flex-col p-6">
    <div class="flex w-[512px] flex-col gap-4">
      <Skeleton shape="circle" size="72px" />
      <Skeleton width="256px" height="20px" />
      <Skeleton width="100%" height="20px" />
      <Skeleton width="100%" height="64px" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import Skeleton from 'primevue/skeleton'
</script>