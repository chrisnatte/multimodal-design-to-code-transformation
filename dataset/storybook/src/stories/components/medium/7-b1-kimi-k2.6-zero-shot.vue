<template>
  <div class="flex flex-col w-64 h-auto bg-white rounded-xl">
    <div class="flex flex-col gap-8 w-full p-[17.5px]">
      <div class="flex items-center justify-between w-full gap-2">
        <span class="text-[17.5px] font-medium text-gray-900">Paket 1</span>
        <Tag value="Beliebt" severity="info" icon="pi pi-arrow-up-right" :rounded="false" />
      </div>

      <div class="flex flex-col gap-4 w-full">
        <div class="flex items-center gap-2">
          <Checkbox v-model="checked1" :binary="true" inputId="check1" />
          <label for="check1" class="text-sm text-gray-700">Unbegrenzte Projekte </label>
        </div>
        <div class="flex items-center gap-2">
          <Checkbox v-model="checked2" :binary="true" inputId="check2" />
          <label for="check2" class="text-sm text-gray-700">Unbegrenzte Dashboards </label>
        </div>
        <div class="flex items-center gap-2">
          <Checkbox v-model="checked3" :binary="true" inputId="check3" />
          <label for="check3" class="text-sm text-gray-700">Erweiterte Analytics</label>
        </div>
      </div>

      <div class="flex w-full gap-2">
        <Button label="Jetzt starten" class="w-full" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Tag from 'primevue/tag'
import Checkbox from 'primevue/checkbox'

const checked1 = ref(true)
const checked2 = ref(true)
const checked3 = ref(true)
</script>