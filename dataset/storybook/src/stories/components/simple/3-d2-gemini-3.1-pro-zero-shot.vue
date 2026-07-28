<template>
  <div class="flex items-center gap-6">
    <Slider v-model="value" class="flex-1 min-w-[214px]" />
    <InputNumber
      v-model="value"
      showButtons
      buttonLayout="vertical"
      style="width: 3rem"
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

const value = ref(2)
</script>