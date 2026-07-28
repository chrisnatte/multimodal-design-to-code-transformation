<template>
  <div class="flex items-center gap-6 p-6">
    <div class="flex items-center">
      <div class="h-1 w-12 rounded-l-full bg-emerald-500"></div>
      <div class="z-10 -mx-1 h-5 w-5 rounded-full border border-slate-300 bg-white"></div>
      <div class="h-1 w-36 rounded-r-full bg-slate-200"></div>
    </div>

    <div class="flex w-8 flex-col overflow-hidden rounded-md border border-slate-300">
      <Button
        icon="pi pi-plus"
        text
        severity="secondary"
        class="h-8 w-full rounded-none !text-slate-400"
        aria-label="Increase"
        @click="quantity++"
      />
      <div class="flex h-8 items-center justify-center border-y border-slate-300 text-sm text-slate-600">
        {{ quantity }}
      </div>
      <Button
        icon="pi pi-plus"
        text
        severity="secondary"
        class="h-8 w-full rounded-none !text-slate-400"
        aria-label="Increase"
        @click="quantity++"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'

const quantity = ref(2)
</script>