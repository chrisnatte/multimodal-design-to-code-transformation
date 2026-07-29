<template>
  <div class="flex w-[334px] flex-col bg-white p-6">
    <div class="flex w-full items-center gap-6">
      <Slider
        v-model="rating"
        :min="0"
        :max="8"
        aria-label="Bewertung"
        class="flex-1"
        :pt="{
          root: 'h-[3px]',
          range: 'bg-emerald-500',
          handle: 'h-5 w-5 border border-slate-300 bg-white',
        }"
      />
      <InputNumber
        v-model="rating"
        :min="0"
        :max="8"
        :use-grouping="false"
        show-buttons
        button-layout="vertical"
        aria-label="Bewertung"
        class="h-[101px] w-12"
        input-class="!w-12 !text-center"
        :pt="{
          buttonGroup: 'w-12',
          incrementButton: 'h-[35px]',
          decrementButton: 'h-[35px]',
        }"
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

<script setup lang="ts">
import { ref } from 'vue'
import InputNumber from 'primevue/inputnumber'
import Slider from 'primevue/slider'

const rating = ref(2)
</script>