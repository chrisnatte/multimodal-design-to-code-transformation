<template>
  <div class="p-4 flex flex-col gap-4">
    <Skeleton shape="circle" size="4rem" />
    <Skeleton width="16rem" height="1rem" />
    <Skeleton width="100%" height="1.25rem" />
    <Skeleton width="100%" height="3rem" />
  </div>
</template>

<script setup>
import Skeleton from 'primevue/skeleton'
</script>