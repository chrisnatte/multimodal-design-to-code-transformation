<template>
  <Card class="w-full max-w-xl bg-gray-100 border-0 shadow-none rounded-none">
    <template #content>
      <div class="flex flex-col gap-4 p-6">
        <Skeleton shape="circle" size="4rem" class="bg-gray-300" />
        <Skeleton width="50%" height="1.25rem" class="bg-gray-300 rounded-md" />
        <Skeleton width="100%" height="1.25rem" class="bg-gray-300 rounded-md" />
        <Skeleton width="100%" height="4rem" class="bg-gray-300 rounded-md" />
      </div>
    </template>
  </Card>
</template>

<script setup>
import { reactive } from 'vue'
import Card from 'primevue/card'
import Skeleton from 'primevue/skeleton'

const state = reactive({
  loading: true
})
</script>