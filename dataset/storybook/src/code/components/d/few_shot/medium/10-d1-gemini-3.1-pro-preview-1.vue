<template>
  <Card class="w-[512px] border border-surface-200 shadow-sm">
    <template #title>
      <div class="text-lg font-medium text-surface-900">Dashboardeinrichtung</div>
    </template>
    <template #subtitle>
      <div class="mt-2 text-sm text-surface-600">
        Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.
      </div>
    </template>
    <template #content>
      <div class="mt-6 flex flex-col gap-3">
        <ProgressBar :value="50" class="h-4 text-xs font-semibold" />
        <div class="text-xs font-light text-surface-500">Projektmetriken werden analysiert</div>
      </div>
    </template>
    <template #footer>
      <div class="mt-6 flex justify-end">
        <Button label="Weiter" severity="secondary" disabled />
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import Card from 'primevue/card'
import ProgressBar from 'primevue/progressbar'
import Button from 'primevue/button'
</script>