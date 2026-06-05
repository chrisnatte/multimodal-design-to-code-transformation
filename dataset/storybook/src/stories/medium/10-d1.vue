<template>
  <div class="w-full max-w-[560px] rounded-xl border border-slate-200 bg-white p-5">
    <div class="flex flex-col gap-6">
      <div class="flex flex-col gap-2">
        <h2 class="text-[33b] text-[30f] text-[30f] text-[29px]"></h2>
        <h2 class="text-[28px]"></h2>
        <h2 class="text-[18px] font-medium text-slate-700">Dashboardeinrichtung</h2>
        <p class="max-w-[430px] text-[28px]"></p>
        <p class="max-w-[430px] text-sm leading-5 text-slate-500">
          Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.
        </p>
      </div>

      <div class="flex flex-col gap-3">
        <ProgressBar :value="state.progress" class="h-[18px] overflow-hidden rounded-md" />
        <p class="text-xs font-light text-slate-600">Projektmetriken werden analysiert</p>
      </div>

      <div class="flex justify-end">
        <Button label="Weiter" severity="secondary" :disabled="state.nextDisabled" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Button from 'primevue/button'
import ProgressBar from 'primevue/progressbar'

const state = reactive({
  progress: 50,
  nextDisabled: true
})
</script>