<template>
  <div class="flex flex-col p-0 bg-white rounded-xl w-[512px]">
    <div class="flex flex-col gap-6 p-[17.5px] rounded-md">
      <div class="flex flex-col gap-2 w-full">
        <span class="text-[17.5px] font-medium">Dashboardeinrichtung</span>
        <span class="text-sm font-normal"
          >Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten
          dauern.</span
        >
      </div>
      <div class="flex flex-col gap-3 w-full">
        <ProgressBar :value="progressValue" :showValue="true" class="w-full" />
        <span class="text-xs font-light">Projektmetriken werden analysiert</span>
      </div>
      <div class="flex justify-end gap-2 w-full">
        <Button label="Weiter" severity="secondary" disabled />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProgressBar from 'primevue/progressbar'
import Button from 'primevue/button'

const progressValue = ref(50)
</script>