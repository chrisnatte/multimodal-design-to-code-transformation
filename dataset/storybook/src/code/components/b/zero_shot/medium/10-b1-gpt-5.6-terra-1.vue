<template>
  <div class="flex w-[560px] flex-col gap-2.5 bg-white p-6">
    <div class="flex w-full flex-col gap-[7px] rounded-xl bg-white">
      <div class="flex w-full flex-col gap-6 rounded-md p-[17.5px]">
        <div class="flex w-full flex-col gap-[7px]">
          <span class="text-[17.5px] font-medium">Dashboardeinrichtung</span>
          <span class="text-sm font-normal">
            Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.
          </span>
        </div>

        <div class="flex w-full flex-col gap-3">
          <ProgressBar :value="progressValue" :show-value="true" class="h-[17.5px]" />
          <span class="text-xs font-light">Projektmetriken werden analysiert</span>
        </div>

        <div class="flex w-full justify-end gap-[7px]">
          <Button label="Weiter" severity="secondary" :disabled="isNextDisabled" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import ProgressBar from 'primevue/progressbar'

const progressValue = ref(50)
const isNextDisabled = ref(true)
</script>