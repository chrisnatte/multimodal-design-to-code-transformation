<template>
  <div class="w-fit bg-white p-6">
    <div class="flex items-center gap-6">
      <Slider v-model="rating" :min="0" :max="10" class="w-56" />
      <InputNumber
        v-model="rating"
        show-buttons
        button-layout="vertical"
        :min="0"
        :max="10"
        input-class="w-12 text-center"
        style="width: 48px"
      >
        <template #incrementbuttonicon>
          <span class="pi pi-plus" />
        </template>
        <template #decrementbuttonicon>
          <span class="pi pi-minus" />
        </template>
      </InputNumber>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Slider from 'primevue/slider'
  import InputNumber from 'primevue/inputnumber'

  const rating = ref(2)
</script>