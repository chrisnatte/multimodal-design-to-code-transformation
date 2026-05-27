<template>
  <div class="flex items-center gap-6">
    <Slider v-model="state.sliderValue" :disabled="false" orientation="horizontal" class="w-56" />
    <InputNumber
      v-model="state.inputNumberValue"
      buttonLayout="vertical"
      showButtons
      variant="filled"
      :disabled="false"
    />
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import Slider from 'primevue/slider';
import InputNumber from 'primevue/inputnumber';

const state = reactive({
  sliderValue: 2,
  inputNumberValue: 2
});
</script>