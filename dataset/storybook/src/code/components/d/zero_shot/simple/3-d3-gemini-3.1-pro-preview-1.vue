<template>
  <div class="flex flex-row items-center gap-6 p-6 bg-white w-[334px]">
    <Slider v-model="value" class="flex-1" />
    <InputNumber
      v-model="value"
      showButtons
      buttonLayout="vertical"
      incrementButtonIcon="pi pi-plus"
      decrementButtonIcon="pi pi-plus"
      class="w-12"
      inputClass="text-center w-full"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Slider from 'primevue/slider';
import InputNumber from 'primevue/inputnumber';

const value = ref(2);
</script>