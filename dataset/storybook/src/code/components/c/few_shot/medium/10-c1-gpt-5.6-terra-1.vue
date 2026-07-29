<template>
  <Card
    :pt="{
      root: 'w-full max-w-lg shadow-sm',
      body: '!p-4',
      content: 'flex flex-col gap-5',
    }"
  >
    <template #content>
      <div class="flex flex-col gap-1">
        <h1 class="text-base font-medium text-slate-700">Dashboardeinrichtung</h1>
        <p class="text-sm leading-4 text-slate-500">
          Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten<br />
          dauern.
        </p>
      </div>

      <div class="flex flex-col gap-3">
        <ProgressBar :value="progress" :show-value="true" class="!h-[18px] text-xs" />
        <span class="text-xs text-slate-600">Projektmetriken werden analysiert</span>
      </div>

      <div class="flex justify-end pt-1">
        <Button label="Weiter" severity="secondary" size="small" disabled />
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