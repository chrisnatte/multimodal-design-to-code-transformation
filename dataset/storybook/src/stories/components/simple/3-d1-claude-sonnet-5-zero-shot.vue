<template>
  <div class="flex items-center gap-6 w-[286px]">
    <Slider v-model="sliderValue" class="flex-1" />
    <InputNumber
      v-model="numberValue"
      showButtons
      buttonLayout="vertical"
      :min="0"
      :max="100"
      class="w-12"
      inputClass="w-12 text-center"
    >
      <template #incrementicon>
        <span class="pi pi-plus" />
      </template>
      <template #decrementicon>
        <span class="pi pi-plus" />
      </template>
    </InputNumber>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Slider from 'primevue/slider'
import InputNumber from 'primevue/inputnumber'

const sliderValue = ref(2)
const numberValue = ref(2)
</script>