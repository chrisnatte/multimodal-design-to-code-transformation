<template>
  <div class="flex w-[334px] items-center gap-6 p-6">
    <Slider v-model="rating" class="w-full flex-1" :min="0" :max="10" />
    <InputNumber
      v-model="rating"
      show-buttons
      button-layout="vertical"
      :min="0"
      :max="10"
      input-class="w-12 text-center"
      style="width: 3rem"
    >
      <template #incrementbuttonicon>
        <span class="pi pi-plus" />
      </template>
      <template #decrementbuttonicon>
        <span class="pi pi-plus" />
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