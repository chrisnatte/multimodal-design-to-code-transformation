<template>
  <Card
    :pt="{
      root: 'w-full max-w-3xs overflow-hidden',
      body: '!gap-8',
      title: 'flex items-center justify-between',
      content: 'flex flex-col gap-4',
    }"
  >
    <template #title>
      <h1>Paket 1</h1>
      <Tag value="Beliebt" icon="pi pi-arrow-up-right" severity="info" />
    </template>
    <template #content>
      <div class="flex items-center gap-2">
        <Checkbox :model-value="true" input-id="product-1-feature-1" binary />
        <label for="product-1-feature-1">Unbegrenzte Projekte</label>
      </div>
      <div class="flex items-center gap-2">
        <Checkbox :model-value="true" input-id="product-1-feature-2" binary />
        <label for="product-1-feature-2">Unbegrenzte Dashboards</label>
      </div>
      <div class="flex items-center gap-2">
        <Checkbox :model-value="true" input-id="product-1-feature-3" binary />
        <label for="product-1-feature-3">Erweiterte Analytics</label>
      </div>
    </template>
    <template #footer>
      <Button label="Jetzt starten" severity="primary" class="w-full" />
    </template>
  </Card>
</template>

<script setup lang="ts">
  import Card from 'primevue/card'
  import Tag from 'primevue/tag'
  import Checkbox from 'primevue/checkbox'
  import Button from 'primevue/button'
</script>
