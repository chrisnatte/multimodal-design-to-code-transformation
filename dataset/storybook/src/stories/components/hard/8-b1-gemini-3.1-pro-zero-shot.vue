<template>
  <div class="bg-white rounded-xl flex flex-col w-[488px]">
    <div class="flex flex-col items-center gap-2.5 p-2.5">
      <div class="flex flex-col items-center gap-1">
        <span class="font-sans font-medium text-[17.5px] text-gray-900">ProDesk X500</span>
        <span class="font-sans font-light text-xs text-gray-600">Workstation Monitor</span>
      </div>
    </div>

    <div class="flex flex-col gap-[7px] px-1 rounded-md">
      <div class="flex flex-col w-full">
        <Tabs v-model:value="activeTab">
          <TabList>
            <Tab value="0">Beschreibung</Tab>
            <Tab value="1">Spezifikationen</Tab>
            <Tab value="2">Bewertungen</Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="0">
              <!-- Placeholder for Beschreibung -->
            </TabPanel>
            <TabPanel value="1">
              <!-- Placeholder for Spezifikationen -->
            </TabPanel>
            <TabPanel value="2">
              <div class="flex flex-col gap-2 px-4 py-3 bg-white">
                <span class="font-sans font-normal text-sm text-gray-800">Noch keine Bewertungen vorhanden.</span>
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>

      <div class="flex flex-row w-full justify-end items-start gap-2 px-4 py-2">
        <Button severity="secondary" label="Merken" />
        <Button severity="primary" label="In den Warenkorb" icon="pi pi-cart-plus" />
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

const activeTab = ref('2')
</script>