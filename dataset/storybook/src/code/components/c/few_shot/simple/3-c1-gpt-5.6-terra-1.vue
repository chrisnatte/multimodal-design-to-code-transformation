<template>
  <div class="flex items-center gap-6 p-6">
    <Slider v-model="sliderValue" :min="0" :max="10" class="w-[214px]" />
    <InputNumber
      v-model="numberValue"
      :min="0"
      :max="10"
      show-buttons
      button-layout="vertical"
      increment-button-icon="pi pi-plus"
      decrement-button-icon="pi pi-plus"
      class="w-8"
      input-class="w-8 !border-x-0 !rounded-none !text-center"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import InputNumber from 'primevue/inputnumber'
import Slider from 'primevue/slider'

const sliderValue = ref(2)
const numberValue = ref(2)
</script>