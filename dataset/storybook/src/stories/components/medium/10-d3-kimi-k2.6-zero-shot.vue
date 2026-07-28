<template>
  <Card class="w-[512px] shadow-md rounded-xl">
    <template #content>
      <div class="flex flex-col gap-6 p-[17.5px]">
        <div class="flex flex-col gap-[7px]">
          <span class="text-[17.5px] font-medium text-slate-800">Dashboardeinrichtung</span>
          <span class="text-sm text-slate-500">Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.</span>
        </div>
        <div class="flex flex-col gap-3">
          <ProgressBar :value="progressValue">{{ progressValue }}%</ProgressBar>
          <span class="text-xs font-light text-slate-600">Projektmetriken werden analysiert</span>
        </div>
        <div class="flex justify-end">
          <Button label="Weiter" severity="secondary" disabled />
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup>
import { ref } from 'vue';
import Card from 'primevue/card';
import ProgressBar from 'primevue/progressbar';
import Button from 'primevue/button';

const progressValue = ref(50);
</script>