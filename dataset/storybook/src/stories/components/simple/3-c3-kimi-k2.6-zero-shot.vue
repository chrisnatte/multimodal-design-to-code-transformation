<template>
  <div class="flex items-center justify-center min-h-screen bg-white">
    <div class="flex items-center gap-8 w-full max-w-lg px-6">
      <Slider v-model="value" :min="0" :max="10" :step="1" class="flex-1" />
      <InputNumber
        v-model="value"
        :min="0"
        :max="10"
        :step="1"
        showButtons
        buttonLayout="stacked"
        inputClass="text-center"
        class="w-20"
      >
        <template #incrementbuttonicon>
          <span class="pi pi-plus" />
        </template>
        <template #decrementbuttonicon>
          <span class="pi pi-minus" />
        </template>
      </InputNumber>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Slider from 'primevue/slider';
import InputNumber from 'primevue/inputnumber';

const value = ref(2);
</script>