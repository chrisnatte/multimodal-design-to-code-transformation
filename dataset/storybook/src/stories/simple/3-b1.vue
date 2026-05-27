<template>
  <div class="flex items-center gap-6">
    <Slider v-model="state.sliderValue" class="w-64" :disabled="false" />

    <InputNumber
      v-model="state.numberValue"
      showButtons
      buttonLayout="vertical"
      :disabled="false"
      :invalid="false"
      fluid
    />
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Slider from 'primevue/slider'
import InputNumber from 'primevue/inputnumber'

const state = reactive({
  sliderValue: 2,
  numberValue: 2
})
</script>