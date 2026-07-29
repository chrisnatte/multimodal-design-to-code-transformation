<template>
  <div class="flex flex-col p-6 bg-white w-[334px]">
    <div class="flex flex-row items-center gap-6 w-full">
      <Slider
        v-model="sliderValue"
        class="flex-1"
        :min="0"
        :max="100"
      />
      <InputNumber
        v-model="sliderValue"
        showButtons
        buttonLayout="vertical"
        inputClass="w-12 text-center"
        :min="0"
        :max="100"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Slider from 'primevue/slider';
import InputNumber from 'primevue/inputnumber';

const sliderValue = ref(2);
</script>