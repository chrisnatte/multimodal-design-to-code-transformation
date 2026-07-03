<template>
  <div class="flex flex-col gap-2 bg-white rounded-xl">
    <div class="flex flex-col gap-6 p-4 rounded-md w-full">
      <div class="flex flex-col gap-2 w-full">
        <h3 class="text-[18px] font-medium">Dashboardeinrichtung</h3>
        <p class="text-sm font-normal">Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.</p>
      </div>

      <div class="flex flex-col gap-3 w-full">
        <ProgressBar :value="state.progress" />
        <span class="text-xs font-light">Projektmetriken werden analysiert</span>
      </div>

      <div class="flex gap-2 w-full justify-end">
        <Button label="Weiter" severity="secondary" :disabled="state.nextDisabled" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import ProgressBar from 'primevue/progressbar'
import Button from 'primevue/button'

const state = reactive({
  progress: 50,
  nextDisabled: true
})
</script>