<template>
  <div class="flex flex-col items-start gap-4 p-6">
    <Skeleton shape="circle" size="4rem"></Skeleton>
    <Skeleton width="16rem" borderRadius="8px"></Skeleton>
    <Skeleton width="100%" borderRadius="8px"></Skeleton>
    <Skeleton width="100%" height="4rem" borderRadius="8px"></Skeleton>
  </div>
</template>

<script setup>
import Skeleton from 'primevue/skeleton';
</script>