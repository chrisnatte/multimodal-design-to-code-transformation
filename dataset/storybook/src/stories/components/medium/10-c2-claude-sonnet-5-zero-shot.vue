<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-50">
    <Card class="w-[480px]">
      <template #title>
        <span class="text-lg font-semibold">Dashboardeinrichtung</span>
      </template>
      <template #content>
        <p class="text-gray-500 text-sm mb-4">
          Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.
        </p>
        <ProgressBar :value="progressValue" class="h-6 mb-3"></ProgressBar>
        <p class="text-gray-400 text-sm">Projektmetriken werden analysiert</p>
      </template>
      <template #footer>
        <div class="flex justify-end mt-2">
          <Button label="Weiter" severity="secondary" variant="text" disabled />
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