<template>
  <div class="flex flex-col gap-2.5 p-6 bg-white">
    <Card class="w-[512px]">
      <template #content>
        <div class="flex flex-col gap-6 p-4">
          <div class="flex flex-col gap-2">
            <span class="text-lg font-medium">Dashboardeinrichtung</span>
            <span class="text-sm font-normal">
              Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.
            </span>
          </div>

          <div class="flex flex-col gap-3">
            <ProgressBar :value="progressValue" />
            <span class="text-xs font-light">Projektmetriken werden analysiert</span>
          </div>

          <div class="flex justify-end gap-2">
            <Button label="Weiter" severity="secondary" disabled />
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Card from 'primevue/card'
import ProgressBar from 'primevue/progressbar'
import Button from 'primevue/button'

const progressValue = ref(50)
</script>