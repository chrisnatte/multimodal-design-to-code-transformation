<template>
  <div class="flex min-h-[272px] flex-col gap-4 bg-white p-6">
    <Skeleton shape="circle" class="h-[72px] w-[72px]" />
    <Skeleton class="h-5 w-64" />
    <Skeleton class="h-5 w-full" />
    <Skeleton class="h-16 w-full" />
  </div>
</template>

<script setup>
import Skeleton from 'primevue/skeleton'
</script>