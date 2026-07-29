<template>
  <Card
    :pt="{
      root: 'w-[280px] p-4',
      body: 'flex flex-col gap-4 !p-0',
      content: 'flex flex-col gap-3 !py-0',
      footer: 'mt-2',
    }"
  >
    <template #header>
      <div class="flex items-center justify-between">
        <h2 class="text-lg font-semibold text-gray-800">Paket 1</h2>
        <Tag severity="info" rounded>
          <div class="flex items-center gap-1">
            <i class="pi pi-arrow-up-right text-xs"></i>
            <span>Beliebt</span>
          </div>
        </Tag>
      </div>
    </template>
    <template #content>
      <div v-for="feature in features" :key="feature" class="flex items-center gap-2">
        <Checkbox :model-value="true" binary disabled />
        <span class="text-gray-700">{{ feature }}</span>
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

  const features = ref([
    'Unbegrenzte Projekte',
    'Unbegrenzte Dashboards',
    'Erweiterte Analytics',
  ])
</script>