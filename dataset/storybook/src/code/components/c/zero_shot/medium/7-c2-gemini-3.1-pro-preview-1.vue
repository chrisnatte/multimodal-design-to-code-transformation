<template>
  <Card class="w-[320px] border border-surface-200 shadow-sm rounded-2xl">
    <template #title>
      <div class="flex justify-between items-center">
        <span class="text-2xl font-semibold text-surface-900">Paket 1</span>
        <Tag 
          value="Beliebt" 
          icon="pi pi-arrow-up-right" 
          class="bg-blue-50 text-blue-700 font-medium px-2 py-1 rounded-md border-none" 
        />
      </div>
    </template>
    <template #content>
      <div class="flex flex-col gap-4 mt-2">
        <div class="flex items-center gap-3">
          <Checkbox v-model="checkedState" binary readonly class="pointer-events-none" />
          <span class="text-surface-700 text-base">Unbegrenzte Projekte</span>
        </div>
        <div class="flex items-center gap-3">
          <Checkbox v-model="checkedState" binary readonly class="pointer-events-none" />
          <span class="text-surface-700 text-base">Unbegrenzte Dashboards</span>
        </div>
        <div class="flex items-center gap-3">
          <Checkbox v-model="checkedState" binary readonly class="pointer-events-none" />
          <span class="text-surface-700 text-base">Erweiterte Analytics</span>
        </div>
      </div>
    </template>
    <template #footer>
      <Button 
        label="Jetzt starten" 
        severity="success" 
        class="w-full font-semibold py-3 rounded-xl" 
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

const checkedState = ref(true);
</script>