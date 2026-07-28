<template>
  <Card class="w-full max-w-[520px] border border-surface-200 shadow-sm rounded-2xl p-2">
    <template #content>
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h2 class="text-xl font-semibold text-surface-800 m-0">Dashboardeinrichtung</h2>
          <p class="text-surface-500 text-base m-0 leading-relaxed">
            Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.
          </p>
        </div>

        <div class="flex flex-col gap-3">
          <ProgressBar 
            :value="progressValue" 
            class="h-4 rounded-full bg-surface-100" 
            :pt="{
              value: { class: 'bg-[#10b981] rounded-full' },
              label: { class: 'text-[11px] font-bold text-white' }
            }"
          />
          <span class="text-sm text-surface-500">Projektmetriken werden analysiert</span>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="flex justify-end mt-2">
        <Button 
          label="Weiter" 
          severity="secondary" 
          class="bg-surface-100 hover:bg-surface-200 text-surface-600 border-none font-medium px-6 py-2.5 rounded-lg"
        />
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
</script>