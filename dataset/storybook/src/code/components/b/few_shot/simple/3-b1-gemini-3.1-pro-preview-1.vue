<template>
  <div class="flex flex-col p-6">
    <div class="flex items-center gap-6">
      <Slider v-model="value" class="flex-1" />
      <InputNumber
        v-model="value"
        show-buttons
        button-layout="vertical"
        class="w-12"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Slider from 'primevue/slider'
  import InputNumber from 'primevue/inputnumber'

  const value = ref(2)
</script>