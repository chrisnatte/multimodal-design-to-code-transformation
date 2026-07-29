<template>
  <div class="flex w-[334px] flex-col bg-white p-6">
    <div class="flex h-[101px] items-center gap-6">
      <Slider v-model="rating" class="w-[214px] flex-1" aria-label="Bewertung" />
      <InputNumber
        v-model="rating"
        :min="0"
        show-buttons
        button-layout="vertical"
        fluid
        class="h-[101px] w-12"
        input-class="text-center"
        aria-label="Bewertung eingeben"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import InputNumber from 'primevue/inputnumber'
import Slider from 'primevue/slider'

const rating = ref(2)
</script>