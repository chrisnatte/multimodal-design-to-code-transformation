<template>
  <div class="bg-white rounded-xl shadow-sm p-[17.5px] w-[512px]">
    <div class="flex flex-col gap-6">
      <div class="flex flex-col gap-[7px]">
        <span class="text-[17.5px] font-medium text-gray-800">Dashboardeinrichtung</span>
        <span class="text-sm text-gray-600">
          Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.
        </span>
      </div>

      <div class="flex flex-col gap-3">
        <ProgressBar :value="progressValue" :showValue="true" style="height: 17.5px" />
        <span class="text-xs font-light text-gray-500">Projektmetriken werden analysiert</span>
      </div>

      <div class="flex justify-end gap-[7px]">
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