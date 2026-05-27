<template>
  <div class="flex flex-col gap-2 bg-white rounded-xl">
    <Card class="w-full">
      <template #content>
        <div class="flex flex-col gap-6 p-4">
          <div class="flex flex-col gap-2">
            <span class="text-[17.5px] font-medium">Dashboardeinrichtung</span>
            <span class="text-sm font-normal">Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.</span>
          </div>

          <div class="flex flex-col gap-3">
            <ProgressBar :value="state.progress" />
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
import { reactive } from 'vue';
import Button from 'primevue/button';
import Card from 'primevue/card';
import ProgressBar from 'primevue/progressbar';

const state = reactive({
  progress: 50
});
</script>