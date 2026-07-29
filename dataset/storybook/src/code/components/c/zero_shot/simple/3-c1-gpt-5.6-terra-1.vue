<template>
  <div class="flex h-[149px] w-[318px] items-center bg-white px-6">
    <Slider
      v-model="sliderValue"
      :min="0"
      :max="10"
      class="w-[214px]"
      :pt="{
        root: { class: 'h-[3px] bg-slate-200 rounded-full' },
        range: { class: 'bg-emerald-500 rounded-full' },
        handle: {
          class:
            'h-5 w-5 -mt-[8px] border border-slate-300 bg-white shadow-none'
        }
      }"
    />

    <div
      class="ml-6 flex h-[102px] w-8 flex-col overflow-hidden rounded-md border border-slate-300"
    >
      <Button
        icon="pi pi-plus"
        text
        aria-label="Increase value"
        class="h-[33px] w-full rounded-none !p-0 !text-slate-400"
        @click="stepperValue++"
      />

      <div class="h-px bg-slate-300" />

      <InputNumber
        v-model="stepperValue"
        :use-grouping="false"
        :min-fraction-digits="0"
        :max-fraction-digits="0"
        input-id="stepper-value"
        class="h-[32px] w-full"
        :pt="{
          root: { class: 'h-full w-full' },
          input: {
            class:
              'h-full w-full border-0 p-0 text-center text-sm text-slate-600 shadow-none outline-none'
          }
        }"
      />

      <div class="h-px bg-slate-300" />

      <Button
        icon="pi pi-plus"
        text
        aria-label="Increase value"
        class="h-[33px] w-full rounded-none !p-0 !text-slate-400"
        @click="stepperValue++"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import InputNumber from 'primevue/inputnumber'
import Slider from 'primevue/slider'

const sliderValue = ref(2.6)
const stepperValue = ref(2)
</script>