<template>
  <div class="w-64 bg-white rounded-xl shadow p-4 flex flex-col gap-6">
    <div class="flex items-center justify-between">
      <span class="text-lg font-medium text-gray-800">Paket 1</span>
      <Tag severity="info" icon="pi pi-arrow-up-right">
        <span class="flex items-center gap-1">
          <i class="pi pi-arrow-up-right text-xs"></i>
          <span class="font-bold text-xs">Beliebt</span>
        </span>
      </Tag>
    </div>

    <div class="flex flex-col gap-4">
      <div class="flex items-center gap-2">
        <Checkbox v-model="feature1" binary inputId="feature1" />
        <label for="feature1" class="text-sm text-gray-700">Unbegrenzte Projekte</label>
      </div>
      <div class="flex items-center gap-2">
        <Checkbox v-model="feature2" binary inputId="feature2" />
        <label for="feature2" class="text-sm text-gray-700">Unbegrenzte Dashboards</label>
      </div>
      <div class="flex items-center gap-2">
        <Checkbox v-model="feature3" binary inputId="feature3" />
        <label for="feature3" class="text-sm text-gray-700">Erweiterte Analytics</label>
      </div>
    </div>

    <Button label="Jetzt starten" class="w-full" style="background-color:#10b981; border-color:#10b981;" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Tag from 'primevue/tag';
import Checkbox from 'primevue/checkbox';
import Button from 'primevue/button';

const feature1 = ref(true);
const feature2 = ref(true);
const feature3 = ref(true);
</script>