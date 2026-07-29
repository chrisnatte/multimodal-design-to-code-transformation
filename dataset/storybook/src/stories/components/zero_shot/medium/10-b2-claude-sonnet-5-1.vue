<template>
  <div class="p-6 bg-white inline-block">
    <Card class="w-[512px]">
      <template #content>
        <div class="flex flex-col gap-6 p-4">
          <div class="flex flex-col gap-2">
            <h3 class="text-lg font-medium m-0">Dashboardeinrichtung</h3>
            <p class="text-sm m-0">
              Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.
            </p>
          </div>

          <div class="flex flex-col gap-3">
            <ProgressBar :value="progressValue" />
            <span class="text-xs font-light">Projektmetriken werden analysiert</span>
          </div>

          <div class="flex justify-end gap-2">
            <Button label="Weiter" severity="secondary" disabled />
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