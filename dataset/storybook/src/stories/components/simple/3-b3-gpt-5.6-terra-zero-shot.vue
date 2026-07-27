<template>
  <div class="flex h-[101px] w-[286px] items-center gap-6">
    <Slider
      v-model="sliderValue"
      class="flex-1"
      aria-label="Value slider"
    />
    <InputNumber
      v-model="quantity"
      showButtons
      buttonLayout="vertical"
      class="h-[101px] w-12"
      inputClass="w-12 text-center"
      aria-label="Quantity"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import InputNumber from 'primevue/inputnumber'
import Slider from 'primevue/slider'

const sliderValue = ref(26)
const quantity = ref(2)
</script>