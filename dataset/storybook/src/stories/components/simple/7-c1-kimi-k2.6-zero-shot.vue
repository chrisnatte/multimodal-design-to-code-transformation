<template>
  <div class="flex flex-col gap-4 p-6 w-full max-w-xl">
    <Skeleton shape="circle" size="4rem" />
    <Skeleton width="15rem" height="1.25rem" class="rounded-md" />
    <Skeleton width="100%" height="1.25rem" class="rounded-md" />
    <Skeleton width="100%" height="4rem" class="rounded-md" />
  </div>
</template>

<script setup>
import Skeleton from 'primevue/skeleton';
</script>