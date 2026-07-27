<template>
  <Card class="w-[256px] shadow-none border border-surface-200 dark:border-surface-700 rounded-xl">
    <template #title>
      <div class="flex items-center justify-between gap-2">
        <span class="text-[17.5px] font-medium text-surface-900 dark:text-surface-0">Paket 1</span>
        <Tag value="Beliebt" severity="info" icon="pi pi-arrow-up-right" :rounded="false" />
      </div>
    </template>
    <template #content>
      <div class="flex flex-col gap-4 mt-4">
        <div class="flex items-center gap-2">
          <Checkbox v-model="checked1" inputId="cb1" binary />
          <label for="cb1" class="text-sm font-normal text-surface-700 dark:text-surface-100">Unbegrenzte Projekte </label>
        </div>
        <div class="flex items-center gap-2">
          <Checkbox v-model="checked2" inputId="cb2" binary />
          <label for="cb2" class="text-sm font-normal text-surface-700 dark:text-surface-100">Unbegrenzte Dashboards </label>
        </div>
        <div class="flex items-center gap-2">
          <Checkbox v-model="checked3" inputId="cb3" binary />
          <label for="cb3" class="text-sm font-normal text-surface-700 dark:text-surface-100">Erweiterte Analytics</label>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="flex w-full mt-4">
        <Button label="Jetzt starten" severity="primary" class="w-full" />
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

const checked1 = ref(true);
const checked2 = ref(true);
const checked3 = ref(true);
</script>