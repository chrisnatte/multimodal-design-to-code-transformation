<template>
  <div class="p-6 flex justify-center bg-white">
    <Card class="w-64 shadow-md rounded-xl overflow-hidden">
      <template #title>
        <div class="flex items-center justify-between w-full">
          <span class="text-lg font-medium">Paket 1</span>
          <Tag severity="info" icon="pi pi-arrow-up-right">
            <span class="font-bold text-xs">Beliebt</span>
          </Tag>
        </div>
      </template>
      <template #content>
        <div class="flex flex-col gap-4 mt-2">
          <div class="flex items-center gap-2">
            <Checkbox v-model="feature1" binary disabled />
            <label class="text-sm text-gray-700">Unbegrenzte Projekte</label>
          </div>
          <div class="flex items-center gap-2">
            <Checkbox v-model="feature2" binary disabled />
            <label class="text-sm text-gray-700">Unbegrenzte Dashboards</label>
          </div>
          <div class="flex items-center gap-2">
            <Checkbox v-model="feature3" binary disabled />
            <label class="text-sm text-gray-700">Erweiterte Analytics</label>
          </div>
        </div>
      </template>
      <template #footer>
        <Button label="Jetzt starten" class="w-full" severity="success" />
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