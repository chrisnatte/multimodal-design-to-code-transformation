<template>
  <div class="flex items-center gap-8 p-6">
    <Slider v-model="sliderValue" class="w-56" />
    <InputNumber v-model="numberValue" showButtons buttonLayout="stacked" :min="0" :max="100" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Slider from 'primevue/slider';
import InputNumber from 'primevue/inputnumber';

const sliderValue = ref(20);
const numberValue = ref(2);
</script>