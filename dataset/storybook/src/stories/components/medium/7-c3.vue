<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center p-6">
    <Card class="w-[320px] rounded-2xl shadow-sm">
      <template #content>
        <div class="flex flex-col gap-6">
          <div class="flex items-start justify-between">
            <h2 class="text-3xl font-semibold text-slate-600">Paket 1</h2>
            <Tag value="↗ Beliebt" severity="info" class="font-semibold" />
          </div>

          <div class="flex flex-col gap-4">
            <div class="flex items-center gap-3">
              <Checkbox v-model="state.project" binary disabled />
              <span class="text-2xl text-slate-600">Unbegrenzte Projekte</span>
            </div>
            <div class="flex items-center gap-3">
              <Checkbox v-model="state.dashboard" binary disabled />
              <span class="text-2xl text-slate-600">Unbegrenzte Dashboards</span>
            </div>
            <div class="flex items-center gap-3">
              <Checkbox v-model="state.analytics" binary disabled />
              <span class="text-2xl text-slate-600">Erweiterte Analytics</span>
            </div>
          </div>

          <Button label="Jetzt starten" class="w-full" severity="success" />
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Checkbox from 'primevue/checkbox';
import Tag from 'primevue/tag';

const state = reactive({
  project: true,
  dashboard: true,
  analytics: true
});
</script>