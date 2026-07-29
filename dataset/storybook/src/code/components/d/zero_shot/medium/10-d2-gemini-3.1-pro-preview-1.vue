<template>
  <div class="p-6 flex items-center justify-center bg-white">
    <Card class="w-full max-w-[512px] rounded-xl shadow-sm border border-surface-100 dark:border-surface-800">
      <template #title>
        <div class="text-[17.5px] font-medium text-surface-900 dark:text-surface-0 leading-tight">
          Dashboardeinrichtung
        </div>
      </template>
      <template #subtitle>
        <div class="text-[14px] font-normal text-surface-600 dark:text-surface-300 mt-2 leading-snug">
          Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.
        </div>
      </template>
      <template #content>
        <div class="flex flex-col gap-3 mt-6">
          <ProgressBar :value="progressValue" class="h-[17.5px]" :pt="{ value: { class: 'bg-[#10B981]' } }" />
          <span class="text-[12px] font-light text-surface-600 dark:text-surface-400">
            Projektmetriken werden analysiert
          </span>
        </div>
      </template>
      <template #footer>
        <div class="flex justify-end mt-4">
          <Button label="Weiter" severity="secondary" disabled />
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Card from 'primevue/card';
import ProgressBar from 'primevue/progressbar';
import Button from 'primevue/button';

const progressValue = ref(50);
</script>