<template>
  <div class="p-6 bg-surface-0 min-h-screen">
    <div class="flex flex-col gap-4 max-w-3xl">
      <Skeleton shape="circle" size="4.5rem" />
      <Skeleton width="16rem" height="1.2rem" borderRadius="6px" />
      <Skeleton width="100%" height="1.2rem" borderRadius="6px" />
      <Skeleton width="100%" height="4.5rem" borderRadius="6px" />
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import Skeleton from 'primevue/skeleton';

const state = reactive({
  loading: true
});
</script>