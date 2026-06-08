<template>
  <Card class="rounded-xl">
    <template #content>
      <div class="flex flex-col gap-8 p-4">
        <div class="flex items-center justify-between gap-2">
          <span class="text-lg font-medium">Paket 1</span>
          <Tag value="Beliebt" severity="info" icon="pi pi-arrow-up-right" />
        </div>

        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-2">
            <Checkbox v-model="form.unbegrenzteProjekte" binary inputId="unbegrenzte-projekte" />
            <label for="unbegrenzte-projekte">Unbegrenzte Projekte</label>
          </div>
          <div class="flex items-center gap-2">
            <Checkbox v-model="form.unbegrenzteDashboards" binary inputId="unbegrenzte-dashboards" />
            <label for="unbegrenzte-dashboards">Unbegrenzte Dashboards</label>
          </div>
          <div class="flex items-center gap-2">
            <Checkbox v-model="form.erweiterteAnalytics" binary inputId="erweiterte-analytics" />
            <label for="erweiterte-analytics">Erweiterte Analytics</label>
          </div>
        </div>

        <div class="flex gap-2">
          <Button label="Jetzt starten" class="w-full" />
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
  unbegrenzteProjekte: true,
  unbegrenzteDashboards: true,
  erweiterteAnalytics: true
})
</script>