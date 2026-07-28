<template>
  <div class="max-w-xs p-5 bg-white rounded-2xl shadow-md flex flex-col gap-4">
    <div class="flex items-center justify-between">
      <h3 class="text-lg font-semibold text-gray-800">Paket 1</h3>
      <Tag severity="info" rounded class="bg-blue-50 text-blue-500">
        <span class="flex items-center gap-1">
          <i class="pi pi-arrow-up-right text-xs"></i>
          Beliebt
        </span>
      </Tag>
    </div>

    <div class="flex flex-col gap-3">
      <div class="flex items-center gap-2">
        <Checkbox v-model="feature1" :binary="true" disabled />
        <span class="text-gray-700 text-sm">Unbegrenzte Projekte</span>
      </div>
      <div class="flex items-center gap-2">
        <Checkbox v-model="feature2" :binary="true" disabled />
        <span class="text-gray-700 text-sm">Unbegrenzte Dashboards</span>
      </div>
      <div class="flex items-center gap-2">
        <Checkbox v-model="feature3" :binary="true" disabled />
        <span class="text-gray-700 text-sm">Erweiterte Analytics</span>
      </div>
    </div>

    <Button
      label="Jetzt starten"
      class="w-full justify-center"
      style="background-color: #10b981; border-color: #10b981;"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Tag from 'primevue/tag'
import Checkbox from 'primevue/checkbox'
import Button from 'primevue/button'

const feature1 = ref(true)
const feature2 = ref(true)
const feature3 = ref(true)
</script>