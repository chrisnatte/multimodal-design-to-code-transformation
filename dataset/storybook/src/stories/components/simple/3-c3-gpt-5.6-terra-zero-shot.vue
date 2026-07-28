<template>
  <div class="flex h-[149px] w-[318px] items-center justify-center bg-white">
    <div class="flex items-center gap-4">
      <Slider v-model="sliderValue" :min="0" :max="10" class="w-[214px]" aria-label="Value slider" />
      <InputNumber
        v-model="numberValue"
        :min="0"
        :max="10"
        show-buttons
        button-layout="vertical"
        class="w-8"
        input-class="w-8 text-center"
        aria-label="Numeric value"
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
import { ref, watch } from 'vue'
import InputNumber from 'primevue/inputnumber'
import Slider from 'primevue/slider'

const sliderValue = ref(2)
const numberValue = ref(2)

watch(sliderValue, (value) => {
  numberValue.value = value
})

watch(numberValue, (value) => {
  sliderValue.value = value ?? 0
})
</script>