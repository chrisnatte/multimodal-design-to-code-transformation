<template>
  <div class="p-2 bg-white rounded-xl w-[488px]">
    <!-- header -->
    <div class="flex flex-col items-center justify-center gap-2.5 p-2.5">
      <div class="flex flex-col items-center gap-1 w-[120px]">
        <span class="font-medium text-[17.5px]">ProDesk X500</span>
        <span class="font-light text-xs">Workstation Monitor</span>
      </div>
    </div>

    <!-- body -->
    <div class="flex flex-col gap-2 px-1 rounded-md">
      <!-- content / tabs -->
      <div class="flex flex-col w-full">
        <Tabs v-model:value="activeTab">
          <TabList>
            <Tab value="0">Beschreibung</Tab>
            <Tab value="1">Spezifikationen</Tab>
            <Tab value="2">Bewertungen</Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="0">
              <p class="p-3 text-sm">Beschreibung Inhalt.</p>
            </TabPanel>
            <TabPanel value="1">
              <p class="p-3 text-sm">Spezifikationen Inhalt.</p>
            </TabPanel>
            <TabPanel value="2">
              <p class="px-4 py-3 text-sm">Noch keine Bewertungen vorhanden.</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>

      <!-- footer -->
      <div class="flex justify-end gap-2 px-4 py-2">
        <Button label="Merken" severity="secondary" />
        <Button label="In den Warenkorb" icon="pi pi-cart-plus" severity="primary" />
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

const activeTab = ref('0')
</script>