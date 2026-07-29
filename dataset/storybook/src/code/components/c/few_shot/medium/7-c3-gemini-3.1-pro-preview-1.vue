<template>
  <Card class="w-[320px] border border-surface-200 shadow-sm">
    <template #title>
      <div class="flex items-center justify-between">
        <span class="text-xl font-semibold text-surface-900">Paket 1</span>
        <Tag value="Beliebt" icon="pi pi-arrow-up-right" severity="info" />
      </div>
    </template>
    <template #content>
      <div class="mt-4 flex flex-col gap-4">
        <div class="flex items-center gap-3">
          <Checkbox v-model="feature1" input-id="feature1" binary readonly />
          <label for="feature1" class="text-surface-700">Unbegrenzte Projekte</label>
        </div>
        <div class="flex items-center gap-3">
          <Checkbox v-model="feature2" input-id="feature2" binary readonly />
          <label for="feature2" class="text-surface-700">Unbegrenzte Dashboards</label>
        </div>
        <div class="flex items-center gap-3">
          <Checkbox v-model="feature3" input-id="feature3" binary readonly />
          <label for="feature3" class="text-surface-700">Erweiterte Analytics</label>
        </div>
      </div>
    </template>
    <template #footer>
      <Button label="Jetzt starten" severity="primary" class="mt-2 w-full" />
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