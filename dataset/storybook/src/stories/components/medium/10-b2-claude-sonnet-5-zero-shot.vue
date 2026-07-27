<template>
  <Card class="w-full max-w-[512px] rounded-xl">
    <template #title>
      <div class="flex flex-col gap-2">
        <span class="text-lg font-medium">Dashboardeinrichtung</span>
      </div>
    </template>
    <template #subtitle>
      <span class="text-sm font-normal">
        Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.
      </span>
    </template>
    <template #content>
      <div class="flex flex-col gap-3">
        <ProgressBar :value="progressValue" />
        <span class="text-xs font-light">Projektmetriken werden analysiert</span>
      </div>
    </template>
    <template #footer>
      <div class="flex justify-end gap-2">
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