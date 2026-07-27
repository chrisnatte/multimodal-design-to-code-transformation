<template>
  <div class="flex w-[488px] flex-col overflow-hidden rounded-xl bg-white">
    <div class="flex h-[124px] flex-col items-center justify-center gap-2.5 p-2.5">
      <div class="flex w-[120px] flex-col items-center gap-1 text-center">
        <span class="text-[17.5px] font-medium leading-[21px] text-surface-900">ProDesk X500</span>
        <span class="text-xs font-light leading-[15px] text-surface-700">Workstation Monitor</span>
      </div>
    </div>

    <div class="flex flex-col gap-[7px] rounded-md px-1">
      <div class="flex flex-col">
        <Tabs v-model:value="activeTab" class="w-full">
          <TabList class="flex h-[46px] w-full border-b border-surface-200 bg-white">
            <Tab value="description" class="h-[46px] w-[127.5px]">
              Beschreibung
            </Tab>
            <Tab value="specifications" class="h-[46px] w-[139.5px]">
              Spezifikationen
            </Tab>
            <Tab value="reviews" class="h-[46px] w-[124.5px]">
              Bewertungen
            </Tab>
          </TabList>

          <TabPanels class="bg-white">
            <TabPanel value="description" class="px-4 py-3">
              <span class="block text-sm font-normal leading-[23px] text-surface-900">
                Noch keine Bewertungen vorhanden.
              </span>
            </TabPanel>
            <TabPanel value="specifications" class="px-4 py-3">
              <span class="block text-sm font-normal leading-[23px] text-surface-900">
                Noch keine Bewertungen vorhanden.
              </span>
            </TabPanel>
            <TabPanel value="reviews" class="px-4 py-3">
              <span class="block text-sm font-normal leading-[23px] text-surface-900">
                Noch keine Bewertungen vorhanden.
              </span>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>

      <div class="flex h-[49px] items-center justify-end gap-2 px-4 py-2">
        <Button label="Merken" severity="secondary" class="h-[33px]" />
        <Button label="In den Warenkorb" icon="pi pi-cart-plus" class="h-[33px]" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'

const activeTab = ref('description')
</script>