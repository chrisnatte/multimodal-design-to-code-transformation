<template>
  <Card
    :pt="{
      root: 'w-xs p-5 gap-4',
      body: 'flex flex-col gap-4 !p-0',
      content: 'flex flex-col gap-3 !py-0',
    }"
  >
    <template #title>
      <div class="flex items-center justify-between">
        <span class="text-lg font-medium">Paket 1</span>
        <Tag severity="info" rounded>
          <template #icon>
            <i class="pi pi-arrow-up-right mr-1" />
          </template>
          Beliebt
        </Tag>
      </div>
    </template>
    <template #content>
      <div v-for="feature in features" :key="feature" class="flex items-center gap-2">
        <i class="pi pi-check-square text-emerald-500" />
        <span class="text-sm">{{ feature }}</span>
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
  import Button from 'primevue/button'

  const features = ['Unbegrenzte Projekte', 'Unbegrenzte Dashboards', 'Erweiterte Analytics']
</script>