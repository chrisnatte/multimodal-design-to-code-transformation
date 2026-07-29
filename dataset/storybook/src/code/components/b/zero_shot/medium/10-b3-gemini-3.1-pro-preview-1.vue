<template>
  <div class="flex flex-col p-6 bg-white">
    <Card class="rounded-xl">
      <template #title>
        <div class="text-[17.5px] font-medium font-sans">
          Dashboardeinrichtung
        </div>
      </template>
      <template #subtitle>
        <div class="text-[14px] font-normal font-sans mt-[7px]">
          Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.
        </div>
      </template>
      <template #content>
        <div class="flex flex-col gap-3 mt-4">
          <ProgressBar :value="progressValue" />
          <div class="text-[12px] font-light font-sans">
            Projektmetriken werden analysiert
          </div>
        </div>
      </template>
      <template #footer>
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