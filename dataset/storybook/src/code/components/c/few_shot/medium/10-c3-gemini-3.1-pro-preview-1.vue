<template>
  <Card class="w-full max-w-2xl shadow-sm border border-surface-200">
    <template #title>
      <div class="text-xl font-semibold text-surface-900">Dashboardeinrichtung</div>
    </template>
    <template #subtitle>
      <div class="text-surface-500 mt-2 text-base leading-relaxed">
        Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.
      </div>
    </template>
    <template #content>
      <div class="flex flex-col gap-3 mt-6">
        <ProgressBar :value="progressValue" class="h-6">
          <template #default="{ value }">
            <span class="text-sm font-medium">{{ value }}%</span>
          </template>
        </ProgressBar>
        <span class="text-sm text-surface-500">Projektmetriken werden analysiert</span>
      </div>
    </template>
    <template #footer>
      <div class="flex justify-end mt-6">
        <Button label="Weiter" disabled severity="secondary" />
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Card from 'primevue/card'
import ProgressBar from 'primevue/progressbar'
import Button from 'primevue/button'

const progressValue = ref(50)
</script>