<template>
  <div class="flex items-center justify-center p-12 gap-8">
    <Slider v-model="value" class="w-48" />
    <InputNumber 
      v-model="value" 
      showButtons 
      buttonLayout="vertical" 
      class="w-12" 
      inputClass="text-center"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Slider from 'primevue/slider';
import InputNumber from 'primevue/inputnumber';

const value = ref(2);
</script>