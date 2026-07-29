<template>
  <div class="flex w-[560px] flex-col gap-4 bg-white p-6">
    <Skeleton shape="circle" size="72px" />
    <Skeleton width="256px" height="20px" />
    <Skeleton width="100%" height="20px" />
    <Skeleton width="100%" height="64px" />
  </div>
</template>

<script setup lang="ts">
  import Skeleton from 'primevue/skeleton'
</script>