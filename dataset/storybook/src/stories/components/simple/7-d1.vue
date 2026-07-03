<template>
  <div class="p-6 bg-gray-100 min-h-screen">
    <div class="flex flex-col gap-4 w-full max-w-[560px]">
      <Skeleton shape="circle" size="72px" />
      <Skeleton height="20px" width="48%" borderRadius="6px" />
      <Skeleton height="20px" width="100%" borderRadius="6px" />
      <Skeleton height="64px" width="100%" borderRadius="6px" />
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Skeleton from 'primevue/skeleton'

const state = reactive({})
</script>