<template>
  <div class="flex flex-col gap-2 bg-white rounded-xl">
    <div class="flex flex-col gap-8 p-4">
      <div class="flex items-center justify-between gap-2">
        <span class="text-lg font-medium">Paket 1</span>
        <Tag value="Beliebt" severity="info" icon="pi pi-arrow-up-right" />
      </div>

      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-2">
          <Checkbox v-model="form.featureProjects" binary inputId="featureProjects" />
          <label for="featureProjects" class="text-sm">Unbegrenzte Projekte</label>
        </div>

        <div class="flex items-center gap-2">
          <Checkbox v-model="form.featureDashboards" binary inputId="featureDashboards" />
          <label for="featureDashboards" class="text-sm">Unbegrenzte Dashboards</label>
        </div>

        <div class="flex items-center gap-2">
          <Checkbox v-model="form.featureAnalytics" binary inputId="featureAnalytics" />
          <label for="featureAnalytics" class="text-sm">Erweiterte Analytics</label>
        </div>
      </div>

      <div class="flex gap-2">
        <Button label="Jetzt starten" class="w-full" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Tag from 'primevue/tag'
import Checkbox from 'primevue/checkbox'
import Button from 'primevue/button'

const form = reactive({
  featureProjects: true,
  featureDashboards: true,
  featureAnalytics: true
})
</script>