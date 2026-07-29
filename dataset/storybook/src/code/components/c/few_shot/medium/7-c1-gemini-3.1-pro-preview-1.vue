<template>
  <Card class="w-[320px] border border-surface-200 shadow-sm rounded-2xl p-2">
    <template #title>
      <div class="flex items-center justify-between">
        <span class="text-xl font-medium text-surface-900">Paket 1</span>
        <Tag value="Beliebt" icon="pi pi-arrow-up-right" severity="info" />
      </div>
    </template>
    <template #content>
      <div class="flex flex-col gap-4 mt-2">
        <div class="flex items-center gap-3">
          <Checkbox v-model="isChecked" binary readonly class="pointer-events-none" />
          <span class="text-surface-700">Unbegrenzte Projekte</span>
        </div>
        <div class="flex items-center gap-3">
          <Checkbox v-model="isChecked" binary readonly class="pointer-events-none" />
          <span class="text-surface-700">Unbegrenzte Dashboards</span>
        </div>
        <div class="flex items-center gap-3">
          <Checkbox v-model="isChecked" binary readonly class="pointer-events-none" />
          <span class="text-surface-700">Erweiterte Analytics</span>
        </div>
      </div>
    </template>
    <template #footer>
      <Button label="Jetzt starten" severity="primary" class="w-full mt-4" />
    </template>
  </Card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Card from 'primevue/card';
import Tag from 'primevue/tag';
import Checkbox from 'primevue/checkbox';
import Button from 'primevue/button';

const isChecked = ref(true);
</script>