<template>
  <div class="flex items-center justify-center p-8 bg-white">
    <Card class="w-full max-w-[500px] shadow-sm border border-surface-200 rounded-xl">
      <template #title>
        <div class="text-xl font-semibold text-surface-800 mb-1">
          Dashboardeinrichtung
        </div>
      </template>
      <template #subtitle>
        <div class="text-surface-500 text-sm leading-relaxed">
          Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.
        </div>
      </template>
      <template #content>
        <div class="flex flex-col gap-3 mt-4">
          <ProgressBar 
            :value="progressValue" 
            :showValue="true"
            class="h-5 rounded-md bg-surface-100"
            :pt="{
              value: { class: 'bg-[#10b981]' }
            }"
          />
          <div class="text-sm text-surface-500">
            Projektmetriken werden analysiert
          </div>
        </div>
      </template>
      <template #footer>
        <div class="flex justify-end mt-2">
          <Button 
            label="Weiter" 
            severity="secondary" 
            class="bg-surface-100 hover:bg-surface-200 text-surface-600 border-none font-medium px-5 py-2 rounded-lg"
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