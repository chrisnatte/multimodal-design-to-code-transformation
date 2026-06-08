<template>
  <div class="flex flex-col gap-4">
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
  </div>
</template>

<script setup>
import Skeleton from 'primevue/skeleton'
import { reactive } from 'vue'

const state = reactive({})
</script>