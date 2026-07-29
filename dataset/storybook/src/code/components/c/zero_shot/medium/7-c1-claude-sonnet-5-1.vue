<template>
  <div class="flex justify-center items-center p-6">
    <div class="bg-white rounded-2xl shadow-md p-6 w-72">
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-lg font-semibold text-gray-800">Paket 1</h3>
        <Tag severity="info" rounded class="bg-blue-50 text-blue-600">
          <span class="flex items-center gap-1 text-xs font-medium">
            <i class="pi pi-arrow-up-right text-xs"></i>
            Beliebt
          </span>
        </Tag>
      </div>

      <div class="flex flex-col gap-3 mb-6">
        <div class="flex items-center gap-2">
          <Checkbox v-model="features[0]" binary disabled class="pointer-events-none" />
          <span class="text-gray-700 text-sm">Unbegrenzte Projekte</span>
        </div>
        <div class="flex items-center gap-2">
          <Checkbox v-model="features[1]" binary disabled class="pointer-events-none" />
          <span class="text-gray-700 text-sm">Unbegrenzte Dashboards</span>
        </div>
        <div class="flex items-center gap-2">
          <Checkbox v-model="features[2]" binary disabled class="pointer-events-none" />
          <span class="text-gray-700 text-sm">Erweiterte Analytics</span>
        </div>
      </div>

      <Button
        label="Jetzt starten"
        class="w-full bg-emerald-500 border-emerald-500 hover:bg-emerald-600 text-white rounded-lg py-3 font-medium"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Tag from 'primevue/tag'
import Checkbox from 'primevue/checkbox'
import Button from 'primevue/button'

const features = ref([true, true, true])
</script>