<template>
  <div class="flex items-center gap-6 w-[286px]">
    <Slider
      v-model="sliderValue"
      class="flex-1"
      :min="0"
      :max="100"
    />
    <InputNumber
      v-model="inputValue"
      showButtons
      buttonLayout="vertical"
      class="w-12"
      inputClass="w-12 text-center"
      :min="0"
      :max="100"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Slider from 'primevue/slider'
import InputNumber from 'primevue/inputnumber'

const sliderValue = ref(26)
const inputValue = ref(2)
</script>