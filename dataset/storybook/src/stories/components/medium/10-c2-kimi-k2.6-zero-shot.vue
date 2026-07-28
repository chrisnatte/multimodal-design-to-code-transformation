<template>
  <Card class="w-full max-w-xl">
    <template #title>
      <span class="text-xl font-semibold text-surface-900">Dashboardeinrichtung</span>
    </template>
    <template #content>
      <div class="flex flex-col gap-4">
        <p class="text-surface-600 leading-relaxed">
          Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.
        </p>
        <ProgressBar :value="progress" />
        <p class="text-sm text-surface-600">
          Projektmetriken werden analysiert
        </p>
        <div class="flex justify-end">
          <Button label="Weiter" severity="secondary" />
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Card from 'primevue/card';
import ProgressBar from 'primevue/progressbar';

const progress = ref(50);
</script>