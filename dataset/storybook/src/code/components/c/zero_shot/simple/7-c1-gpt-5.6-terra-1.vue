<template>
  <div class="flex flex-col p-6">
    <Skeleton shape="circle" class="h-[72px] w-[72px]" />
    <Skeleton class="mt-4 h-5 w-64" />
    <Skeleton class="mt-4 h-5 w-full" />
    <Skeleton class="mt-4 h-16 w-full" />
  </div>
</template>

<script setup>
import Skeleton from 'primevue/skeleton'
</script>