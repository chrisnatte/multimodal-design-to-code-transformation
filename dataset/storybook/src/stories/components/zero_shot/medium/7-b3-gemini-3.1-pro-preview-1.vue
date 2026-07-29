<template>
  <div class="p-6 flex flex-col gap-2.5 bg-white">
    <Card class="w-64 rounded-xl bg-white">
      <template #title>
        <div class="flex justify-between items-center gap-[7px]">
          <span class="font-medium text-[17.5px]">Paket 1</span>
          <Tag value="Beliebt" severity="info" icon="pi pi-arrow-up-right" />
        </div>
      </template>
      <template #content>
        <div class="flex flex-col gap-4 mt-2">
          <div class="flex items-center gap-2">
            <Checkbox v-model="check1" inputId="cb1" binary />
            <label for="cb1" class="text-sm">Unbegrenzte Projekte</label>
          </div>
          <div class="flex items-center gap-2">
            <Checkbox v-model="check2" inputId="cb2" binary />
            <label for="cb2" class="text-sm">Unbegrenzte Dashboards</label>
          </div>
          <div class="flex items-center gap-2">
            <Checkbox v-model="check3" inputId="cb3" binary />
            <label for="cb3" class="text-sm">Erweiterte Analytics</label>
          </div>
        </div>
      </template>
      <template #footer>
        <div class="flex w-full mt-2">
          <Button label="Jetzt starten" class="w-full" />
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Card from 'primevue/card'
import Tag from 'primevue/tag'
import Checkbox from 'primevue/checkbox'
import Button from 'primevue/button'

const check1 = ref(true)
const check2 = ref(true)
const check3 = ref(true)
</script>