<template>
  <main class="flex min-h-[270px] items-start bg-white p-6">
    <section class="w-full max-w-[512px] rounded-xl border border-surface-200 bg-white shadow-sm">
      <div class="flex flex-col gap-6 p-[17.5px]">
        <div class="flex flex-col gap-[7px]">
          <h2 class="m-0 text-[17.5px] font-medium leading-[21px] text-slate-700">
            Dashboardeinrichtung
          </h2>
          <p class="m-0 text-sm leading-[17px] text-slate-500">
            Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten<br />
            dauern.
          </p>
        </div>

        <div class="flex flex-col gap-3">
          <ProgressBar
            :value="progress"
            :show-value="true"
            class="h-[17.5px] overflow-hidden rounded-md"
          />
          <span class="text-xs font-light leading-[15px] text-slate-600">
            Projektmetriken werden analysiert
          </span>
        </div>

        <div class="flex justify-end">
          <Button label="Weiter" severity="secondary" :disabled="true" size="small" />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import ProgressBar from 'primevue/progressbar'

const progress = ref(50)
</script>