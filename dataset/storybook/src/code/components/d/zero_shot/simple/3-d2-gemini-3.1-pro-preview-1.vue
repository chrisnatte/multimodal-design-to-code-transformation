<template>
  <div class="p-6 bg-white w-[334px]">
    <div class="flex items-center gap-6">
      <Slider v-model="value" class="flex-1" />
      <InputNumber
        v-model="value"
        showButtons
        buttonLayout="vertical"
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

const value = ref(2);
</script>