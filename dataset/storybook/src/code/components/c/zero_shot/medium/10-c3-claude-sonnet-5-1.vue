<template>
  <div class="flex justify-center p-6">
    <Card class="w-full max-w-xl">
      <template #title>
        <span class="text-lg font-semibold">Dashboardeinrichtung</span>
      </template>
      <template #content>
        <p class="text-gray-500 text-sm mt-1 mb-4">
          Dein Dashboard zur Zeit eingerichten. Dies kann wenige Minuten dauern.
        </p>
        <ProgressBar :value="progressValue" class="mb-3"></ProgressBar>
        <p class="text-gray-500 text-sm">Projektmetriken werden analysiert</p>
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