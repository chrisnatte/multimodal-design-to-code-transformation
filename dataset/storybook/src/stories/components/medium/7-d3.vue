<template>
  <div class="min-h-screen bg-gray-100 flex items-start justify-start p-6">
    <Card class="w-[260px] rounded-xl shadow-sm border border-gray-200">
      <template #content>
        <div class="flex flex-col gap-8 p-4">
          <div class="flex items-center justify-between gap-2">
            <h3 class="text-[30px] leading-none font-medium text-slate-700">Paket 1</h3>
            <Tag
              value="Beliebt"
              icon="pi pi-arrow-up-right"
              severity="info"
              class="text-xs font-bold"
            />
          </div>

          <div class="flex flex-col gap-4">
            <div class="flex items-center gap-2">
              <Checkbox v-model="state.projects" binary inputId="projects" />
              <label for="projects" class="text-[28px] text-slate-700">Unbegrenzte Projekte</label>
            </div>
            <div class="flex items-center gap-2">
              <Checkbox v-model="state.dashboards" binary inputId="dashboards" />
              <label for="dashboards" class="text-[28px] text-slate-700">Unbegrenzte Dashboards</label>
            </div>
            <div class="flex items-center gap-2">
              <Checkbox v-model="state.analytics" binary inputId="analytics" />
              <label for="analytics" class="text-[28px] text-slate-700">Erweiterte Analytics</label>
            </div>
          </div>

          <div class="flex">
            <Button label="Jetzt starten" class="w-full" />
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Checkbox from 'primevue/checkbox'
import Tag from 'primevue/tag'

const state = reactive({
  projects: true,
  dashboards: true,
  analytics: true
})
</script>