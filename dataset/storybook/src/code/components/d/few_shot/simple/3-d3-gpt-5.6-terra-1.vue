<template>
  <div class="flex w-[334px] flex-col p-6">
    <div class="flex h-[101px] items-center gap-6">
      <Slider v-model="sliderValue" :max="10" class="flex-1" aria-label="Bewertung" />
      <InputNumber
        v-model="rating"
        input-id="rating-input"
        show-buttons
        button-layout="vertical"
        :min="0"
        :max="10"
        class="w-12"
        input-class="w-12 text-center"
      >
        <template #incrementbuttonicon>
          <span class="pi pi-plus" />
        </template>
        <template #decrementbuttonicon>
          <span class="pi pi-plus" />
        </template>
      </InputNumber>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import InputNumber from 'primevue/inputnumber'
import Slider from 'primevue/slider'

const sliderValue = ref(2.6)
const rating = ref(2)
</script>