<template>
  <div class="min-h-screen bg-gray-100 flex items-start justify-start p-6">
    <Card class="w-[260px] rounded-2xl shadow-sm">
      <template #content>
        <div class="flex flex-col gap-6">
          <div class="flex items-center justify-between">
            <h2 class="text-3xl font-semibold text-slate-700">Paket 1</h2>
            <Tag value="↗ Beliebt" rounded class="bg-blue-100 text-blue-700 border-0 text-sm font-semibold px-3 py-1" />
          </div>

          <div class="flex flex-col gap-4">
            <div class="flex items-center gap-3">
              <Checkbox v-model="state.features.projects" binary />
              <label class="text-2xl text-slate-700">Unbegrenzte Projekte</label>
            </div>
            <div class="flex items-center gap-3">
              <Checkbox v-model="state.features.dashboards" binary />
              <label class="text-2xl text-slate-700">Unbegrenzte Dashboards</label>
            </div>
            <div class="flex items-center gap-3">
              <Checkbox v-model="state.features.analytics" binary />
              <label class="text-2xl text-slate-700">Erweiterte Analytics</label>
            </div>
          </div>

          <Button label="Jetzt starten" class="w-full" />
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Card from 'primevue/card'
import Tag from 'primevue/tag'
import Checkbox from 'primevue/checkbox'
import Button from 'primevue/button'

const state = reactive({
  features: {
    projects: true,
    dashboards: true,
    analytics: true
  }
})
</script>