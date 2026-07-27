<template>
  <div class="flex flex-col bg-white rounded-[12px] w-[512px]">
    <div class="flex flex-col gap-6 p-[17.5px] rounded-[6px]">
      <div class="flex flex-col gap-[7px]">
        <span class="font-medium text-[17.5px]">Dashboardeinrichtung</span>
        <span class="font-normal text-[14px]">Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.</span>
      </div>
      
      <div class="flex flex-col gap-3">
        <ProgressBar :value="progressValue" />
        <span class="font-light text-[12px]">Projektmetriken werden analysiert</span>
      </div>
      
      <div class="flex flex-row gap-[7px] justify-end">
        <Button label="Weiter" severity="secondary" disabled />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ProgressBar from 'primevue/progressbar';
import Button from 'primevue/button';

const progressValue = ref(50);
</script>