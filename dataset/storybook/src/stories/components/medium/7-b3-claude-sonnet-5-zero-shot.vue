<template>
  <div class="p-[17.5px] flex flex-col gap-8 bg-white rounded-xl w-64">
    <div class="flex items-center justify-between gap-[7px]">
      <span class="text-[17.5px] font-medium">Paket 1</span>
      <Tag severity="info" icon="pi pi-arrow-up-right">
        <span class="text-xs font-bold">Beliebt</span>
      </Tag>
    </div>

    <div class="flex flex-col gap-4">
      <div class="flex items-center gap-2">
        <Checkbox v-model="feature1" binary />
        <span class="text-sm">Unbegrenzte Projekte</span>
      </div>
      <div class="flex items-center gap-2">
        <Checkbox v-model="feature2" binary />
        <span class="text-sm">Unbegrenzte Dashboards</span>
      </div>
      <div class="flex items-center gap-2">
        <Checkbox v-model="feature3" binary />
        <span class="text-sm">Erweiterte Analytics</span>
      </div>
    </div>

    <div class="flex gap-[7px]">
      <Button label="Jetzt starten" class="w-full" />
    </div>
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