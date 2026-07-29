<template>
  <div class="flex w-[560px] flex-col bg-white p-6">
    <div class="flex w-full flex-col gap-4" aria-busy="true">
      <Skeleton width="72px" height="72px" />
      <Skeleton width="256px" height="20px" />
      <Skeleton width="100%" height="20px" />
      <Skeleton width="100%" height="64px" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Skeleton from 'primevue/skeleton'
</script>