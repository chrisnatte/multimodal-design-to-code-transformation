<template>
  <div class="bg-white p-6 flex flex-col w-[334px]">
    <div class="flex items-center gap-6 w-full">
      <Slider
        v-model="sliderValue"
        class="flex-1"
        :min="0"
        :max="10"
      />
      <InputNumber
        v-model="inputValue"
        showButtons
        buttonLayout="vertical"
        :min="0"
        :max="10"
        class="w-12"
        inputClass="w-12 text-center"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Slider from 'primevue/slider'
import InputNumber from 'primevue/inputnumber'

const sliderValue = ref(2)
const inputValue = ref(2)
</script>