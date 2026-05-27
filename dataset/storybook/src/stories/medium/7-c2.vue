<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center p-6">
    <Card class="w-[320px] rounded-2xl shadow-sm">
      <template #content>
        <div class="flex flex-col gap-6">
          <div class="flex items-start justify-between">
            <h2 class="text-3xl font-semibold text-slate-700">Paket 1</h2>
            <Tag value="Beliebt" icon="pi pi-arrow-up-right" severity="info" rounded />
          </div>

          <div class="flex flex-col gap-4">
            <div class="flex items-center gap-3">
              <Checkbox v-model="state.projects" binary disabled />
              <span class="text-2xl text-slate-700">Unbegrenzte Projekte</span>
            </div>
            <div class="flex items-center gap-3">
              <Checkbox v-model="state.dashboards" binary disabled />
              <span class="text-2xl text-slate-700">Unbegrenzte Dashboards</span>
            </div>
            <div class="flex items-center gap-3">
              <Checkbox v-model="state.analytics" binary disabled />
              <span class="text-2xl text-slate-700">Erweiterte Analytics</span>
            </div>
          </div>

          <Button label="Jetzt starten" class="w-full" size="large" />
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import Card from 'primevue/card';
import Tag from 'primevue/tag';
import Checkbox from 'primevue/checkbox';
import Button from 'primevue/button';

const state = reactive({
  projects: true,
  dashboards: true,
  analytics: true
});
</script>