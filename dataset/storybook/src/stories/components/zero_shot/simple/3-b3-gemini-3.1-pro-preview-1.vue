<template>
  <div class="flex flex-col p-6 bg-white">
    <div class="flex flex-row items-center gap-6">
      <Slider v-model="value" class="flex-1" />
      <InputNumber 
        v-model="value" 
        showButtons 
        buttonLayout="vertical" 
        class="w-12" 
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Slider from 'primevue/slider'
import InputNumber from 'primevue/inputnumber'

const value = ref(2)
</script>