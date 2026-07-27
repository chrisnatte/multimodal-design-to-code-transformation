<template>
  <Card class="w-[32rem] rounded-xl bg-white shadow-sm">
    <template #title>
      <span class="text-lg font-medium">Dashboardeinrichtung</span>
    </template>
    <template #subtitle>
      <span class="text-sm font-normal">Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.</span>
    </template>
    <template #content>
      <div class="flex flex-col gap-3">
        <ProgressBar :value="progressValue" />
        <span class="text-xs font-light">Projektmetriken werden analysiert</span>
      </div>
    </template>
    <template #footer>
      <div class="flex justify-end">
        <Button label="Weiter" severity="secondary" disabled />
      </div>
    </template>
  </Card>
</template>

<script setup>
import { ref } from 'vue';
import Card from 'primevue/card';
import Button from 'primevue/button';
import ProgressBar from 'primevue/progressbar';

const progressValue = ref(50);
</script>