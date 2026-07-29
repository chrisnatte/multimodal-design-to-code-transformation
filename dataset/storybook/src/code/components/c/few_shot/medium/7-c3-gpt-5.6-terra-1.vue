<template>
  <Card
    :pt="{
      root: 'w-64 overflow-hidden rounded-xl border border-slate-100 shadow-sm',
      body: '!p-4',
      content: '!p-0',
    }"
  >
    <template #content>
      <div class="flex flex-col gap-5">
        <div class="flex items-center justify-between">
          <span class="text-base font-medium text-slate-700">Paket 1</span>
          <Tag value="Beliebt" icon="pi pi-arrow-up-right" severity="info" />
        </div>

        <div class="flex flex-col gap-3">
          <div class="flex items-center gap-2">
            <Checkbox v-model="unlimitedProjects" input-id="unlimited-projects" binary />
            <label for="unlimited-projects" class="text-sm text-slate-700">Unbegrenzte Projekte</label>
          </div>
          <div class="flex items-center gap-2">
            <Checkbox v-model="unlimitedDashboards" input-id="unlimited-dashboards" binary />
            <label for="unlimited-dashboards" class="text-sm text-slate-700">Unbegrenzte Dashboards</label>
          </div>
          <div class="flex items-center gap-2">
            <Checkbox v-model="advancedAnalytics" input-id="advanced-analytics" binary />
            <label for="advanced-analytics" class="text-sm text-slate-700">Erweiterte Analytics</label>
          </div>
        </div>

        <Button label="Jetzt starten" severity="success" fluid />
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Checkbox from 'primevue/checkbox'
import Tag from 'primevue/tag'

const unlimitedProjects = ref(true)
const unlimitedDashboards = ref(true)
const advancedAnalytics = ref(true)
</script>