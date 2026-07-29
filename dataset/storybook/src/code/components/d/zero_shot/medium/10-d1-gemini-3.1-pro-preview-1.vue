<template>
  <div class="p-6 bg-white flex items-center justify-center">
    <Card class="w-[512px] border border-surface-100 shadow-sm rounded-xl">
      <template #title>
        <h2 class="text-[17.5px] font-medium text-surface-900 m-0">
          Dashboardeinrichtung
        </h2>
      </template>
      <template #subtitle>
        <p class="text-[14px] font-normal text-surface-500 mt-2 mb-0 leading-relaxed">
          Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.
        </p>
      </template>
      <template #content>
        <div class="flex flex-col gap-3 mt-6">
          <ProgressBar 
            :value="progressValue" 
            :pt="{
              root: { class: 'h-[17.5px] bg-slate-200 rounded-md overflow-hidden' },
              value: { class: 'bg-[#10b981] flex items-center justify-center' },
              label: { class: 'text-[10.5px] font-semibold text-white' }
            }"
          />
          <span class="text-[12px] font-light text-surface-500">
            Projektmetriken werden analysiert
          </span>
        </div>
      </template>
      <template #footer>
        <div class="flex justify-end mt-6">
          <Button 
            label="Weiter" 
            severity="secondary" 
            disabled 
            class="px-4 py-2 text-[14px] font-medium"
          />
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