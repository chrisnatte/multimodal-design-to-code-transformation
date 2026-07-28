<template>
  <div class="flex h-[101px] w-[270px] items-center gap-6">
    <Slider v-model="sliderValue" class="flex-1" />

    <InputNumber
      v-model="numberValue"
      showButtons
      buttonLayout="vertical"
      incrementButtonIcon="pi pi-plus"
      decrementButtonIcon="pi pi-plus"
      class="figma-input-number h-[101px] w-8"
    />
  </div>
</template>

<style scoped>
:deep(.p-slider) {
  height: 3px;
  background: #e2e8f0;
  border-radius: 6px;
}

:deep(.p-slider-range) {
  background: #10b981;
  border-radius: 6px 0 0 6px;
}

:deep(.p-slider-handle) {
  width: 20px;
  height: 20px;
  margin-top: -8.5px;
  margin-left: -10px;
  background: #ffffff;
  border: 2px solid #e2e8f0;
  box-shadow: none;
}

:deep(.figma-input-number) {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

:deep(.figma-input-number .p-inputnumber-input) {
  order: 2;
  width: 32px;
  height: 33px;
  padding: 7px 10px;
  border-color: #cbd5e1;
  border-radius: 0;
  text-align: center;
  font-size: 14px;
  box-shadow: none;
}

:deep(.figma-input-number .p-inputnumber-button-group) {
  display: contents;
}

:deep(.figma-input-number .p-inputnumber-button) {
  width: 32px;
  height: 34px;
  min-width: 32px;
  padding: 0;
  color: #94a3b8;
  background: #ffffff;
  border-color: #cbd5e1;
  border-radius: 0;
  box-shadow: none;
}

:deep(.figma-input-number .p-inputnumber-button-up) {
  order: 1;
  border-radius: 6px 6px 0 0;
}

:deep(.figma-input-number .p-inputnumber-button-down) {
  order: 3;
  border-radius: 0 0 6px 6px;
}

:deep(.figma-input-number .p-inputnumber-button .p-icon) {
  width: 14px;
  height: 14px;
}
</style>

<script setup>
import { ref } from 'vue'
import Slider from 'primevue/slider'
import InputNumber from 'primevue/inputnumber'

const sliderValue = ref(26)
const numberValue = ref(2)
</script>