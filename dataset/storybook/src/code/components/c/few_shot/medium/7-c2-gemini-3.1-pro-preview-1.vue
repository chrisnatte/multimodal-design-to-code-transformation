<template>
  <Card class="w-[320px] p-6">
    <template #header>
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-xl font-semibold text-slate-800 m-0">Paket 1</h2>
        <Tag value="Beliebt" icon="pi pi-arrow-up-right" severity="info" class="bg-blue-100 text-blue-700" />
      </div>
    </template>
    <template #content>
      <div class="flex flex-col gap-4 mb-6">
        <div class="flex items-center gap-3">
          <Checkbox v-model="features.projects" binary readonly class="pointer-events-none" :pt="{ box: 'bg-emerald-500 border-emerald-500' }" />
          <span class="text-slate-600">Unbegrenzte Projekte</span>
        </div>
        <div class="flex items-center gap-3">
          <Checkbox v-model="features.dashboards" binary readonly class="pointer-events-none" :pt="{ box: 'bg-emerald-500 border-emerald-500' }" />
          <span class="text-slate-600">Unbegrenzte Dashboards</span>
        </div>
        <div class="flex items-center gap-3">
          <Checkbox v-model="features.analytics" binary readonly class="pointer-events-none" :pt="{ box: 'bg-emerald-500 border-emerald-500' }" />
          <span class="text-slate-600">Erweiterte Analytics</span>
        </div>
      </div>
    </template>
    <template #footer>
      <Button label="Jetzt starten" class="w-full bg-emerald-500 border-emerald-500 hover:bg-emerald-600 hover:border-emerald-600" />
    </template>
  </Card>
</template>

<script setup>
import { ref } from 'vue';
import Card from 'primevue/card';
import Tag from 'primevue/tag';
import Checkbox from 'primevue/checkbox';
import Button from 'primevue/button';

const features = ref({
  projects: true,
  dashboards: true,
  analytics: true
});
</script>