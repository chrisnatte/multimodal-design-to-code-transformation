<template>
  <div class="flex w-[334px] flex-col bg-white p-6">
    <div class="flex items-center gap-6">
      <Slider v-model="rating" class="flex-1" />
      <InputNumber
        v-model="rating"
        showButtons
        buttonLayout="vertical"
        class="w-12"
        inputClass="w-12 text-center"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import InputNumber from 'primevue/inputnumber'
import Slider from 'primevue/slider'

const rating = ref(2)
</script>