<template>
  <div class="p-6 flex flex-col gap-2.5 bg-white">
    <Card class="w-[512px]">
      <template #title>
        <span class="text-[17.5px] font-medium">Dashboardeinrichtung</span>
      </template>
      <template #content>
        <div class="flex flex-col gap-4">
          <p class="text-sm text-gray-600 m-0">
            Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.
          </p>
          <div class="flex flex-col gap-3">
            <ProgressBar :value="progressValue" :showValue="true" />
            <span class="text-xs font-light text-gray-500">
              Projektmetriken werden analysiert
            </span>
          </div>
        </div>
      </template>
      <template #footer>
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