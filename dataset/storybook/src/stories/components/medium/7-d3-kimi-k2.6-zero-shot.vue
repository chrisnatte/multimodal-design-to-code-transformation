<template>
  <Card class="w-64 rounded-xl shadow-sm border border-slate-100">
    <template #title>
      <div class="flex items-center justify-between mb-8">
        <span class="text-xl font-medium text-slate-800">Paket 1</span>
        <Tag value="Beliebt" severity="info" icon="pi pi-arrow-up-right" />
      </div>
    </template>
    <template #content>
      <div class="flex flex-col gap-4 mb-8">
        <div class="flex items-center gap-2">
          <Checkbox v-model="checked1" binary />
          <span class="text-sm text-slate-700">Unbegrenzte Projekte</span>
        </div>
        <div class="flex items-center gap-2">
          <Checkbox v-model="checked2" binary />
          <span class="text-sm text-slate-700">Unbegrenzte Dashboards</span>
        </div>
        <div class="flex items-center gap-2">
          <Checkbox v-model="checked3" binary />
          <span class="text-sm text-slate-700">Erweiterte Analytics</span>
        </div>
      </div>
    </template>
    <template #footer>
      <Button
        label="Jetzt starten"
        class="w-full !bg-emerald-500 !border-emerald-500 hover:!bg-emerald-600 hover:!border-emerald-600"
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

const checked1 = ref(true);
const checked2 = ref(true);
const checked3 = ref(true);
</script>