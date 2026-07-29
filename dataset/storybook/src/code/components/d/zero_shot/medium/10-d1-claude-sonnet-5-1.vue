<template>
  <div class="p-6 bg-white">
    <div class="card w-[512px] rounded-xl bg-white p-[17.5px] flex flex-col gap-[7px]">
      <div class="flex flex-col gap-[24px]">
        <div class="flex flex-col gap-[7px]">
          <span class="text-[17.5px] font-medium text-gray-900">Dashboardeinrichtung</span>
          <span class="text-sm font-normal text-gray-500">
            Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.
          </span>
        </div>

        <div class="flex flex-col gap-[12px]">
          <ProgressBar :value="progressValue" :showValue="true" style="height: 17.5px" />
          <span class="text-xs font-light text-gray-500">Projektmetriken werden analysiert</span>
        </div>

        <div class="flex justify-end gap-[7px]">
          <Button
            label="Weiter"
            severity="secondary"
            :disabled="isDisabled"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProgressBar from 'primevue/progressbar'
import Button from 'primevue/button'

const progressValue = ref(50)
const isDisabled = ref(true)
</script>