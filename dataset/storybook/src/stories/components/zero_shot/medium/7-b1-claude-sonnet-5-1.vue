<template>
  <div class="flex flex-col gap-2.5 p-6 bg-white">
    <div class="flex flex-col gap-1.5 w-64 bg-white rounded-xl">
      <div class="flex flex-col gap-8 p-4 rounded-md w-full">
        <div class="flex items-center justify-between gap-1.5 w-full">
          <span class="font-medium text-lg">Paket 1</span>
          <Tag severity="info" :rounded="false" class="flex items-center gap-1">
            <i class="pi pi-arrow-up-right text-xs"></i>
            <span class="font-bold text-xs">Beliebt</span>
          </Tag>
        </div>

        <div class="flex flex-col gap-4 w-full">
          <div class="flex items-center gap-2">
            <Checkbox v-model="feature1" :binary="true" />
            <label class="text-sm">Unbegrenzte Projekte</label>
          </div>
          <div class="flex items-center gap-2">
            <Checkbox v-model="feature2" :binary="true" />
            <label class="text-sm">Unbegrenzte Dashboards</label>
          </div>
          <div class="flex items-center gap-2">
            <Checkbox v-model="feature3" :binary="true" />
            <label class="text-sm">Erweiterte Analytics</label>
          </div>
        </div>

        <div class="flex items-center gap-1.5 w-full">
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