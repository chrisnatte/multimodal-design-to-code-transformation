<template>
  <div class="w-[560px] bg-white p-6">
    <div class="flex flex-col gap-4">
      <Skeleton shape="circle" size="4.5rem" />
      <Skeleton width="16rem" height="1.25rem" />
      <Skeleton width="100%" height="1.25rem" />
      <Skeleton width="100%" height="4rem" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import Skeleton from 'primevue/skeleton'
</script>