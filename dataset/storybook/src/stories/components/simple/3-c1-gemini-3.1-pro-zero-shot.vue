<template>
  <div class="flex items-center justify-center p-8 gap-8">
    <Slider v-model="value" class="w-64" :min="0" :max="100" />
    <InputNumber
      v-model="value"
      showButtons
      buttonLayout="vertical"
      class="w-12"
      inputClass="text-center"
      decrementButtonIcon="pi pi-minus"
      incrementButtonIcon="pi pi-plus"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Slider from 'primevue/slider';
import InputNumber from 'primevue/inputnumber';

const value = ref(2);
</script>