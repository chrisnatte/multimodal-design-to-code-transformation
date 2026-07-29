<template>
  <div class="p-6 flex justify-center">
    <div class="rounded-xl bg-white shadow-md w-64">
      <div class="p-4 flex flex-col gap-8">
        <div class="flex items-center justify-between">
          <span class="text-lg font-medium text-gray-800">Paket 1</span>
          <Tag severity="info" :rounded="false">
            <template #default>
              <span class="flex items-center gap-1">
                <i class="pi pi-arrow-up-right text-xs"></i>
                <span class="font-bold text-xs">Beliebt</span>
              </span>
            </template>
          </Tag>
        </div>

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

        <div class="flex">
          <Button label="Jetzt starten" class="w-full" severity="primary" />
        </div>
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