<template>
  <div class="min-h-screen bg-surface-100 flex items-start justify-start p-6">
    <div class="w-full max-w-[560px] flex flex-col gap-4">
      <Skeleton shape="circle" size="4.5rem" />
      <Skeleton width="48%" height="1.2rem" borderRadius="0.5rem" />
      <Skeleton width="100%" height="1.2rem" borderRadius="0.5rem" />
      <Skeleton width="100%" height="5rem" borderRadius="0.5rem" />
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import Skeleton from 'primevue/skeleton';

const state = reactive({});
</script>