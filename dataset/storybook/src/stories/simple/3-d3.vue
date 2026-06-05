<template>
  <div class="w-full h-full bg-gray-100 p-6">
    <div class="flex items-center gap-6">
      <div class="w-56">
        <Slider v-model="state.value" :min="0" :max="10" :step="1" />
      </div>

      <InputNumber
        v-model="state.value"
        showButtons
        buttonLayout="vertical"
        :min="0"
        :max="10"
        inputClass="text-center w-10"
      >
        <template #incrementbuttonicon>
          <span class="pi pi-plus"></span>
        </template>
        <template #decrementbuttonicon>
          <span class="pi pi-plus"></span>
        </template>
      </InputNumber>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Slider from 'primevue/slider'
import InputNumber from 'primevue/inputnumber'

const state = reactive({
  value: 2
})
</script>