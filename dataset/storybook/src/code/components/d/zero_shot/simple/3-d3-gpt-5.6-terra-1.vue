<template>
  <div class="flex h-[149px] w-[334px] flex-col bg-white p-6">
    <div class="flex h-[101px] w-full items-center gap-6">
      <Slider v-model="sliderValue" class="flex-1" aria-label="Bewertung" />
      <InputNumber
        v-model="numberValue"
        showButtons
        buttonLayout="stacked"
        class="w-12"
        inputClass="w-12 text-center"
        aria-label="Bewertung eingeben"
      >
        <template #incrementbuttonicon>
          <span class="pi pi-plus" />
        </template>
        <template #decrementbuttonicon>
          <span class="pi pi-plus" />
        </template>
      </InputNumber>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import InputNumber from 'primevue/inputnumber'
import Slider from 'primevue/slider'

const sliderValue = ref(25)
const numberValue = ref(2)
</script>