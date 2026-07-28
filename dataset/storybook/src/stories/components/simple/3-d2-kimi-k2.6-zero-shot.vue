<template>
  <div class="flex items-center gap-6 w-[286px]">
    <Slider v-model="sliderValue" class="flex-1" />
    <InputNumber
      v-model="numberValue"
      showButtons
      buttonLayout="vertical"
      incrementButtonIcon="pi pi-plus"
      decrementButtonIcon="pi pi-minus"
      class="w-12"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Slider from 'primevue/slider';
import InputNumber from 'primevue/inputnumber';

const sliderValue = ref(26);
const numberValue = ref(2);
</script>