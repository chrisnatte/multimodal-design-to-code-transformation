<template>
  <div class="flex items-center gap-6">
    <Slider v-model="state.sliderValue" :disabled="false" class="w-48" />

    <InputNumber
      v-model="state.inputNumberValue"
      showButtons
      buttonLayout="vertical"
      :disabled="false"
      :invalid="false"
      class="w-24"
      inputClass="text-center"
    />
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Slider from 'primevue/slider'
import InputNumber from 'primevue/inputnumber'

const state = reactive({
  sliderValue: 2,
  inputNumberValue: 2
})
</script>