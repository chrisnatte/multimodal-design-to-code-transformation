<template>
  <div class="bg-white rounded-xl p-4 shadow-sm" style="width: 256px;">
    <div class="flex flex-col gap-4">
      <!-- caption -->
      <div class="flex items-center justify-between">
        <span class="text-lg font-medium text-gray-800">Paket 1</span>
        <Tag severity="info" :rounded="false" class="bg-blue-50 text-blue-500 text-xs font-bold">
          <i class="pi pi-arrow-up-right mr-1"></i>
          Beliebt
        </Tag>
      </div>

      <!-- content -->
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-2">
          <Checkbox v-model="feature1" :binary="true" disabled />
          <span class="text-sm text-gray-700">Unbegrenzte Projekte</span>
        </div>
        <div class="flex items-center gap-2">
          <Checkbox v-model="feature2" :binary="true" disabled />
          <span class="text-sm text-gray-700">Unbegrenzte Dashboards</span>
        </div>
        <div class="flex items-center gap-2">
          <Checkbox v-model="feature3" :binary="true" disabled />
          <span class="text-sm text-gray-700">Erweiterte Analytics</span>
        </div>
      </div>

      <!-- footer -->
      <div class="flex">
        <Button label="Jetzt starten" class="w-full" severity="success" />
      </div>
    </div>
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