<template>
  <div class="flex flex-col p-6 bg-white w-[334px]">
    <div class="flex flex-row items-center gap-6">
      <Slider v-model="ratingValue" class="flex-1" :min="0" :max="10" />
      <InputNumber
        v-model="ratingValue"
        showButtons
        buttonLayout="vertical"
        :min="0"
        :max="10"
        style="width: 48px"
        inputClass="text-center"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Slider from 'primevue/slider';
import InputNumber from 'primevue/inputnumber';

const ratingValue = ref(2);
</script>