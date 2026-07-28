<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-50 p-6">
    <Card class="w-full max-w-lg shadow-md rounded-lg">
      <template #title>
        <h2 class="text-xl font-semibold text-gray-800">Dashboardeinrichtung</h2>
      </template>
      <template #content>
        <div class="flex flex-col gap-4">
          <p class="text-gray-600">
            Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.
          </p>
          <ProgressBar :value="progressValue" />
          <p class="text-gray-600 text-sm">Projektmetriken werden analysiert</p>
          <div class="flex justify-end mt-2">
            <Button label="Weiter" severity="secondary" />
          </div>
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