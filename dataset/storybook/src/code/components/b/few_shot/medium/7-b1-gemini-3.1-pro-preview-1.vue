<template>
  <div class="flex w-fit flex-col gap-2.5 bg-white p-6">
    <Card
      :pt="{
        root: 'w-64 rounded-xl bg-white',
        body: 'flex flex-col gap-8 p-[17.5px]',
        title: '!p-0',
        content: 'flex flex-col gap-4 !p-0',
        footer: 'flex gap-[7px] !p-0',
      }"
    >
      <template #title>
        <div class="flex items-center justify-between gap-[7px]">
          <span class="text-[17.5px] font-medium">Paket 1</span>
          <Tag value="Beliebt" severity="info" icon="pi pi-arrow-up-right" />
        </div>
      </template>
      <template #content>
        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-2">
            <Checkbox v-model="feature1" input-id="feat1" binary />
            <label for="feat1" class="text-sm">Unbegrenzte Projekte </label>
          </div>
          <div class="flex items-center gap-2">
            <Checkbox v-model="feature2" input-id="feat2" binary />
            <label for="feat2" class="text-sm">Unbegrenzte Dashboards </label>
          </div>
          <div class="flex items-center gap-2">
            <Checkbox v-model="feature3" input-id="feat3" binary />
            <label for="feat3" class="text-sm">Erweiterte Analytics</label>
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

  const feature1 = ref(true)
  const feature2 = ref(true)
  const feature3 = ref(true)
</script>