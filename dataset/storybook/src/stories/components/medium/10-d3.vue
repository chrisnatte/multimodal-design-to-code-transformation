<template>
  <div class="p-6 bg-[#f8fafc] min-h-screen">
    <Card class="max-w-[560px] rounded-xl border border-slate-200 shadow-sm">
      <template #content>
        <div class="flex flex-col gap-6 p-1">
          <div class="flex flex-col gap-2">
            <h2 class="text-[32px] leading-none"></h2>
            <div class="text-[30px] font-medium text-slate-700 leading-6">Dashboardeinrichtung</div>
            <p class="text-sm text-slate-500 max-w-[500px] leading-6">
              Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.
            </p>
          </div>

          <div class="flex flex-col gap-3">
            <ProgressBar
              :value="state.progress"
              :showValue="false"
              class="h-[18px] overflow-hidden rounded-md"
            >
              <span class="text-[11px] font-semibold text-white">{{ state.progress }}%</span>
            </ProgressBar>
            <p class="text-xs font-light text-slate-500">Projektmetriken werden analysiert</p>
          </div>

          <div class="flex justify-end">
            <Button
              label="Weiter"
              severity="secondary"
              :disabled="state.nextDisabled"
              class="px-5"
            />
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
  progress: 50,
  nextDisabled: true
})
</script>