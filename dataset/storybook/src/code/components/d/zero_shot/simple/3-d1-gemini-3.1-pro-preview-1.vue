<template>
  <div class="flex flex-row items-center gap-6 p-6 bg-white w-fit">
    <Slider v-model="value" class="w-[214px]" />
    <InputNumber
      v-model="value"
      showButtons
      buttonLayout="vertical"
      class="w-12"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Slider from 'primevue/slider'
import InputNumber from 'primevue/inputnumber'

const value = ref(2)
</script>