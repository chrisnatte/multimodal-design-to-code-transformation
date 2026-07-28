<template>
  <div class="flex justify-center items-center p-6">
    <Card class="w-80 shadow-md rounded-xl">
      <template #title>
        <div class="flex items-center justify-between">
          <span class="text-xl font-semibold text-gray-800">Paket 1</span>
          <Tag severity="info" rounded>
            <span class="flex items-center gap-1">
              <i class="pi pi-arrow-up-right text-xs"></i>
              <span>Beliebt</span>
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
        <Button label="Jetzt starten" severity="success" class="w-full mt-4" />
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