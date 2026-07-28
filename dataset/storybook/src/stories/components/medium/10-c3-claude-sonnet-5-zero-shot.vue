<template>
  <div class="flex justify-center p-6">
    <Card class="w-full max-w-xl">
      <template #title>
        <span class="text-base font-semibold">Dashboardeinrichtung</span>
      </template>
      <template #content>
        <p class="text-sm text-gray-500 mt-1 mb-4">
          Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.
        </p>
        <ProgressBar :value="progressValue" class="h-6"></ProgressBar>
        <p class="text-sm text-gray-500 mt-3">
          Projektmetriken werden analysiert
        </p>
      </template>
      <template #footer>
        <div class="flex justify-end mt-2">
          <Button label="Weiter" severity="secondary" variant="text" />
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