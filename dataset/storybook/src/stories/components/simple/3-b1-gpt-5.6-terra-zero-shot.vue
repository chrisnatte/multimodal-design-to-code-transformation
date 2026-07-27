<template>
  <div class="flex h-[101px] w-[286px] items-center gap-6">
    <Slider v-model="value" class="flex-1" />
    <InputNumber
      v-model="value"
      showButtons
      buttonLayout="vertical"
      incrementButtonIcon="pi pi-plus"
      decrementButtonIcon="pi pi-plus"
      class="w-12"
      inputClass="w-12 text-center"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import InputNumber from 'primevue/inputnumber'
import Slider from 'primevue/slider'

const value = ref(2)
</script>