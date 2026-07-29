<template>
  <div class="flex w-64 items-center gap-6">
    <Slider v-model="rating" :min="0" :max="10" orientation="horizontal" :step="1" class="flex-1" />

    <InputNumber
      v-model="rating"
      :min="0"
      :max="10"
      :step="1"
      show-buttons
      button-layout="vertical"
      class="w-12"
    />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Slider from 'primevue/slider'
  import InputNumber from 'primevue/inputnumber'

  const rating = ref(2)
</script>
