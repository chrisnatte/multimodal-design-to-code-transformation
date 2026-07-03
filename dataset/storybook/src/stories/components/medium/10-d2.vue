<template>
  <div class="min-h-screen bg-[#f8fafc] p-6 flex items-start justify-center">
    <Card class="w-full max-w-[560px] rounded-xl border border-slate-200 shadow-sm">
      <template #content>
        <div class="flex flex-col gap-6 p-1">
          <div class="flex flex-col gap-2">
            <h2 class="text-[32px] leading-tight font-medium text-slate-700">Dashboardeinrichtung</h2>
            <p class="text-[27px] leading-snug text-slate-500 max-w-[500px]">
              Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.
            </p>
          </div>

          <div class="flex flex-col gap-3">
            <ProgressBar
              :value="state.progress"
              :showValue="true"
              class="h-[18px]"
            />
            <p class="text-[22px] font-light text-slate-500">Projektmetriken werden analysiert</p>
          </div>

          <div class="flex justify-end">
            <Button
              label="Weiter"
              severity="secondary"
              disabled
            />
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import ProgressBar from 'primevue/progressbar'

const state = reactive({
  progress: 50
})
</script>