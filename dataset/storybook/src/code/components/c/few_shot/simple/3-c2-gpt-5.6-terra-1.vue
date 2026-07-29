<template>
  <div class="flex items-center gap-6 p-6">
    <Slider v-model="value" class="w-52" aria-label="Wert auswählen" />
    <InputNumber
      v-model="value"
      :min="0"
      :max="100"
      show-buttons
      button-layout="vertical"
      class="w-8"
      input-class="w-8 text-center"
      aria-label="Numerischer Wert"
    >
      <template #incrementbuttonicon>
        <span class="pi pi-plus" />
      </template>
      <template #decrementbuttonicon>
        <span class="pi pi-minus" />
      </template>
    </InputNumber>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import InputNumber from 'primevue/inputnumber'
import Slider from 'primevue/slider'

const value = ref(26)
</script>