<template>
  <div class="flex h-[149px] w-[334px] flex-col bg-white p-6">
    <div class="flex h-[101px] w-full items-center gap-6">
      <Slider
        v-model="rating"
        :min="0"
        :max="8"
        :step="1"
        aria-label="Bewertung"
        class="rating-slider min-w-0 flex-1"
      />
      <InputNumber
        v-model="rating"
        inputId="rating-input"
        :min="0"
        :max="8"
        :step="1"
        showButtons
        buttonLayout="vertical"
        aria-label="Bewertung eingeben"
        class="rating-input-number"
      >
        <template #incrementbuttonicon>
          <span class="pi pi-plus" />
        </template>
        <template #decrementbuttonicon>
          <span class="pi pi-plus" />
        </template>
      </InputNumber>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import InputNumber from 'primevue/inputnumber';
import Slider from 'primevue/slider';

const rating = ref(2);
</script>

<style scoped>
:deep(.rating-slider.p-slider) {
  height: 3px;
  background: #e2e8f0;
  border-radius: 6px;
}

:deep(.rating-slider .p-slider-range) {
  background: #10b981;
  border-radius: 6px 0 0 6px;
}

:deep(.rating-slider .p-slider-handle) {
  width: 20px;
  height: 20px;
  margin-top: -9px;
  background: #e2e8f0;
  border: 0;
  box-shadow: none;
}

:deep(.rating-slider .p-slider-handle::before) {
  width: 16px;
  height: 16px;
  background: #ffffff;
  border-radius: 50%;
  box-shadow: none;
}

:deep(.rating-input-number) {
  width: 48px;
}

:deep(.rating-input-number .p-inputnumber-input) {
  width: 48px;
  height: 33px;
  padding: 7px 10.5px;
  text-align: center;
  border-color: #cbd5e1;
  border-radius: 0;
  box-shadow: none;
}

:deep(.rating-input-number .p-inputnumber-button) {
  width: 48px;
  height: 35px;
  padding: 0;
  color: #94a3b8;
  background: #ffffff;
  border-color: #cbd5e1;
  box-shadow: none;
}

:deep(.rating-input-number .p-inputnumber-increment-button) {
  border-radius: 6px 6px 0 0;
}

:deep(.rating-input-number .p-inputnumber-decrement-button) {
  border-radius: 0 0 6px 6px;
}

:deep(.rating-input-number .p-inputnumber-button:hover) {
  color: #94a3b8;
  background: #ffffff;
  border-color: #cbd5e1;
}
</style>