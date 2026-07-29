<template>
  <div class="flex items-center gap-6 p-6">
    <Slider v-model="sliderValue" class="w-[214px]" aria-label="Wert auswählen" />
    <InputNumber
      v-model="numberValue"
      show-buttons
      button-layout="stacked"
      :min="0"
      :max="10"
      class="w-8"
      input-class="w-8 text-center"
      aria-label="Anzahl"
    >
      <template #incrementbuttonicon>
        <span class="pi pi-plus" />
      </template>
      <template #decrementbuttonicon>
        <span class="pi pi-plus" />
      </template>
    </InputNumber>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import InputNumber from 'primevue/inputnumber'
import Slider from 'primevue/slider'

const sliderValue = ref(26)
const numberValue = ref(2)
</script>