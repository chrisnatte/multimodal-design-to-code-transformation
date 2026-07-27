<template>
  <div class="rounded-xl bg-white p-4 flex flex-col gap-2" style="width:256px;">
    <div class="rounded-md flex flex-col gap-8 p-4">
      <div class="flex items-center justify-between gap-2">
        <span class="font-medium text-lg">Paket 1</span>
        <Tag severity="info" :rounded="false">
          <template #icon>
            <i class="pi pi-arrow-up-right mr-1"></i>
          </template>
          Beliebt
        </Tag>
      </div>

      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-2">
          <Checkbox v-model="feature1" :binary="true" />
          <span class="text-sm">Unbegrenzte Projekte</span>
        </div>
        <div class="flex items-center gap-2">
          <Checkbox v-model="feature2" :binary="true" />
          <span class="text-sm">Unbegrenzte Dashboards</span>
        </div>
        <div class="flex items-center gap-2">
          <Checkbox v-model="feature3" :binary="true" />
          <span class="text-sm">Erweiterte Analytics</span>
        </div>
      </div>

      <div class="flex items-stretch gap-2">
        <Button label="Jetzt starten" severity="primary" class="w-full" />
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