<template>
  <Card class="w-[512px] bg-white rounded-xl shadow-sm">
    <template #title>
      <span class="text-[17.5px] font-medium font-sans text-surface-900">
        Dashboardeinrichtung
      </span>
    </template>
    <template #subtitle>
      <span class="text-[14px] font-normal font-sans text-surface-600 block mt-[7px]">
        Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.
      </span>
    </template>
    <template #content>
      <div class="flex flex-col gap-3 mt-6">
        <ProgressBar :value="progressValue" />
        <span class="text-[12px] font-light font-sans text-surface-700">
          Projektmetriken werden analysiert
        </span>
      </div>
    </template>
    <template #footer>
      <div class="flex justify-end mt-6">
        <Button label="Weiter" severity="secondary" disabled />
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