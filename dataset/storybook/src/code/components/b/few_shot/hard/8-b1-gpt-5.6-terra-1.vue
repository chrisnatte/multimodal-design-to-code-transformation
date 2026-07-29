<template>
  <div class="flex w-[536px] flex-col gap-2.5 bg-white p-6">
    <div class="flex w-full flex-col overflow-hidden rounded-xl bg-white">
      <div class="flex h-[124px] flex-col items-center justify-center gap-2.5 p-2.5">
        <div class="flex w-[120px] flex-col items-center gap-1">
          <span class="text-[17.5px] font-medium">ProDesk X500</span>
          <span class="text-xs font-light">Workstation Monitor</span>
        </div>
      </div>

      <div class="flex flex-col gap-[7px] px-1">
        <Tabs v-model:value="activeTab" class="w-full">
          <TabList>
            <Tab value="description">Beschreibung</Tab>
            <Tab value="specifications">Spezifikationen</Tab>
            <Tab value="reviews">Bewertungen</Tab>
          </TabList>

          <TabPanels>
            <TabPanel value="description" class="p-3">
              <span class="text-sm">Noch keine Bewertungen vorhanden.</span>
            </TabPanel>
            <TabPanel value="specifications" class="p-3">
              <span class="text-sm">Noch keine Bewertungen vorhanden.</span>
            </TabPanel>
            <TabPanel value="reviews" class="p-3">
              <span class="text-sm">Noch keine Bewertungen vorhanden.</span>
            </TabPanel>
          </TabPanels>
        </Tabs>

        <div class="flex justify-end gap-2 p-2 px-4">
          <Button label="Merken" severity="secondary" />
          <Button label="In den Warenkorb" icon="pi pi-cart-plus" severity="primary" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import Tab from 'primevue/tab'
import TabList from 'primevue/tablist'
import TabPanel from 'primevue/tabpanel'
import TabPanels from 'primevue/tabpanels'
import Tabs from 'primevue/tabs'

const activeTab = ref('description')
</script>