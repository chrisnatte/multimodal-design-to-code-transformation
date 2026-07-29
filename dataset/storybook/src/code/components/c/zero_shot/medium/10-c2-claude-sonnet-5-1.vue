<template>
  <div class="flex justify-center items-center p-8">
    <Card class="w-full max-w-md" :pt="{ body: { class: 'p-6' } }">
      <template #title>
        <span class="text-lg font-semibold">Dashboardeinrichtung</span>
      </template>
      <template #content>
        <p class="text-sm text-gray-500 mt-1 mb-4">
          Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.
        </p>
        <ProgressBar :value="progressValue" style="height: 1.5rem"></ProgressBar>
        <p class="text-sm text-gray-500 mt-4 mb-6">
          Projektmetriken werden analysiert
        </p>
        <div class="flex justify-end">
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