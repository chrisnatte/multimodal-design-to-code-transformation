<template>
  <div class="flex flex-col gap-4 p-6">
    <Skeleton shape="circle" size="4rem"></Skeleton>
    <Skeleton width="50%" height="1.5rem"></Skeleton>
    <Skeleton width="100%" height="1.5rem"></Skeleton>
    <Skeleton width="100%" height="4rem"></Skeleton>
  </div>
</template>

<script setup>
import Skeleton from 'primevue/skeleton';
</script>