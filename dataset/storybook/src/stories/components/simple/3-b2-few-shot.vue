<template>
  <div class="flex items-center gap-6">
    <Slider v-model="form.slider" />
    <InputNumber
      v-model="form.value"
      showButtons
      buttonLayout="vertical"
      variant="filled"
    />
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Slider from 'primevue/slider'
import InputNumber from 'primevue/inputnumber'

const form = reactive({
  slider: 2,
  value: 2
})
</script>