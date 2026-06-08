<template>
  <div class="flex items-center gap-6">
    <Slider v-model="form.value" />
    <InputNumber v-model="form.value" :showButtons="true" buttonLayout="vertical" :useGrouping="false" />
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Slider from 'primevue/slider'
import InputNumber from 'primevue/inputnumber'

const form = reactive({
  value: 2,
})
</script>