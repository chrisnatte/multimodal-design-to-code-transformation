<template>
  <div class="w-[334px] bg-white p-6">
    <div class="flex items-center gap-6">
      <Slider v-model="rating" class="grow" />
      <InputNumber v-model="rating" show-buttons button-layout="vertical" input-class="w-12 text-center" :input-style="{ width: '48px' }" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Slider from 'primevue/slider'
  import InputNumber from 'primevue/inputnumber'

  const rating = ref(2)
</script>