<template>
  <div class="flex items-center gap-6 w-[286px] h-[101px]">
    <Slider v-model="sliderValue" class="flex-1" />
    <InputNumber v-model="numberValue" showButtons class="w-12 h-[101px]" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Slider from 'primevue/slider';
import InputNumber from 'primevue/inputnumber';

const sliderValue = ref(25);
const numberValue = ref(2);
</script>