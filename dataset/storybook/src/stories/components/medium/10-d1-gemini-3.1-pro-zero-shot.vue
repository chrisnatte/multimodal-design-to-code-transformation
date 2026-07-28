<template>
  <div class="flex flex-col w-full max-w-[512px] p-5 bg-white rounded-xl shadow-sm border border-gray-100 font-sans gap-6">
    
    <!-- Header Section -->
    <div class="flex flex-col gap-2">
      <h2 class="text-lg font-medium text-slate-800 m-0">Dashboardeinrichtung</h2>
      <p class="text-sm font-normal text-slate-500 m-0 leading-snug">
        Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.
      </p>
    </div>

    <!-- Progress Section -->
    <div class="flex flex-col gap-3">
      <ProgressBar 
        :value="progressValue" 
        style="height: 18px" 
        :pt="{ value: { class: '!bg-[#10B981]' } }" 
      />
      <span class="text-xs font-light text-slate-500">
        Projektmetriken werden analysiert
      </span>
    </div>

    <!-- Footer Section -->
    <div class="flex flex-row justify-end">
      <Button 
        label="Weiter" 
        severity="secondary" 
        disabled 
      />
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import ProgressBar from 'primevue/progressbar';
import Button from 'primevue/button';

// Form/Input state mapped from Figma JSON components
const progressValue = ref(50);
</script>