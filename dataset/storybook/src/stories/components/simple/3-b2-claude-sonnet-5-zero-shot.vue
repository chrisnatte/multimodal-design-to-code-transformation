<template>
  <div class="flex items-center gap-6" style="width: 286px;">
    <Slider v-model="sliderValue" class="flex-1" :min="0" :max="100" />
    <InputNumber
      v-model="sliderValue"
      showButtons
      buttonLayout="vertical"
      style="width: 48px"
      :min="0"
      :max="100"
      inputClass="text-center"
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
import Slider from 'primevue/slider';
import InputNumber from 'primevue/inputnumber';

const sliderValue = ref(2);
</script>