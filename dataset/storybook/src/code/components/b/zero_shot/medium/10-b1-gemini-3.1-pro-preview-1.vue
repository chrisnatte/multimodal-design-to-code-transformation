<template>
  <div class="flex flex-col p-6 gap-[10px] bg-white">
    <div class="flex flex-col gap-[7px] rounded-xl bg-white">
      <div class="flex flex-col gap-6 p-[17.5px] rounded-md w-full">
        
        <div class="flex flex-col gap-[7px] w-full">
          <span class="text-[17.5px] font-medium font-sans text-gray-900">
            Dashboardeinrichtung
          </span>
          <span class="text-sm font-normal font-sans text-gray-700">
            Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.
          </span>
        </div>

        <div class="flex flex-col gap-3 w-full">
          <ProgressBar :value="progressValue" class="h-[17.5px] w-full" />
          <span class="text-xs font-light font-sans text-gray-600">
            Projektmetriken werden analysiert
          </span>
        </div>

        <div class="flex flex-row justify-end gap-[7px] w-full">
          <Button 
            label="Weiter" 
            severity="secondary" 
            disabled 
          />
        </div>

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