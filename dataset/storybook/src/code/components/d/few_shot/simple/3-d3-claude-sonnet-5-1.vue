<template>
  <div class="w-[334px] bg-white p-6">
    <div class="flex items-center gap-6">
      <Slider v-model="sliderValue" class="w-full flex-1" />
      <InputNumber
        v-model="sliderValue"
        show-buttons
        button-layout="vertical"
        :input-style="{ width: '48px' }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Slider from 'primevue/slider'
  import InputNumber from 'primevue/inputnumber'

  const sliderValue = ref(2)
</script>