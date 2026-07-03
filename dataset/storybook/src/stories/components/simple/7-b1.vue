<template>
  <div class="flex flex-col gap-4">
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Skeleton from 'primevue/skeleton'

const state = reactive({})
</script>