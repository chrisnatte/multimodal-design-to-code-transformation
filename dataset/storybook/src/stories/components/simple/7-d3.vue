<template>
  <div class="p-6 bg-gray-100 w-full max-w-[560px] flex flex-col gap-4">
    <Skeleton shape="circle" size="72px" />
    <Skeleton width="50%" height="20px" borderRadius="6px" />
    <Skeleton width="100%" height="20px" borderRadius="6px" />
    <Skeleton width="100%" height="96px" borderRadius="6px" />
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import Skeleton from 'primevue/skeleton';

const state = reactive({});
</script>