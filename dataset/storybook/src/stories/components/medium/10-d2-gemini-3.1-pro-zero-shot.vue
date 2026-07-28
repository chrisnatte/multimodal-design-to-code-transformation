<template>
  <Card style="width: 512px" class="rounded-xl shadow-sm border border-surface-200">
    <template #title>
      <div class="text-[17.5px] font-medium text-surface-800 m-0">
        Dashboardeinrichtung
      </div>
    </template>
    <template #subtitle>
      <div class="text-[14px] font-normal text-surface-500 m-0">
        Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.
      </div>
    </template>
    <template #content>
      <div class="flex flex-col gap-3 mt-4">
        <ProgressBar :value="progressValue" style="height: 17.5px" />
        <span class="text-[12px] font-light text-surface-600 m-0">
          Projektmetriken werden analysiert
        </span>
      </div>
    </template>
    <template #footer>
      <div class="flex justify-end mt-2">
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