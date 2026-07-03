<template>
  <div class="flex flex-col bg-white rounded-xl">
    <div class="flex flex-col items-center gap-2.5 p-2.5">
      <div class="flex flex-col items-center gap-1">
        <span class="text-[17.5px] font-medium">ProDesk X500</span>
        <span class="text-xs font-light">Workstation Monitor</span>
      </div>
    </div>

    <div class="flex flex-col gap-2 rounded-md px-1">
      <div class="flex flex-col">
        <Tabs v-model:value="state.activeTab" class="flex flex-col">
          <TabList class="flex">
            <Tab value="beschreibung">Beschreibung</Tab>
            <Tab value="spezifikationen">Spezifikationen</Tab>
            <Tab value="bewertungen">Bewertungen</Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="beschreibung" />
            <TabPanel value="spezifikationen" />
            <TabPanel value="bewertungen">
              <div class="flex flex-col gap-2 p-3 px-4">
                <span class="text-sm font-normal">Noch keine Bewertungen vorhanden.</span>
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>

      <div class="flex justify-end gap-2 p-2 px-4">
        <Button label="Merken" severity="secondary" />
        <Button label="In den Warenkorb" icon="pi pi-shopping-cart" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Button from 'primevue/button'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'

const state = reactive({
  activeTab: 'beschreibung'
})
</script>