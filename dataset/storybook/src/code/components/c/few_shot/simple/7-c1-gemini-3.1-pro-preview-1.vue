<template>
  <div class="flex w-full max-w-lg flex-col gap-4 p-6">
    <Skeleton shape="circle" size="5rem" class="mb-2" />
    <Skeleton width="50%" height="1.5rem" />
    <Skeleton width="100%" height="1.5rem" />
    <Skeleton width="100%" height="5rem" />
  </div>
</template>

<script setup lang="ts">
import Skeleton from 'primevue/skeleton'
</script>