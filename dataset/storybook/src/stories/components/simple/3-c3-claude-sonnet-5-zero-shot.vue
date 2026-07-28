<template>
  <div class="flex items-center gap-6 p-4">
    <Slider v-model="sliderValue" class="w-56" />
    <InputNumber
      v-model="numberValue"
      showButtons
      buttonLayout="stacked"
      :min="0"
      :max="100"
      inputClass="w-12 text-center"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Slider from 'primevue/slider';
import InputNumber from 'primevue/inputnumber';

const sliderValue = ref(2);
const numberValue = ref(2);
</script>