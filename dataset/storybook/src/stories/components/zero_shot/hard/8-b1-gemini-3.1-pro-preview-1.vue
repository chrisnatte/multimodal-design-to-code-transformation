<template>
  <div class="flex flex-col gap-2.5 p-6 bg-white">
    <div class="flex flex-col bg-white rounded-xl">
      <!-- Header -->
      <div class="flex flex-col items-center justify-center p-2.5 gap-2.5">
        <div class="flex flex-col items-center gap-1">
          <span class="font-medium text-[17.5px] font-sans text-gray-900">ProDesk X500</span>
          <span class="font-light text-xs font-sans text-gray-600">Workstation Monitor</span>
        </div>
      </div>

      <!-- Body -->
      <div class="flex flex-col px-1 gap-[7px] rounded-md">
        <div class="flex flex-col w-full">
          <Tabs v-model:value="activeTab">
            <TabList>
              <Tab value="0">Beschreibung</Tab>
              <Tab value="1">Spezifikationen</Tab>
              <Tab value="2">Bewertungen</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="0">
                <div class="flex flex-col px-4 py-3 gap-2 w-full bg-white">
                  <span class="font-normal text-sm font-sans text-gray-800">
                    Noch keine Bewertungen vorhanden.
                  </span>
                </div>
              </TabPanel>
              <TabPanel value="1">
                <div class="flex flex-col px-4 py-3 gap-2 w-full bg-white">
                  <!-- Placeholder for Spezifikationen -->
                </div>
              </TabPanel>
              <TabPanel value="2">
                <div class="flex flex-col px-4 py-3 gap-2 w-full bg-white">
                  <!-- Placeholder for Bewertungen -->
                </div>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>

        <!-- Footer -->
        <div class="flex flex-row justify-end px-4 py-2 gap-2 w-full">
          <Button 
            label="Merken" 
            severity="secondary" 
          />
          <Button 
            label="In den Warenkorb" 
            icon="pi pi-cart-plus" 
            severity="primary" 
          />
        </div>
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