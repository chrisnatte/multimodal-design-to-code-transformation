<template>
  <div class="bg-white p-6 w-[334px]">
    <div class="flex items-center gap-6">
      <Slider v-model="ratingValue" class="w-full flex-1" :min="0" :max="10" />
      <InputNumber
        v-model="ratingValue"
        showButtons
        buttonLayout="vertical"
        :min="0"
        :max="10"
        inputStyle="width: 3rem"
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
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Slider from 'primevue/slider';
import InputNumber from 'primevue/inputnumber';

const ratingValue = ref(2);
</script>