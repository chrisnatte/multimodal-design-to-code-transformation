<template>
  <div class="flex items-center gap-6 p-6">
    <Slider v-model="sliderValue" class="w-56" />
    <InputNumber v-model="numberValue" show-buttons button-layout="stacked" input-class="w-12 text-center" />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Slider from 'primevue/slider'
  import InputNumber from 'primevue/inputnumber'

  const sliderValue = ref(25)
  const numberValue = ref(2)
</script>