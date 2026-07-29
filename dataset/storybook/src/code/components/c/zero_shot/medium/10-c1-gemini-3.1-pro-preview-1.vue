<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-50 p-4 font-sans">
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 max-w-[500px] w-full flex flex-col gap-6">
      
      <div class="flex flex-col gap-2">
        <h2 class="text-xl font-semibold text-slate-800 m-0">Dashboardeinrichtung</h2>
        <p class="text-sm text-slate-500 m-0 leading-relaxed">
          Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.
        </p>
      </div>

      <div class="flex flex-col gap-2">
        <ProgressBar 
          :value="progressValue" 
          :showValue="true" 
          class="h-5 rounded-md bg-slate-100" 
          :pt="{ 
            value: { class: 'bg-[#10b981] rounded-md flex items-center justify-center' },
            label: { class: 'text-white text-xs font-medium' }
          }" 
        />
        <span class="text-xs text-slate-500">Projektmetriken werden analysiert</span>
      </div>

      <div class="flex justify-end mt-2">
        <Button 
          label="Weiter" 
          class="bg-slate-50 hover:bg-slate-100 text-slate-600 border-none px-6 py-2.5 rounded-lg font-medium text-sm transition-colors" 
        />
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