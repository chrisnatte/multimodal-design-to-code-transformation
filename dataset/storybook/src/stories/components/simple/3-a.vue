<template>
  <div class="flex gap-6 items-center">
    <Slider v-model="_state.n10_4980" />
    <InputNumber
      buttonLayout="vertical"
      v-model="_state.n10_5003"
      showButtons
      value="2"
     />
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import InputNumber from 'primevue/inputnumber'
import Slider from 'primevue/slider'

const _state = reactive({ n10_4980: null, n10_5003: null })
</script>
