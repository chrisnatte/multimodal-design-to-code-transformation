<template>
  <div class="flex flex-col gap-[7px] bg-white rounded-xl w-[512px]">
    <div class="flex flex-col gap-6 p-[17.5px] rounded-md w-full">
      <div class="flex flex-col gap-[7px] w-full">
        <span class="text-[17.5px] font-medium">Dashboardeinrichtung</span>
        <span class="text-sm font-normal">Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.</span>
      </div>
      <div class="flex flex-col gap-3 w-full">
        <ProgressBar :value="progressValue" class="h-[17.5px] w-full" />
        <span class="text-xs font-light">Projektmetriken werden analysiert</span>
      </div>
      <div class="flex flex-row justify-end gap-[7px] w-full">
        <Button :label="buttonLabel" severity="secondary" :disabled="buttonDisabled" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import ProgressBar from 'primevue/progressbar'

const progressValue = ref(50)
const buttonLabel = ref('Weiter')
const buttonDisabled = ref(true)
</script>