<template>
  <div class="w-full h-[149px] bg-[#f4f5f7] flex items-center px-6">
    <div class="w-full flex items-center justify-between">
      <div class="flex-1 max-w-[220px]">
        <Slider v-model="state.value" :min="0" :max="10" :step="1" />
      </div>

      <div class="flex flex-col">
        <Button icon="pi pi-plus" outlined class="!rounded-b-none !w-[42px] !h-[34px]" />
        <InputNumber
          v-model="state.value"
          :min="0"
          :max="10"
          :step="1"
          :useGrouping="false"
          inputClass="text-center !w-[42px] !h-[34px]"
        />
        <Button icon="pi pi-plus" outlined class="!rounded-t-none !w-[42px] !h-[34px]" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import Slider from 'primevue/slider';
import Button from 'primevue/button';
import InputNumber from 'primevue/inputnumber';

const state = reactive({
  value: 2
});
</script>