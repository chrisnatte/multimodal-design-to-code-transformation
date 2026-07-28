<template>
  <div class="flex items-center gap-6 w-[286px]">
    <Slider v-model="sliderValue" class="w-full flex-1" />
    <InputNumber
      v-model="sliderValue"
      showButtons
      buttonLayout="vertical"
      :step="1"
      inputClass="w-12 text-center"
      class="w-12"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Slider from 'primevue/slider';
import InputNumber from 'primevue/inputnumber';

const sliderValue = ref(2);
</script>