<template>
  <div class="flex items-center gap-6 p-8">
    <Slider v-model="value" class="w-48" :max="10" />
    <InputNumber
      v-model="value"
      show-buttons
      button-layout="vertical"
      class="w-12"
      input-class="text-center"
      increment-button-icon="pi pi-plus"
      decrement-button-icon="pi pi-plus"
      :pt="{
        incrementButton: { root: 'bg-transparent border-none text-slate-500 hover:bg-slate-100' },
        decrementButton: { root: 'bg-transparent border-none text-slate-500 hover:bg-slate-100' },
        input: { root: 'border-y border-x-0 border-slate-200 rounded-none shadow-none' },
        root: { class: 'border border-slate-200 rounded-md overflow-hidden' }
      }"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Slider from 'primevue/slider'
import InputNumber from 'primevue/inputnumber'

const value = ref(2)
</script>