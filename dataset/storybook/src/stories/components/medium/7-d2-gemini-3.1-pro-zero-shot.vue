<template>
  <Card class="w-[256px] shadow-sm border border-surface-200 rounded-xl">
    <template #title>
      <div class="flex items-center justify-between">
        <span class="text-[17.5px] font-medium leading-tight">Paket 1</span>
        <Tag severity="info" value="Beliebt" icon="pi pi-arrow-up-right" />
      </div>
    </template>
    <template #content>
      <div class="flex flex-col gap-4 py-2">
        <div class="flex items-center gap-2">
          <Checkbox v-model="cb1" binary inputId="cb1" />
          <label for="cb1" class="text-sm text-surface-900 dark:text-surface-0">Unbegrenzte Projekte</label>
        </div>
        <div class="flex items-center gap-2">
          <Checkbox v-model="cb2" binary inputId="cb2" />
          <label for="cb2" class="text-sm text-surface-900 dark:text-surface-0">Unbegrenzte Dashboards</label>
        </div>
        <div class="flex items-center gap-2">
          <Checkbox v-model="cb3" binary inputId="cb3" />
          <label for="cb3" class="text-sm text-surface-900 dark:text-surface-0">Erweiterte Analytics</label>
        </div>
      </div>
    </template>
    <template #footer>
      <Button label="Jetzt starten" class="w-full" fluid />
    </template>
  </Card>
</template>

<script setup>
import { ref } from 'vue';
import Card from 'primevue/card';
import Tag from 'primevue/tag';
import Checkbox from 'primevue/checkbox';
import Button from 'primevue/button';

const cb1 = ref(true);
const cb2 = ref(true);
const cb3 = ref(true);
</script>