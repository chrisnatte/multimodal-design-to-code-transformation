<template>
  <div class="flex flex-col w-[488px] bg-white rounded-xl">
    <div class="flex flex-col items-center justify-center p-2.5">
      <div class="flex flex-col items-center gap-1">
        <span class="text-lg font-medium text-gray-900">ProDesk X500</span>
        <span class="text-xs font-light text-gray-500">Workstation Monitor</span>
      </div>
    </div>
    <div class="flex flex-col gap-2 px-1 rounded-md">
      <div class="flex flex-col w-full">
        <Tabs v-model:value="activeTab" class="w-full">
          <TabList class="bg-white border-b border-slate-200">
            <Tab value="0">Beschreibung</Tab>
            <Tab value="1">Spezifikationen</Tab>
            <Tab value="2">Bewertungen</Tab>
          </TabList>
          <TabPanels class="bg-white">
            <TabPanel value="0">
              <div class="flex flex-col gap-2 px-4 py-3 bg-white">
                <span class="text-sm text-gray-700">Noch keine Bewertungen vorhanden.</span>
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
      <div class="flex justify-end items-center gap-2 px-4 py-2">
        <Button label="Merken" severity="secondary" />
        <Button label="In den Warenkorb" icon="pi pi-cart-plus" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
import Button from 'primevue/button'

const activeTab = ref('0')
</script>