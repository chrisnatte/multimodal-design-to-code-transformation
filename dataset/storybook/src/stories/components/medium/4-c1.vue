<template>
  <div class="w-full min-h-[176px] bg-[#f5f6f8] flex items-center px-12">
    <div class="flex items-center gap-3 text-[#64748b]">
      <Button icon="pi pi-home" text rounded severity="secondary" class="!w-7 !h-7 !p-0" />
      <i class="pi pi-angle-right text-xs"></i>

      <Button label="Projekt1" text severity="secondary" class="!px-0 !py-0" />
      <i class="pi pi-angle-right text-xs"></i>

      <Button icon="pi pi-table" label="Gruppe1" text severity="secondary" class="!px-0 !py-0" />
      <i class="pi pi-angle-right text-xs"></i>

      <div class="relative">
        <Button
          label="Dashboard anzeigen"
          severity="secondary"
          rounded
          class="!bg-[#e2e8f0] !border-[#e2e8f0] !text-[#334155] !px-4 !py-2"
          @click="state.menuOpen = !state.menuOpen"
        />
        <Card
          v-if="state.menuOpen"
          class="absolute left-0 top-[44px] w-[178px] shadow-md rounded-lg border border-[#e5e7eb]"
        >
          <template #content>
            <div class="flex flex-col gap-3 py-1">
              <Button
                label="Dashboard 1"
                text
                severity="secondary"
                class="!justify-start !text-[#334155] !px-1"
              />
              <Button
                label="Dashboard 2"
                text
                severity="secondary"
                class="!justify-start !text-[#334155] !px-1"
              />
            </div>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'

const state = reactive({
  menuOpen: true
})
</script>