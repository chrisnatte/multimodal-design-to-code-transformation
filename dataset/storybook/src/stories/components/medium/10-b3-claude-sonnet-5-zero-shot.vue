<template>
  <Card class="w-[512px]">
    <template #title>
      <div class="flex flex-col gap-[7px]">
        <span class="text-[17.5px] font-medium">Dashboardeinrichtung</span>
        <span class="text-sm font-normal text-gray-600">
          Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.
        </span>
      </div>
    </template>
    <template #content>
      <div class="flex flex-col gap-3">
        <ProgressBar :value="progressValue" />
        <span class="text-xs font-light">Projektmetriken werden analysiert</span>
      </div>
    </template>
    <template #footer>
      <div class="flex justify-end gap-[7px]">
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