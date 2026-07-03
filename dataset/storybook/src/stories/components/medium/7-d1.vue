<template>
  <div class="bg-white rounded-xl border border-slate-200 shadow-sm w-[260px]">
    <div class="flex flex-col gap-8 p-4">
      <div class="flex items-center justify-between gap-2">
        <h3 class="text-[30px] leading-none font-medium text-slate-700">Paket 1</h3>
        <Tag value="Beliebt" icon="pi pi-arrow-up-right" severity="info" class="text-xs font-bold" />
      </div>

      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-2">
          <Checkbox v-model="state.features.projects" binary inputId="projects" />
          <label for="projects" class="text-[28px] text-slate-600">Unbegrenzte Projekte</label>
        </div>
        <div class="flex items-center gap-2">
          <Checkbox v-model="state.features.dashboards" binary inputId="dashboards" />
          <label for="dashboards" class="text-[28px] text-slate-600">Unbegrenzte Dashboards</label>
        </div>
        <div class="flex items-center gap-2">
          <Checkbox v-model="state.features.analytics" binary inputId="analytics" />
          <label for="analytics" class="text-[28px] text-slate-600">Erweiterte Analytics</label>
        </div>
      </div>

      <Button
        label="Jetzt starten"
        class="w-full !bg-emerald-500 !border-emerald-500 !text-white !rounded-md !py-2.5 !text-xl"
      />
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import Tag from 'primevue/tag'

const state = reactive({
  features: {
    projects: true,
    dashboards: true,
    analytics: true
  }
})
</script>