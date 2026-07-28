<template>
  <div class="w-64 rounded-xl bg-white shadow flex flex-col">
    <div class="p-[17.5px] flex flex-col gap-8">
      <div class="flex justify-between items-center">
        <span class="text-lg font-medium text-gray-900">Paket 1</span>
        <Tag icon="pi pi-arrow-up-right" severity="info" value="Beliebt" />
      </div>
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-2">
          <Checkbox v-model="checked1" binary readonly inputId="feature1" :pt="{ box: { style: { backgroundColor: 'rgb(16, 185, 129)', borderColor: 'rgb(16, 185, 129)' } }, icon: { style: { color: '#ffffff' } } }" />
          <label for="feature1" class="text-sm text-gray-700">Unbegrenzte Projekte</label>
        </div>
        <div class="flex items-center gap-2">
          <Checkbox v-model="checked2" binary readonly inputId="feature2" :pt="{ box: { style: { backgroundColor: 'rgb(16, 185, 129)', borderColor: 'rgb(16, 185, 129)' } }, icon: { style: { color: '#ffffff' } } }" />
          <label for="feature2" class="text-sm text-gray-700">Unbegrenzte Dashboards</label>
        </div>
        <div class="flex items-center gap-2">
          <Checkbox v-model="checked3" binary readonly inputId="feature3" :pt="{ box: { style: { backgroundColor: 'rgb(16, 185, 129)', borderColor: 'rgb(16, 185, 129)' } }, icon: { style: { color: '#ffffff' } } }" />
          <label for="feature3" class="text-sm text-gray-700">Erweiterte Analytics</label>
        </div>
      </div>
      <div class="flex">
        <Button label="Jetzt starten" class="w-full" :style="{ backgroundColor: 'rgb(16, 185, 129)', borderColor: 'rgb(16, 185, 129)' }" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';
import Tag from 'primevue/tag';

const checked1 = ref(true);
const checked2 = ref(true);
const checked3 = ref(true);
</script>