<template>
  <Card class="w-[512px]">
    <template #content>
      <div class="flex flex-col gap-5">
        <div class="flex flex-col gap-1">
          <h1 class="m-0 text-lg font-medium">Dashboardeinrichtung</h1>
          <p class="m-0 text-sm text-surface-500">
            Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.
          </p>
        </div>

        <div class="flex flex-col gap-2">
          <ProgressBar :value="progress" :show-value="true" class="h-[18px]" />
          <span class="text-xs text-surface-500">Projektmetriken werden analysiert</span>
        </div>

        <div class="flex justify-end">
          <Button label="Weiter" severity="secondary" disabled />
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import ProgressBar from 'primevue/progressbar'

const progress = ref(50)
</script>