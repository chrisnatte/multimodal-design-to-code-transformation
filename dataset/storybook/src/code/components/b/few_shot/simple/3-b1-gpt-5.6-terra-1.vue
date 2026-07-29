<template>
  <div class="flex w-[334px] flex-col bg-white p-6">
    <div class="flex items-center gap-6">
      <Slider v-model="rating" :min="0" :max="8" class="flex-1" />
      <InputNumber
        v-model="rating"
        :min="0"
        :max="8"
        show-buttons
        button-layout="vertical"
        increment-button-icon="pi pi-plus"
        decrement-button-icon="pi pi-minus"
        class="w-12"
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