<template>
  <Card class="w-72 shadow-md rounded-xl">
    <template #content>
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-lg font-semibold text-gray-800 m-0">Paket 1</h3>
        <Tag severity="info" class="bg-blue-50 text-blue-500 border-none">
          <div class="flex items-center gap-1">
            <i class="pi pi-arrow-up-right text-xs"></i>
            <span class="text-xs font-medium">Beliebt</span>
          </div>
        </Tag>
      </div>

      <div class="flex flex-col gap-3 mb-6">
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

      <Button
        label="Jetzt starten"
        class="w-full bg-emerald-500 border-emerald-500 hover:bg-emerald-600 hover:border-emerald-600 text-white font-medium py-3 rounded-full"
      />
    </template>
  </Card>
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