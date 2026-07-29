<template>
  <div class="flex w-md flex-col gap-4 p-6">
    <Skeleton shape="circle" size="4rem" />
    <Skeleton width="15rem" height="1rem" />
    <Skeleton width="100%" height="1.5rem" />
    <Skeleton width="100%" height="3rem" />
  </div>
</template>

<script setup lang="ts">
  import Skeleton from 'primevue/skeleton'
</script>