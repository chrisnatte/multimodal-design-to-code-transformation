<template>
  <div class="flex justify-center bg-white p-6">
    <Card
      class="w-64"
      :pt="{
        body: 'flex flex-col gap-2 !p-4',
        content: 'flex flex-col gap-4',
        footer: 'mt-2',
      }"
    >
      <template #title>
        <div class="flex items-center justify-between">
          <span class="text-lg font-medium">Paket 1</span>
          <Tag value="Beliebt" severity="info" icon="pi pi-arrow-up-right" />
        </div>
      </template>
      <template #content>
        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-2">
            <Checkbox v-model="unlimitedProjects" input-id="unlimited-projects" binary />
            <label for="unlimited-projects">Unbegrenzte Projekte</label>
          </div>
          <div class="flex items-center gap-2">
            <Checkbox v-model="unlimitedDashboards" input-id="unlimited-dashboards" binary />
            <label for="unlimited-dashboards">Unbegrenzte Dashboards</label>
          </div>
          <div class="flex items-center gap-2">
            <Checkbox v-model="advancedAnalytics" input-id="advanced-analytics" binary />
            <label for="advanced-analytics">Erweiterte Analytics</label>
          </div>
        </div>
      </template>
      <template #footer>
        <Button label="Jetzt starten" severity="primary" class="w-full" />
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Card from 'primevue/card'
  import Tag from 'primevue/tag'
  import Checkbox from 'primevue/checkbox'
  import Button from 'primevue/button'

  const unlimitedProjects = ref(true)
  const unlimitedDashboards = ref(true)
  const advancedAnalytics = ref(true)
</script>