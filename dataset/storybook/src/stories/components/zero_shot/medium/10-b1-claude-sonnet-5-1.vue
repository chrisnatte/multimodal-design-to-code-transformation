<template>
  <div class="flex flex-col gap-2 p-6 bg-white">
    <div class="flex flex-col w-[512px] rounded-xl bg-white gap-2">
      <div class="flex flex-col w-full gap-6 rounded-md p-[17.5px]">
        <div class="flex flex-col w-full gap-2">
          <span class="text-[17.5px] font-medium">Dashboardeinrichtung</span>
          <span class="text-sm font-normal">
            Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.
          </span>
        </div>

        <div class="flex flex-col w-full gap-3">
          <ProgressBar :value="progressValue" :showValue="true" style="height: 17.5px" />
          <span class="text-xs font-light">Projektmetriken werden analysiert</span>
        </div>

        <div class="flex w-full justify-end gap-2">
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