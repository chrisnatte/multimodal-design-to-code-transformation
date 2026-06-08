<template>
  <Card class="w-fit">
    <template #content>
      <div class="flex flex-col">
        <div class="flex flex-col items-center gap-2.5 p-2.5">
          <div class="flex flex-col items-center gap-1">
            <span class="text-[17.5px] font-medium">ProDesk X500</span>
            <span class="text-xs font-light">Workstation Monitor</span>
          </div>
        </div>

        <div class="flex flex-col gap-[7px] px-1">
          <div class="flex flex-col">
            <Tabs v-model:value="state.activeTab">
              <TabList class="flex">
                <Tab value="beschreibung">Beschreibung</Tab>
                <Tab value="spezifikationen">Spezifikationen</Tab>
                <Tab value="bewertungen">Bewertungen</Tab>
              </TabList>
              <TabPanels>
                <TabPanel value="beschreibung" class="p-3 px-4">
                  <span class="text-sm">Noch keine Bewertungen vorhanden.</span>
                </TabPanel>
                <TabPanel value="spezifikationen" class="p-3 px-4">
                  <span class="text-sm">Noch keine Bewertungen vorhanden.</span>
                </TabPanel>
                <TabPanel value="bewertungen" class="p-3 px-4">
                  <span class="text-sm">Noch keine Bewertungen vorhanden.</span>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </div>

          <div class="flex justify-end gap-2 px-4 py-2">
            <Button label="Merken" severity="secondary" />
            <Button label="In den Warenkorb" icon="pi pi-shopping-cart" />
          </div>
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup>
import { reactive } from 'vue'
import Card from 'primevue/card'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
import Button from 'primevue/button'

const state = reactive({
  activeTab: 'beschreibung'
})
</script>