<template>
  <div class="w-64 bg-white rounded-xl shadow-sm flex flex-col">
    <div class="p-5 flex flex-col gap-8">
      <div class="flex items-center justify-between gap-2">
        <span class="text-lg font-medium text-gray-900">Paket 1</span>
        <Tag severity="info" value="Beliebt" icon="pi pi-arrow-up-right" />
      </div>

      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-2">
          <Checkbox v-model="projekte" :binary="true" />
          <span class="text-sm text-gray-700">Unbegrenzte Projekte</span>
        </div>
        <div class="flex items-center gap-2">
          <Checkbox v-model="dashboards" :binary="true" />
          <span class="text-sm text-gray-700">Unbegrenzte Dashboards</span>
        </div>
        <div class="flex items-center gap-2">
          <Checkbox v-model="analytics" :binary="true" />
          <span class="text-sm text-gray-700">Erweiterte Analytics</span>
        </div>
      </div>

      <div class="flex gap-2">
        <Button label="Jetzt starten" severity="success" class="w-full" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Tag from 'primevue/tag'
import Checkbox from 'primevue/checkbox'
import Button from 'primevue/button'

const projekte = ref(true)
const dashboards = ref(true)
const analytics = ref(true)
</script>