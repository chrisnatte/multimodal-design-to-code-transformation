<template>
  <div class="flex flex-col p-6 gap-2.5 bg-white w-fit">
    <Card class="w-[256px] rounded-xl bg-white shadow-none" :pt="{ body: { class: 'p-[17.5px] gap-8 flex flex-col' }, content: { class: 'p-0' } }">
      <template #content>
        <div class="flex flex-col gap-8">
          <!-- Caption -->
          <div class="flex flex-row justify-between items-center gap-[7px]">
            <span class="font-medium text-[17.5px] font-sans text-surface-900">Paket 1</span>
            <Tag value="Beliebt" severity="info" icon="pi pi-arrow-up-right" class="font-bold text-[12.25px]" />
          </div>

          <!-- Content -->
          <div class="flex flex-col gap-4">
            <div class="flex items-center gap-[9.5px]">
              <Checkbox v-model="check1" inputId="chk1" binary />
              <label for="chk1" class="text-sm font-normal font-sans text-surface-900">Unbegrenzte Projekte</label>
            </div>
            <div class="flex items-center gap-[9.5px]">
              <Checkbox v-model="check2" inputId="chk2" binary />
              <label for="chk2" class="text-sm font-normal font-sans text-surface-900">Unbegrenzte Dashboards</label>
            </div>
            <div class="flex items-center gap-[9.5px]">
              <Checkbox v-model="check3" inputId="chk3" binary />
              <label for="chk3" class="text-sm font-normal font-sans text-surface-900">Erweiterte Analytics</label>
            </div>
          </div>

          <!-- Footer -->
          <div class="flex flex-row gap-[7px] w-full">
            <Button label="Jetzt starten" class="w-full font-medium text-sm" />
          </div>
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