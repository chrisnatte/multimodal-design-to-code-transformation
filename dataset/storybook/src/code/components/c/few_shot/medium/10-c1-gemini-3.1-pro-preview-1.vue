<template>
  <Card class="w-full max-w-2xl shadow-sm border border-slate-100 rounded-xl" :pt="{ body: 'p-8' }">
    <template #content>
      <div class="flex flex-col gap-8">
        <div class="flex flex-col gap-2">
          <h2 class="text-xl font-semibold text-slate-800 m-0">Dashboardeinrichtung</h2>
          <p class="text-slate-500 text-base m-0">
            Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.
          </p>
        </div>

        <div class="flex flex-col gap-2">
          <ProgressBar :value="progress" class="h-5 text-sm font-medium" />
          <span class="text-sm text-slate-500">Projektmetriken werden analysiert</span>
        </div>

        <div class="flex justify-end">
          <Button 
            label="Weiter" 
            severity="secondary" 
            class="bg-slate-100 text-slate-600 border-none hover:bg-slate-200 px-6" 
          />
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Card from 'primevue/card';
import ProgressBar from 'primevue/progressbar';
import Button from 'primevue/button';

const progress = ref(50);
</script>