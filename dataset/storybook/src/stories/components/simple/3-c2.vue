<template>
  <div class="w-full min-h-[149px] flex items-center justify-center bg-neutral-100">
    <div class="flex items-center gap-8">
      <Slider v-model="state.value" class="w-56" :min="0" :max="100" :step="1" />

      <InputNumber
        v-model="state.value"
        showButtons
        buttonLayout="vertical"
        :min="0"
        :max="100"
        :step="1"
        inputClass="text-center w-12"
        :inputStyle="{ width: '3rem' }"
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
import { reactive } from 'vue';
import Slider from 'primevue/slider';
import InputNumber from 'primevue/inputnumber';

const state = reactive({
  value: 2
});
</script>