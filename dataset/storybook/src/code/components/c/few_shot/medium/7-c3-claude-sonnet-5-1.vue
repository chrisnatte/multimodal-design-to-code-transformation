<template>
  <Card
    :pt="{
      root: 'w-64 p-4',
      body: 'flex flex-col gap-4 !p-0',
      content: '!p-0',
      footer: '!p-0',
    }"
  >
    <template #header>
      <div class="flex items-center justify-between">
        <h2 class="text-lg font-medium">Paket 1</h2>
        <Tag severity="info" icon="pi pi-arrow-up-right">
          <span class="font-medium">Beliebt</span>
        </Tag>
      </div>
    </template>
    <template #content>
      <ul class="flex flex-col gap-3 p-0 m-0 list-none">
        <li v-for="feature in features" :key="feature" class="flex items-center gap-2">
          <Checkbox :model-value="true" binary disabled />
          <span>{{ feature }}</span>
        </li>
      </ul>
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

  const features = ref(['Unbegrenzte Projekte', 'Unbegrenzte Dashboards', 'Erweiterte Analytics'])
</script>