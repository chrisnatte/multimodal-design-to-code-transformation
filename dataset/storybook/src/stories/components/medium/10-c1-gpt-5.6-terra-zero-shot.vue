<template>
  <main class="min-h-screen bg-white p-6">
    <Card class="h-56 w-full max-w-[512px] !rounded-xl !border !border-slate-100 !shadow-sm">
      <template #content>
        <div class="flex h-full flex-col">
          <div>
            <h1 class="m-0 text-lg font-medium text-slate-700">
              Dashboardeinrichtung
            </h1>
            <p class="mb-0 mt-1 text-sm leading-[1.2rem] text-slate-500">
              Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten
              dauern.
            </p>
          </div>

          <div class="mt-5">
            <ProgressBar
              :value="setupProgress"
              class="h-[18px] overflow-hidden !rounded-md !bg-slate-200 text-[11px] [&_.p-progressbar-value]:!bg-emerald-500"
            />
            <p class="mb-0 mt-2 text-xs text-slate-600">
              Projektmetriken werden analysiert
            </p>
          </div>

          <div class="mt-auto flex justify-end">
            <Button label="Weiter" severity="secondary" size="small" disabled />
          </div>
        </div>
      </template>
    </Card>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import ProgressBar from 'primevue/progressbar'

const setupProgress = ref(50)
</script>