<template>
  <div class="p-6">
    <Card class="w-full max-w-[512px]">
      <template #content>
        <div class="flex flex-col gap-6">
          <div class="flex flex-col gap-[7px]">
            <h2 class="text-[17.5px] font-medium leading-[21px]">Dashboardeinrichtung</h2>
            <p class="m-0 text-sm leading-[17px]">
              Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.
            </p>
          </div>

          <div class="flex flex-col gap-3">
            <ProgressBar
              :value="progress"
              :show-value="true"
              aria-label="Dashboardeinrichtung Fortschritt"
              class="h-[17.5px]"
            />
            <span class="text-xs font-light leading-[15px]">Projektmetriken werden analysiert</span>
          </div>

          <div class="flex justify-end">
            <Button label="Weiter" severity="secondary" disabled />
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import ProgressBar from 'primevue/progressbar'

const progress = ref(50)
</script>