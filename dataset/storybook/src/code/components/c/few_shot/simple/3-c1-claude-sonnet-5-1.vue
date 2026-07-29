<template>
  <div class="flex items-center gap-6 p-6">
    <Slider v-model="sliderValue" class="w-48" />
    <InputNumber v-model="numberValue" show-buttons button-layout="vertical" input-class="w-10 text-center" />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Slider from 'primevue/slider'
  import InputNumber from 'primevue/inputnumber'

  const sliderValue = ref(30)
  const numberValue = ref(2)
</script>