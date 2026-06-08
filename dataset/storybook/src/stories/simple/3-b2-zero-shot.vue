<template>
  <div class="flex items-center gap-6">
    <Slider v-model="state.sliderValue" />
    <InputNumber
      v-model="state.numberValue"
      showButtons
      buttonLayout="vertical"
      variant="filled"
    />
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import Slider from 'primevue/slider';
import InputNumber from 'primevue/inputnumber';

const state = reactive({
  sliderValue: 50,
  numberValue: 2
});
</script>