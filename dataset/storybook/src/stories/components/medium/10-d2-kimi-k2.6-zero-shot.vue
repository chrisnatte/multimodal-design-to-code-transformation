<template>
  <div class="w-[512px] rounded-xl bg-white shadow-sm flex flex-col">
    <div class="flex flex-col p-[17.5px] gap-6">
      <div class="flex flex-col gap-[7px]">
        <span class="text-slate-700 text-lg font-medium leading-tight">Dashboardeinrichtung</span>
        <span class="text-slate-500 text-sm">Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.</span>
      </div>
      <div class="flex flex-col gap-3">
        <ProgressBar :value="progress" class="!h-[17.5px]">
          <span class="text-white text-[10.5px] font-semibold">50%</span>
        </ProgressBar>
        <span class="text-slate-500 text-xs font-light">Projektmetriken werden analysiert</span>
      </div>
      <div class="flex justify-end">
        <Button label="Weiter" severity="secondary" disabled />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ProgressBar from 'primevue/progressbar';
import Button from 'primevue/button';

const progress = ref(50);
</script>