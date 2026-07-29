<template>
  <div class="flex w-[334px] items-center gap-6 p-6">
    <Slider v-model="sliderValue" class="flex-1" />
    <InputNumber
      v-model="sliderValue"
      show-buttons
      button-layout="vertical"
      :input-style="{ width: '48px' }"
      class="w-12"
    />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Slider from 'primevue/slider'
  import InputNumber from 'primevue/inputnumber'

  const sliderValue = ref(2)
</script>