<template>
  <div class="flex items-center gap-8 p-8">
    <Slider v-model="sliderValue" class="w-48" />
    <InputNumber
      v-model="numberValue"
      showButtons
      buttonLayout="vertical"
      incrementButtonIcon="pi pi-plus"
      decrementButtonIcon="pi pi-plus"
      class="w-12"
      inputClass="text-center"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Slider from 'primevue/slider'
import InputNumber from 'primevue/inputnumber'

const sliderValue = ref(20)
const numberValue = ref(2)
</script>