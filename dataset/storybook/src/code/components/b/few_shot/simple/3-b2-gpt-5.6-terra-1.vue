<template>
  <div class="flex h-[149px] w-[334px] flex-col bg-white p-6">
    <div class="flex items-center gap-6">
      <Slider v-model="sliderValue" class="flex-1" aria-label="Bewertung" />
      <InputNumber
        v-model="rating"
        input-id="rating-input"
        show-buttons
        button-layout="vertical"
        variant="filled"
        class="w-12"
        aria-label="Bewertung"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import InputNumber from 'primevue/inputnumber'
import Slider from 'primevue/slider'

const sliderValue = ref(26)
const rating = ref(2)
</script>