<template>
  <div class="flex items-center gap-8 p-6">
    <Slider v-model="sliderValue" class="w-56" />
    <InputNumber
      v-model="numberValue"
      show-buttons
      button-layout="vertical"
      style="width: 3rem"
      :min="0"
      :max="99"
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
  import Slider from 'primevue/slider'
  import InputNumber from 'primevue/inputnumber'

  const sliderValue = ref(25)
  const numberValue = ref(2)
</script>