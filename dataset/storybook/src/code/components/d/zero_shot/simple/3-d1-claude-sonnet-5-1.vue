<template>
  <div class="bg-white p-6">
    <div class="flex items-center gap-6 w-full">
      <Slider v-model="sliderValue" class="flex-grow" />
      <InputNumber
        v-model="sliderValue"
        showButtons
        buttonLayout="vertical"
        :min="0"
        :max="10"
        class="w-12"
        inputClass="w-12 text-center"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Slider from 'primevue/slider'
import InputNumber from 'primevue/inputnumber'

const sliderValue = ref(2)
</script>