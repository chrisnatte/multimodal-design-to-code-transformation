<template>
  <Card class="w-64 rounded-xl shadow-sm">
    <template #content>
      <div class="flex flex-col gap-8">
        <div class="flex items-center justify-between">
          <span class="text-lg font-medium text-gray-800">Paket 1</span>
          <Tag severity="info" class="!bg-blue-50 !text-blue-600">
            <div class="flex items-center gap-1">
              <i class="pi pi-arrow-up-right text-xs"></i>
              <span class="text-xs font-bold">Beliebt</span>
            </div>
          </Tag>
        </div>

        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-2">
            <Checkbox v-model="feature1" binary />
            <span class="text-sm text-gray-700">Unbegrenzte Projekte</span>
          </div>
          <div class="flex items-center gap-2">
            <Checkbox v-model="feature2" binary />
            <span class="text-sm text-gray-700">Unbegrenzte Dashboards</span>
          </div>
          <div class="flex items-center gap-2">
            <Checkbox v-model="feature3" binary />
            <span class="text-sm text-gray-700">Erweiterte Analytics</span>
          </div>
        </div>

        <Button label="Jetzt starten" class="w-full !bg-emerald-500 !border-emerald-500" />
      </div>
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