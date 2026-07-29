<template>
  <div class="flex w-fit items-center gap-6 bg-white p-6">
    <Slider v-model="value" class="w-[214px]" />
    <InputNumber
      v-model="value"
      show-buttons
      button-layout="vertical"
      class="w-12"
      input-class="text-center"
      :increment-button-props="{ severity: 'secondary', outlined: true }"
      :decrement-button-props="{ severity: 'secondary', outlined: true }"
    />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Slider from 'primevue/slider'
  import InputNumber from 'primevue/inputnumber'

  const value = ref(2)
</script>