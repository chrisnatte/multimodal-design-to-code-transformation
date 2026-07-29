<template>
  <div class="flex flex-col gap-2.5 p-6 bg-white">
    <Card
      :pt="{
        root: 'rounded-xl bg-white',
        body: 'flex flex-col gap-6 p-4',
        caption: 'flex flex-col gap-2',
        content: 'flex flex-col gap-3',
        footer: 'flex justify-end gap-2'
      }"
    >
      <template #title>
        <span class="text-lg font-medium">Dashboardeinrichtung</span>
      </template>
      <template #subtitle>
        <span class="text-sm font-normal text-surface-600">Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.</span>
      </template>
      <template #content>
        <ProgressBar :value="50" />
        <span class="text-xs font-light text-surface-700">Projektmetriken werden analysiert</span>
      </template>
      <template #footer>
        <Button label="Weiter" severity="secondary" disabled />
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import Card from 'primevue/card'
import ProgressBar from 'primevue/progressbar'
import Button from 'primevue/button'
</script>