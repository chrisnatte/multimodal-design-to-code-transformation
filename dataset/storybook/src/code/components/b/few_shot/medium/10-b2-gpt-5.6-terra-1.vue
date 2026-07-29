<template>
  <div class="flex w-[560px] flex-col gap-2.5 bg-white p-6">
    <Card
      class="w-full"
      :pt="{
        body: 'flex flex-col gap-6 !p-[17.5px]',
        caption: 'flex flex-col gap-[7px]',
        content: 'flex flex-col gap-3',
        footer: 'flex justify-end',
      }"
    >
      <template #title>
        <span class="text-[17.5px] font-medium">Dashboardeinrichtung</span>
      </template>

      <template #subtitle>
        <span class="text-sm font-normal">
          Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.
        </span>
      </template>

      <template #content>
        <ProgressBar :value="progress" aria-label="Fortschritt der Dashboardeinrichtung" class="w-full">
          <span class="text-[10.5px] font-semibold">{{ progress }}%</span>
        </ProgressBar>
        <span class="text-xs font-light">Projektmetriken werden analysiert</span>
      </template>

      <template #footer>
        <Button label="Weiter" severity="secondary" disabled />
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