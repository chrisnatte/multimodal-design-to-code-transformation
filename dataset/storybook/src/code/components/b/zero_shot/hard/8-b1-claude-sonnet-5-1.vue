<template>
  <div class="flex flex-col gap-2.5 p-6 bg-white">
    <div class="flex flex-col gap-0 rounded-xl bg-white">
      <!-- header -->
      <div class="flex flex-col items-center justify-center gap-2.5 p-2.5">
        <div class="flex flex-col items-center gap-1">
          <span class="font-medium text-lg">ProDesk X500</span>
          <span class="font-light text-xs">Workstation Monitor</span>
        </div>
      </div>

      <!-- body -->
      <div class="flex flex-col gap-2 px-1 rounded-md">
        <div class="flex flex-col w-full">
          <Tabs value="bewertungen">
            <TabList>
              <Tab value="beschreibung">Beschreibung</Tab>
              <Tab value="spezifikationen">Spezifikationen</Tab>
              <Tab value="bewertungen">Bewertungen</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="beschreibung">
                <div class="flex flex-col gap-2 p-3">
                  <span class="text-sm">Noch keine Beschreibung vorhanden.</span>
                </div>
              </TabPanel>
              <TabPanel value="spezifikationen">
                <div class="flex flex-col gap-2 p-3">
                  <span class="text-sm">Noch keine Spezifikationen vorhanden.</span>
                </div>
              </TabPanel>
              <TabPanel value="bewertungen">
                <div class="flex flex-col gap-2 p-3">
                  <span class="text-sm">Noch keine Bewertungen vorhanden.</span>
                </div>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>

        <!-- footer -->
        <div class="flex w-full items-start justify-end gap-2 px-4 py-2">
          <Button label="Merken" severity="secondary" />
          <Button label="In den Warenkorb" icon="pi pi-cart-plus" severity="primary" />
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

const activeTab = ref('bewertungen')
</script>