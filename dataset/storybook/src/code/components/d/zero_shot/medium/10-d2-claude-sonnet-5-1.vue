<template>
  <div class="flex p-6 bg-white">
    <Card style="width: 512px" class="rounded-xl">
      <template #content>
        <div class="flex flex-col gap-[7px]">
          <div class="flex flex-col gap-[7px]">
            <span class="text-[17.5px] font-medium text-gray-900">Dashboardeinrichtung</span>
            <span class="text-sm font-normal text-gray-600">
              Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.
            </span>
          </div>
          <div class="flex flex-col gap-3 mt-6">
            <ProgressBar :value="progressValue" :showValue="true" style="height: 17.5px" />
            <span class="text-xs font-light text-gray-500">Projektmetriken werden analysiert</span>
          </div>
          <div class="flex justify-end mt-4">
            <Button label="Weiter" severity="secondary" disabled />
          </div>
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