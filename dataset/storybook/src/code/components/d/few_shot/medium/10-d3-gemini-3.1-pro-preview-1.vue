<template>
  <div class="p-6">
    <Card
      class="w-[512px] rounded-xl border border-surface-200 shadow-sm"
      :pt="{
        body: 'p-[17.5px] flex flex-col gap-6',
        content: '!p-0',
        footer: '!p-0 flex justify-end'
      }"
    >
      <template #title>
        <div class="text-[17.5px] font-medium text-surface-800 leading-tight">
          Dashboardeinrichtung
        </div>
      </template>
      <template #subtitle>
        <div class="mt-2 text-sm font-normal leading-snug text-surface-500">
          Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.
        </div>
      </template>
      <template #content>
        <div class="flex flex-col gap-3">
          <ProgressBar
            :value="50"
            class="h-[17.5px]"
            :pt="{ label: 'text-[10.5px] font-semibold' }"
          />
          <div class="text-xs font-light text-surface-600">
            Projektmetriken werden analysiert
          </div>
        </div>
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