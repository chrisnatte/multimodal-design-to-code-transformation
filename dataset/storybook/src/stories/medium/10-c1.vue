<template>
  <div class="min-h-screen bg-gray-100 p-6 flex items-start justify-center">
    <Card class="w-full max-w-3xl rounded-2xl shadow-sm">
      <template #content>
        <div class="flex flex-col gap-6">
          <div class="flex flex-col gap-2">
            <h2 class="text-4xl font-semibold text-slate-700">Dashboardeinrichtung</h2>
            <p class="text-2xl text-slate-500 leading-snug">
              Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.
            </p>
          </div>

          <div class="flex flex-col gap-3">
            <ProgressBar :value="state.progress" :showValue="true" />
            <span class="text-xl text-slate-500">Projektmetriken werden analysiert</span>
          </div>

          <div class="flex justify-end">
            <Button label="Weiter" disabled class="px-6 py-2" />
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