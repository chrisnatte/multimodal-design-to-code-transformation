<template>
  <div class="flex w-xl flex-col gap-4 p-6">
    <Skeleton shape="circle" size="4rem" />
    <Skeleton width="16rem" height="1rem" />
    <Skeleton width="100%" height="1.25rem" />
    <Skeleton width="100%" height="3.5rem" />
  </div>
</template>

<script setup lang="ts">
  import Skeleton from 'primevue/skeleton'
</script>