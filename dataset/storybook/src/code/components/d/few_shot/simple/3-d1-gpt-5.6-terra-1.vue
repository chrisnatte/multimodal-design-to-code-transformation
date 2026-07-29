<template>
  <div class="flex w-[334px] items-center gap-6 bg-white px-6 py-6">
    <Slider v-model="rating" :min="0" :max="8" class="w-[214px] flex-1" />
    <InputNumber
      v-model="rating"
      :min="0"
      :max="8"
      show-buttons
      button-layout="vertical"
      increment-button-icon="pi pi-plus"
      decrement-button-icon="pi pi-plus"
      input-class="w-12 text-center"
      class="w-12"
    />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import InputNumber from 'primevue/inputnumber'
  import Slider from 'primevue/slider'

  const rating = ref(2)
</script>