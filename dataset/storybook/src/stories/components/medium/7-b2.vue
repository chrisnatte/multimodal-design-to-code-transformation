<template>
  <Card class="rounded-xl bg-white">
    <template #content>
      <div class="flex flex-col p-4 gap-8">
        <div class="flex items-center justify-between gap-2">
          <span class="text-[18px] font-medium">Paket 1</span>
          <Tag value="Beliebt" icon="pi pi-arrow-up-right" severity="info" />
        </div>

        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-2">
            <Checkbox v-model="state.unbegrenzteProjekte" binary inputId="unbegrenzte-projekte" />
            <label for="unbegrenzte-projekte" class="text-sm">Unbegrenzte Projekte</label>
          </div>
          <div class="flex items-center gap-2">
            <Checkbox v-model="state.unbegrenzteDashboards" binary inputId="unbegrenzte-dashboards" />
            <label for="unbegrenzte-dashboards" class="text-sm">Unbegrenzte Dashboards</label>
          </div>
          <div class="flex items-center gap-2">
            <Checkbox v-model="state.erweiterteAnalytics" binary inputId="erweiterte-analytics" />
            <label for="erweiterte-analytics" class="text-sm">Erweiterte Analytics</label>
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

const state = reactive({
  unbegrenzteProjekte: true,
  unbegrenzteDashboards: true,
  erweiterteAnalytics: true
})
</script>