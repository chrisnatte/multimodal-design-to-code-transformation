<template>
  <Card class="w-80 shadow-md rounded-xl">
    <template #title>
      <div class="flex items-center justify-between">
        <span class="text-xl font-semibold text-surface-900">Paket 1</span>
        <Tag icon="pi pi-arrow-up-right" value="Beliebt" severity="info" rounded class="font-semibold" />
      </div>
    </template>
    <template #content>
      <div class="flex flex-col gap-3">
        <div class="flex items-center gap-3">
          <Checkbox v-model="checked1" binary />
          <span class="text-surface-700">Unbegrenzte Projekte</span>
        </div>
        <div class="flex items-center gap-3">
          <Checkbox v-model="checked2" binary />
          <span class="text-surface-700">Unbegrenzte Dashboards</span>
        </div>
        <div class="flex items-center gap-3">
          <Checkbox v-model="checked3" binary />
          <span class="text-surface-700">Erweiterte Analytics</span>
        </div>
      </div>
    </template>
    <template #footer>
      <Button label="Jetzt starten" severity="success" class="w-full" />
    </template>
  </Card>
</template>

<script setup>
import { ref } from 'vue';
import Card from 'primevue/card';
import Tag from 'primevue/tag';
import Checkbox from 'primevue/checkbox';
import Button from 'primevue/button';

const checked1 = ref(true);
const checked2 = ref(true);
const checked3 = ref(true);
</script>