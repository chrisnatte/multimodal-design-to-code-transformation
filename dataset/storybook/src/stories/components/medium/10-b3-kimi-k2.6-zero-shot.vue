<template>
  <Card class="w-[512px] rounded-xl">
    <template #title>
      Dashboardeinrichtung
    </template>
    <template #subtitle>
      Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.
    </template>
    <template #content>
      <div class="flex flex-col gap-3">
        <ProgressBar :value="progressValue" class="w-full" />
        <span class="text-xs font-light">
          Projektmetriken werden analysiert
        </span>
      </div>
    </template>
    <template #footer>
      <div class="flex justify-end">
        <Button :label="buttonLabel" severity="secondary" :disabled="isDisabled" />
      </div>
    </template>
  </Card>
</template>

<script setup>
import { ref } from 'vue';
import Card from 'primevue/card';
import ProgressBar from 'primevue/progressbar';
import Button from 'primevue/button';

const progressValue = ref(50);
const buttonLabel = ref('Weiter');
const isDisabled = ref(true);
</script>