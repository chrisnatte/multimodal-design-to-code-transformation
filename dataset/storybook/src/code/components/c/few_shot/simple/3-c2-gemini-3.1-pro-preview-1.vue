<template>
  <div class="flex items-center gap-8 p-4">
    <Slider v-model="value" :max="10" class="w-64" />
    <InputNumber
      v-model="value"
      showButtons
      buttonLayout="vertical"
      class="w-12"
      :min="0"
      :max="10"
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

  const value = ref(2)
</script>