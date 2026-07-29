<template>
  <div class="flex h-[149px] items-center gap-6 p-6">
    <Slider v-model="sliderValue" class="w-56" />

    <InputNumber
      v-model="quantity"
      showButtons
      buttonLayout="vertical"
      :step="1"
      class="w-8"
      inputClass="w-8 !px-0 text-center"
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

<script setup>
import { ref } from 'vue'
import InputNumber from 'primevue/inputnumber'
import Slider from 'primevue/slider'

const sliderValue = ref(25)
const quantity = ref(2)
</script>