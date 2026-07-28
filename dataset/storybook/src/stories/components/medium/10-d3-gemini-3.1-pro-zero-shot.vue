<template>
  <Card class="w-[512px] shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-surface-100 rounded-xl overflow-hidden">
    <template #content>
      <div class="flex flex-col gap-6 pt-1">
        
        <!-- Caption Section -->
        <div class="flex flex-col gap-[7px]">
          <h2 class="m-0 text-[17.5px] font-medium text-surface-900">
            Dashboardeinrichtung
          </h2>
          <p class="m-0 text-sm font-normal text-surface-600">
            Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.
          </p>
        </div>

        <!-- Progress Section -->
        <div class="flex flex-col gap-3">
          <ProgressBar 
            :value="progressValue" 
            class="h-[17.5px] bg-surface-200 border-none rounded-md"
            :pt="{
              value: { class: 'bg-[#10b981] rounded-l-md custom-progress-value' },
              label: { class: 'text-[10.5px] font-semibold text-white leading-none' }
            }"
          />
          <span class="text-xs font-light text-surface-600">
            Projektmetriken werden analysiert
          </span>
        </div>

        <!-- Footer Section -->
        <div class="flex justify-end mt-1">
          <Button 
            label="Weiter" 
            disabled 
            severity="secondary" 
            class="px-4 py-2 bg-surface-100 border-none text-surface-500 font-medium text-sm rounded-md"
          />
        </div>

      </div>
    </template>
  </Card>
</template>

<script setup>
import { ref } from 'vue';
import Card from 'primevue/card';
import Button from 'primevue/button';
import ProgressBar from 'primevue/progressbar';

const progressValue = ref(50);
</script>

<style scoped>
/* Ensure standard PrimeVue transitions/overflows work smoothly with custom classes */
:deep(.custom-progress-value) {
  transition: width 1s ease-in-out;
}
</style>