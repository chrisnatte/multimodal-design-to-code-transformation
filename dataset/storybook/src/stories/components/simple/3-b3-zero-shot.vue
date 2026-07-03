<template>
  <div class="flex items-center gap-6">
    <div class="w-56">
      <Slider v-model="state.sliderValue" />
    </div>

    <div class="w-40">
      <InputNumber
        v-model="state.numberValue"
        showButtons
        buttonLayout="vertical"
        variant="filled"
        fluid
      />
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import Slider from 'primevue/slider';
import InputNumber from 'primevue/inputnumber';

const state = reactive({
  sliderValue: 2,
  numberValue: 2
});
</script>