<template>
  <div class="flex h-[149px] w-[334px] flex-col bg-white p-6">
    <div class="flex h-[101px] w-full items-center gap-6">
      <Slider
        v-model="rating"
        :min="0"
        :max="8"
        class="w-full"
      />
      <InputNumber
        v-model="rating"
        :min="0"
        :max="8"
        showButtons
        buttonLayout="vertical"
        incrementButtonIcon="pi pi-plus"
        decrementButtonIcon="pi pi-plus"
        class="w-12"
        inputClass="w-12 text-center"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import InputNumber from 'primevue/inputnumber'
import Slider from 'primevue/slider'

const rating = ref(2)
</script>