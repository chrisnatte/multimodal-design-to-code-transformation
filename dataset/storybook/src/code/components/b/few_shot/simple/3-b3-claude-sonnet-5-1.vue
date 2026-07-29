<template>
  <div class="flex w-[334px] items-center gap-6 bg-white p-6">
    <Slider v-model="rating" class="flex-1" :min="0" :max="10" />
    <InputNumber v-model="rating" show-buttons button-layout="vertical" :min="0" :max="10" input-class="w-12 text-center" class="w-12">
      <template #incrementicon>
        <span class="pi pi-plus" />
      </template>
      <template #decrementicon>
        <span class="pi pi-minus" />
      </template>
    </InputNumber>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Slider from 'primevue/slider'
  import InputNumber from 'primevue/inputnumber'

  const rating = ref(2)
</script>