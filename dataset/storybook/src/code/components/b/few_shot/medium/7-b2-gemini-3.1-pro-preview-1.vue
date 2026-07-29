<template>
  <div class="flex w-[304px] flex-col gap-2.5 bg-white p-6">
    <Card
      :pt="{
        root: 'w-full rounded-xl shadow-none border border-surface-200',
        body: 'flex flex-col gap-8 p-4',
        title: 'text-lg font-medium m-0',
        content: 'flex flex-col gap-4 p-0',
        footer: 'p-0',
      }"
    >
      <template #title>
        <div class="flex items-center justify-between">
          <span>Paket 1</span>
          <Tag value="Beliebt" severity="info" icon="pi pi-arrow-up-right" />
        </div>
      </template>
      <template #content>
        <div class="flex items-center gap-2">
          <Checkbox v-model="unlimitedProjects" input-id="unlimitedProjects" binary />
          <label for="unlimitedProjects" class="text-sm">Unbegrenzte Projekte</label>
        </div>
        <div class="flex items-center gap-2">
          <Checkbox v-model="unlimitedDashboards" input-id="unlimitedDashboards" binary />
          <label for="unlimitedDashboards" class="text-sm">Unbegrenzte Dashboards</label>
        </div>
        <div class="flex items-center gap-2">
          <Checkbox v-model="advancedAnalytics" input-id="advancedAnalytics" binary />
          <label for="advancedAnalytics" class="text-sm">Erweiterte Analytics</label>
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