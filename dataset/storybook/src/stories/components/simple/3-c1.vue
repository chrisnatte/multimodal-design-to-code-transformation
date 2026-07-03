<template>
  <div class="w-full min-h-[148px] bg-[#f5f5f5] flex items-center justify-center p-6">
    <div class="w-full max-w-[280px] flex flex-row items-start justify-between gap-6">
      <div class="flex-1 pt-9">
        <Slider v-model="state.value" :min="0" :max="4" :step="1" class="w-full" />
      </div>

      <div class="flex flex-col">
        <Button
          icon="pi pi-plus"
          severity="secondary"
          outlined
          class="!rounded-b-none !w-8 !h-8 !p-0"
          @click="increment"
        />
        <Button
          :label="String(state.value)"
          severity="secondary"
          outlined
          disabled
          class="!rounded-none !w-8 !h-8 !p-0 !opacity-100"
        />
        <Button
          icon="pi pi-plus"
          severity="secondary"
          outlined
          class="!rounded-t-none !w-8 !h-8 !p-0"
          @click="increment"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Slider from 'primevue/slider'
import Button from 'primevue/button'

const state = reactive({
  value: 2
})

const increment = () => {
  if (state.value < 4) state.value++
}
</script>