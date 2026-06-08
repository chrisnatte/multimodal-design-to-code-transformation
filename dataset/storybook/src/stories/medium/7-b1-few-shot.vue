<template>
  <Card class="rounded-xl">
    <template #content>
      <div class="flex flex-col gap-8 p-4">
        <div class="flex items-center justify-between gap-2">
          <span class="text-lg font-medium">Paket 1</span>
          <Tag value="Beliebt" icon="pi pi-arrow-up-right" severity="info" />
        </div>

        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-2">
            <Checkbox v-model="form.unlimitedProjects" binary />
            <span>Unbegrenzte Projekte</span>
          </div>
          <div class="flex items-center gap-2">
            <Checkbox v-model="form.unlimitedDashboards" binary />
            <span>Unbegrenzte Dashboards</span>
          </div>
          <div class="flex items-center gap-2">
            <Checkbox v-model="form.advancedAnalytics" binary />
            <span>Erweiterte Analytics</span>
          </div>
        </div>

        <div class="flex gap-2">
          <Button label="Jetzt starten" />
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup>
import { reactive } from 'vue'
import Card from 'primevue/card'
import Tag from 'primevue/tag'
import Checkbox from 'primevue/checkbox'
import Button from 'primevue/button'

const form = reactive({
  unlimitedProjects: true,
  unlimitedDashboards: true,
  advancedAnalytics: true
})
</script>