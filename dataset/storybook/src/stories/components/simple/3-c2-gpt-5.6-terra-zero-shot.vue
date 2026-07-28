<template>
  <div class="flex h-[149px] w-[318px] items-center gap-6 bg-white px-6">
    <Slider v-model="sliderValue" :min="0" :max="10" class="w-[214px]" aria-label="Value slider" />

    <InputNumber
      v-model="numberValue"
      showButtons
      buttonLayout="vertical"
      :min="0"
      :max="99"
      class="w-8"
      aria-label="Number value"
    >
      <template #incrementbuttonicon>
        <span class="pi pi-plus" />
      </template>
      <template #decrementbuttonicon>
        <span class="pi pi-minus" />
      </template>
    </InputNumber>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import InputNumber from 'primevue/inputnumber';
import Slider from 'primevue/slider';

const sliderValue = ref(2.6);
const numberValue = ref(2);
</script>