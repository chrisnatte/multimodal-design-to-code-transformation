<template>
  <div class="p-6 bg-surface-100 min-h-[271px] w-full">
    <div class="flex flex-col gap-4 w-full max-w-[560px]">
      <Skeleton shape="circle" size="72px" />
      <Skeleton width="48%" height="20px" borderRadius="6px" />
      <Skeleton width="100%" height="20px" borderRadius="6px" />
      <Skeleton width="100%" height="72px" borderRadius="8px" />
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import Skeleton from 'primevue/skeleton';

const state = reactive({});
</script>