<template>
  <div class="flex h-[149px] w-[334px] flex-col bg-white p-6">
    <div class="flex items-center gap-6">
      <Slider v-model="rating" class="flex-1" aria-label="Bewertung" />
      <InputNumber
        v-model="rating"
        showButtons
        buttonLayout="vertical"
        variant="filled"
        :min="0"
        class="w-12"
        inputClass="w-12 text-center"
        incrementButtonClass="!bg-black !border-black"
        decrementButtonClass="!bg-black !border-black"
        aria-label="Bewertung eingeben"
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