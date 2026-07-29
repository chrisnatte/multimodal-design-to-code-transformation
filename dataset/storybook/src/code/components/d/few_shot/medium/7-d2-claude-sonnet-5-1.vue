<template>
  <Card
    class="w-64"
    :pt="{
      body: '!p-4 gap-4',
      content: 'flex flex-col gap-4 !py-0',
    }"
  >
    <template #title>
      <div class="flex items-center justify-between">
        <span class="text-lg font-medium">Paket 1</span>
        <Tag value="Beliebt" severity="info" icon="pi pi-arrow-up-right" />
      </div>
    </template>
    <template #content>
      <div class="flex items-center gap-2">
        <Checkbox v-model="unlimitedProjects" binary input-id="unlimited-projects" />
        <label for="unlimited-projects">Unbegrenzte Projekte</label>
      </div>
      <div class="flex items-center gap-2">
        <Checkbox v-model="unlimitedDashboards" binary input-id="unlimited-dashboards" />
        <label for="unlimited-dashboards">Unbegrenzte Dashboards</label>
      </div>
      <div class="flex items-center gap-2">
        <Checkbox v-model="advancedAnalytics" binary input-id="advanced-analytics" />
        <label for="advanced-analytics">Erweiterte Analytics</label>
      </div>
    </template>
    <template #footer>
      <Button label="Jetzt starten" severity="primary" class="w-full" />
    </template>
  </Card>
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