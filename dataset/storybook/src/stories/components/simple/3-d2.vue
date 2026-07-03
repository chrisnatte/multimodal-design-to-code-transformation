<template>
  <div class="w-full h-full bg-neutral-100 p-6">
    <div class="flex items-center gap-6">
      <div class="w-[215px]">
        <Slider v-model="form.slider" class="w-full" />
      </div>

      <div class="w-[44px]">
        <InputNumber
          v-model="form.value"
          showButtons
          buttonLayout="vertical"
          :min="0"
          :step="1"
          fluid
          variant="filled"
          inputClass="text-center"
        >
          <template #incrementbuttonicon>
            <span class="pi pi-plus"></span>
          </template>
          <template #decrementbuttonicon>
            <span class="pi pi-plus"></span>
          </template>
        </InputNumber>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, watch } from 'vue';
import Slider from 'primevue/slider';
import InputNumber from 'primevue/inputnumber';

const form = reactive({
  slider: 25,
  value: 2
});

watch(
  () => form.slider,
  (val) => {
    form.value = Math.round((val / 100) * 8);
  }
);

watch(
  () => form.value,
  (val) => {
    form.slider = Math.max(0, Math.min(100, (val ?? 0) * 12.5));
  }
);
</script>