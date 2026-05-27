<template>
  <div class="min-h-screen bg-surface-100 flex items-start justify-center p-6">
    <Card class="w-full max-w-3xl shadow-sm rounded-2xl">
      <template #content>
        <div class="flex flex-col gap-6">
          <div class="flex flex-col gap-2">
            <h2 class="text-4xl font-semibold text-surface-800 leading-tight">Dashboardeinrichtung</h2>
            <p class="text-2xl text-surface-500 leading-snug max-w-2xl">
              Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.
            </p>
          </div>

          <div class="flex flex-col gap-3">
            <ProgressBar :value="state.progress" :showValue="true" />
            <p class="text-xl text-surface-500">Projektmetriken werden analysiert</p>
          </div>

          <div class="flex justify-end pt-2">
            <Button label="Weiter" severity="secondary" disabled />
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Card from 'primevue/card'
import ProgressBar from 'primevue/progressbar'
import Button from 'primevue/button'

const state = reactive({
  progress: 50
})
</script>