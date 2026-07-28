<template>
  <div class="flex items-center gap-6 w-full max-w-lg p-8">
    <Slider v-model="value" :max="10" class="flex-1" />
    <InputNumber v-model="value" showButtons buttonLayout="vertical" :min="0" :max="10" class="w-12" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Slider from 'primevue/slider'
import InputNumber from 'primevue/inputnumber'

const value = ref(2)
</script>