<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-50 p-4">
    <Card class="w-full max-w-sm shadow-md rounded-xl">
      <template #content>
        <div class="flex flex-col gap-6 p-2">
          <div class="flex items-center justify-between">
            <span class="text-xl font-semibold text-gray-800">Paket 1</span>
            <Tag icon="pi pi-arrow-up-right" value="Beliebt" severity="info" class="font-medium" />
          </div>

          <div class="flex flex-col gap-3">
            <div v-for="(feature, index) in features" :key="index" class="flex items-center gap-3">
              <i class="pi pi-check-circle text-emerald-500 text-lg"></i>
              <span class="text-gray-700 text-base">{{ feature }}</span>
            </div>
          </div>

          <Button label="Jetzt starten" class="w-full" severity="success" />
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Card from 'primevue/card'
import Tag from 'primevue/tag'
import Button from 'primevue/button'

const features = ref([
  'Unbegrenzte Projekte',
  'Unbegrenzte Dashboards',
  'Erweiterte Analytics'
])
</script>