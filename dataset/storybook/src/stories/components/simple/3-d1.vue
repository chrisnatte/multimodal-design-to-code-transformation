<template>
  <div class="w-full min-h-screen bg-neutral-100 flex items-center justify-start p-6">
    <div class="flex items-center gap-6">
      <div class="w-52">
        <Slider v-model="state.value" :min="0" :max="10" class="w-full" />
      </div>

      <InputNumber
        v-model="state.value"
        :min="0"
        :max="10"
        showButtons
        buttonLayout="vertical"
        incrementButtonIcon="pi pi-plus"
        decrementButtonIcon="pi pi-plus"
        class="w-16"
        inputClass="text-center"
      />
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