<template>
  <div class="p-6 flex justify-center bg-white">
    <Card class="w-64 shadow-md rounded-xl">
      <template #title>
        <div class="flex items-center justify-between w-full">
          <span class="text-lg font-medium text-gray-800">Paket 1</span>
          <Tag severity="info" :rounded="false" class="!bg-blue-50">
            <div class="flex items-center gap-1 px-1">
              <i class="pi pi-arrow-up-right text-xs"></i>
              <span class="text-xs font-bold">Beliebt</span>
            </div>
          </Tag>
        </div>
      </template>
      <template #content>
        <div class="flex flex-col gap-4 mt-2">
          <div class="flex items-center gap-2">
            <Checkbox v-model="feature1" binary disabled />
            <span class="text-sm text-gray-700">Unbegrenzte Projekte</span>
          </div>
          <div class="flex items-center gap-2">
            <Checkbox v-model="feature2" binary disabled />
            <span class="text-sm text-gray-700">Unbegrenzte Dashboards</span>
          </div>
          <div class="flex items-center gap-2">
            <Checkbox v-model="feature3" binary disabled />
            <span class="text-sm text-gray-700">Erweiterte Analytics</span>
          </div>
        </div>
      </template>
      <template #footer>
        <Button label="Jetzt starten" class="w-full" style="background-color: #10b981; border-color: #10b981" />
      </template>
    </Card>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Card from 'primevue/card';
import Tag from 'primevue/tag';
import Checkbox from 'primevue/checkbox';
import Button from 'primevue/button';

const feature1 = ref(true);
const feature2 = ref(true);
const feature3 = ref(true);
</script>