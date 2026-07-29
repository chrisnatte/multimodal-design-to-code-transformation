<template>
  <Card class="w-72 shadow-md rounded-xl">
    <template #title>
      <div class="flex items-center justify-between">
        <span class="text-lg font-semibold">Paket 1</span>
        <Tag severity="info" rounded class="!bg-blue-50 !text-blue-600">
          <span class="flex items-center gap-1 text-xs font-medium">
            <i class="pi pi-arrow-up-right text-xs"></i>
            Beliebt
          </span>
        </Tag>
      </div>
    </template>
    <template #content>
      <div class="flex flex-col gap-3 mt-2">
        <div class="flex items-center gap-2">
          <Checkbox v-model="feature1" binary disabled />
          <span class="text-gray-700">Unbegrenzte Projekte</span>
        </div>
        <div class="flex items-center gap-2">
          <Checkbox v-model="feature2" binary disabled />
          <span class="text-gray-700">Unbegrenzte Dashboards</span>
        </div>
        <div class="flex items-center gap-2">
          <Checkbox v-model="feature3" binary disabled />
          <span class="text-gray-700">Erweiterte Analytics</span>
        </div>
      </div>
    </template>
    <template #footer>
      <Button label="Jetzt starten" class="w-full mt-2" severity="success" />
    </template>
  </Card>
</template>

<script setup>
import { ref } from 'vue';
import Card from 'primevue/card';
import Checkbox from 'primevue/checkbox';
import Tag from 'primevue/tag';
import Button from 'primevue/button';

const feature1 = ref(true);
const feature2 = ref(true);
const feature3 = ref(true);
</script>