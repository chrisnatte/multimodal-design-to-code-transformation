<template>
  <div class="w-[512px] rounded-xl bg-white">
    <div class="flex flex-col gap-6 rounded-md p-[17.5px]">
      <div class="flex flex-col gap-[7px]">
        <span class="text-[17.5px] font-medium leading-[21px] text-surface-900">
          Dashboardeinrichtung
        </span>
        <span class="text-sm font-normal leading-[17px] text-surface-700">
          Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.
        </span>
      </div>

      <div class="flex flex-col gap-3">
        <ProgressBar :value="progress" :show-value="true" class="h-[17.5px]" />
        <span class="text-xs font-light leading-[15px] text-surface-600">
          Projektmetriken werden analysiert
        </span>
      </div>

      <div class="flex justify-end gap-[7px]">
        <Button label="Weiter" severity="secondary" :disabled="true" size="small" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import ProgressBar from 'primevue/progressbar'

const progress = ref(50)
</script>