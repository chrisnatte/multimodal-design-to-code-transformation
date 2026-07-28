<template>
  <div class="flex h-[101px] w-[270px] items-center gap-6">
    <Slider
      v-model="value"
      :min="0"
      :max="8"
      :step="1"
      aria-label="Value slider"
      class="w-[214px]"
    />

    <InputNumber
      v-model="value"
      :min="0"
      :max="8"
      :step="1"
      showButtons
      buttonLayout="vertical"
      :useGrouping="false"
      aria-label="Value"
      class="number-control w-8"
    >
      <template #incrementbuttonicon>
        <span class="pi pi-plus" />
      </template>
      <template #decrementbuttonicon>
        <span class="pi pi-plus" />
      </template>
    </InputNumber>
  </div>
</template>

<style scoped>
:deep(.p-slider) {
  height: 3px;
  background: #e2e8f0;
  border-radius: 9999px;
}

:deep(.p-slider-range) {
  background: #10b981;
}

:deep(.p-slider-handle) {
  width: 20px;
  height: 20px;
  margin-top: -8.5px;
  border: 2px solid #dbe4ef;
  background: #ffffff;
  box-shadow: none;
}

:deep(.number-control.p-inputnumber) {
  display: flex;
  flex-direction: column;
  width: 32px;
}

:deep(.number-control .p-inputnumber-input) {
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

:deep(.number-control .p-inputnumber-button) {
  width: 32px;
  height: 35px;
  min-width: 32px;
  padding: 0;
  border-color: #cbd5e1;
  border-radius: 0;
  background: #ffffff;
  color: #94a3b8;
  box-shadow: none;
}

:deep(.number-control .p-inputnumber-increment-button) {
  order: 1;
  border-radius: 6px 6px 0 0;
}

:deep(.number-control .p-inputnumber-decrement-button) {
  order: 3;
  border-radius: 0 0 6px 6px;
}

:deep(.number-control .p-button-icon) {
  font-size: 14px;
}
</style>

<script setup>
import { ref } from 'vue'
import InputNumber from 'primevue/inputnumber'
import Slider from 'primevue/slider'

const value = ref(2)
</script>