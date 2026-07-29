<template>
  <div class="flex flex-col p-6 gap-2.5 bg-white w-fit">
    <Card class="w-[512px] rounded-xl">
      <template #title>
        <div class="text-[17.5px] font-medium">Dashboardeinrichtung</div>
      </template>
      <template #subtitle>
        <div class="text-sm font-normal mt-1.5">
          Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.
        </div>
      </template>
      <template #content>
        <div class="flex flex-col gap-3 mt-4">
          <ProgressBar :value="progressValue" />
          <div class="text-xs font-light">Projektmetriken werden analysiert</div>
        </div>
      </template>
      <template #footer>
        <div class="flex justify-end mt-4">
          <Button label="Weiter" severity="secondary" disabled />
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