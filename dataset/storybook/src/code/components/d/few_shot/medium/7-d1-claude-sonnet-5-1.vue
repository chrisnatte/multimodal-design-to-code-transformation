<template>
  <Card class="w-72">
    <template #title>
      <div class="flex items-center justify-between">
        <span class="text-lg font-medium">Paket 1</span>
        <Tag severity="info">
          <i class="pi pi-arrow-up-right text-xs"></i>
          <span class="text-xs font-bold">Beliebt</span>
        </Tag>
      </div>
    </template>
    <template #content>
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-2">
          <Checkbox v-model="feature1" binary input-id="feature1" />
          <label for="feature1">Unbegrenzte Projekte</label>
        </div>
        <div class="flex items-center gap-2">
          <Checkbox v-model="feature2" binary input-id="feature2" />
          <label for="feature2">Unbegrenzte Dashboards</label>
        </div>
        <div class="flex items-center gap-2">
          <Checkbox v-model="feature3" binary input-id="feature3" />
          <label for="feature3">Erweiterte Analytics</label>
        </div>
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

  const feature1 = ref(true)
  const feature2 = ref(true)
  const feature3 = ref(true)
</script>