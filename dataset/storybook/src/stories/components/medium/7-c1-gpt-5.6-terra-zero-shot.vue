<template>
  <Card class="w-[258px] overflow-hidden rounded-xl border border-surface-200 shadow-sm">
    <template #content>
      <div class="flex flex-col">
        <div class="flex items-center justify-between">
          <h2 class="m-0 text-lg font-medium text-surface-700">Paket 1</h2>
          <Tag value="↗ Beliebt" severity="info" class="text-xs font-semibold" />
        </div>

        <div class="mt-8 flex flex-col gap-4">
          <div class="flex items-center gap-2">
            <Checkbox v-model="unlimitedProjects" binary input-id="projects" />
            <label for="projects" class="text-sm text-surface-700">Unbegrenzte Projekte</label>
          </div>

          <div class="flex items-center gap-2">
            <Checkbox v-model="unlimitedDashboards" binary input-id="dashboards" />
            <label for="dashboards" class="text-sm text-surface-700">Unbegrenzte Dashboards</label>
          </div>

          <div class="flex items-center gap-2">
            <Checkbox v-model="advancedAnalytics" binary input-id="analytics" />
            <label for="analytics" class="text-sm text-surface-700">Erweiterte Analytics</label>
          </div>
        </div>

        <Button label="Jetzt starten" class="mt-8 w-full" />
      </div>
    </template>
  </Card>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Checkbox from 'primevue/checkbox'
import Tag from 'primevue/tag'

const unlimitedProjects = ref(true)
const unlimitedDashboards = ref(true)
const advancedAnalytics = ref(true)
</script>