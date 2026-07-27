<template>
  <div class="flex items-center gap-6" style="width: 286px;">
    <Slider v-model="sliderValue" class="flex-1" :min="0" :max="100" />
    <InputNumber
      v-model="numberValue"
      showButtons
      buttonLayout="vertical"
      :min="0"
      :max="100"
      inputClass="w-12 text-center"
      class="w-12"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Slider from 'primevue/slider';
import InputNumber from 'primevue/inputnumber';

const sliderValue = ref(35);
const numberValue = ref(2);
</script>