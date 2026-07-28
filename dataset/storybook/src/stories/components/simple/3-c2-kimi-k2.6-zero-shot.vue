<template>
  <div class="flex items-center justify-center w-full min-h-screen p-8 bg-white">
    <div class="flex items-center gap-6 w-full max-w-md">
      <Slider v-model="value" :max="10" class="flex-1" />
      <InputNumber
        v-model="value"
        showButtons
        buttonLayout="vertical"
        style="width: 3rem"
        :min="0"
        :max="10"
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