<template>
  <div class="flex items-center gap-8 p-4">
    <Slider v-model="sliderValue" class="w-64" />
    <InputNumber v-model="sliderValue" showButtons buttonLayout="vertical" :min="0" :max="100">
      <template #incrementbuttonicon>
        <span class="pi pi-plus" />
      </template>
      <template #decrementbuttonicon>
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
</script>