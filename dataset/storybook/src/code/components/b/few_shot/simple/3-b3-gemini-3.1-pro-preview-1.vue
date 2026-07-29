<template>
  <div class="flex flex-col bg-white p-6 w-[334px]">
    <div class="flex items-center gap-6">
      <Slider v-model="value" class="flex-grow" />
      <InputNumber
        v-model="value"
        show-buttons
        button-layout="vertical"
        class="w-12"
        :pt="{
          input: 'w-full text-center'
        }"
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