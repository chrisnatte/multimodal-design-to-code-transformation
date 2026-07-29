<template>
  <div class="p-6 bg-white w-[560px]">
    <Card class="rounded-xl shadow-sm border border-surface-100">
      <template #title>
        <div class="text-[17.5px] font-medium text-surface-900">
          Dashboardeinrichtung
        </div>
      </template>
      <template #subtitle>
        <div class="text-sm font-normal text-surface-600 mt-1.5">
          Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.
        </div>
      </template>
      <template #content>
        <div class="flex flex-col gap-3 mt-4">
          <ProgressBar :value="progressValue" style="height: 17.5px" />
          <div class="text-xs font-light text-surface-600">
            Projektmetriken werden analysiert
          </div>
        </div>
      </template>
      <template #footer>
        <div class="flex justify-end mt-2">
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