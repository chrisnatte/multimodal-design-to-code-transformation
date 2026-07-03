<template>
  <div class="min-h-screen bg-neutral-100 p-6 flex items-start">
    <Card class="w-[260px] rounded-xl shadow-sm border border-neutral-200">
      <template #content>
        <div class="flex flex-col p-4 gap-8">
          <div class="flex items-center justify-between gap-2">
            <h3 class="text-[30px] font-medium text-slate-700 leading-none">Paket 1</h3>
            <Tag value="Beliebt" icon="pi pi-arrow-up-right" severity="info" class="text-xs font-bold" />
          </div>

          <div class="flex flex-col gap-4">
            <div class="flex items-center gap-2">
              <Checkbox v-model="state.projects" binary inputId="projects" />
              <label for="projects" class="text-2xl text-slate-700">Unbegrenzte Projekte</label>
            </div>
            <div class="flex items-center gap-2">
              <Checkbox v-model="state.dashboards" binary inputId="dashboards" />
              <label for="dashboards" class="text-2xl text-slate-700">Unbegrenzte Dashboards</label>
            </div>
            <div class="flex items-center gap-2">
              <Checkbox v-model="state.analytics" binary inputId="analytics" />
              <label for="analytics" class="text-2xl text-slate-700">Erweiterte Analytics</label>
            </div>
          </div>

          <div class="flex">
            <Button label="Jetzt starten" class="w-full !bg-emerald-500 !border-emerald-500 !text-white" />
          </div>
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