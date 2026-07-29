<template>
  <div class="bg-white p-6 w-[334px]">
    <div class="flex items-center gap-6">
      <Slider v-model="value" class="w-full grow" :min="0" :max="10" />
      <InputNumber
        v-model="value"
        inputId="stacked-buttons"
        showButtons
        buttonLayout="stacked"
        :min="0"
        :max="10"
        class="w-12"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Slider from 'primevue/slider';
import InputNumber from 'primevue/inputnumber';

const value = ref(2);
</script>