<template>
  <div class="flex w-[536px] flex-col gap-2.5 bg-white p-6">
    <Card
      class="w-[488px]"
      :pt="{
        body: 'p-0',
        content: 'p-0',
      }"
    >
      <template #header>
        <div class="flex h-[124px] flex-col items-center justify-center gap-2.5 p-2.5">
          <div class="flex w-[120px] flex-col items-center gap-1">
            <span class="text-[17.5px] font-medium">ProDesk X500</span>
            <span class="text-xs font-light">Workstation Monitor</span>
          </div>
        </div>
      </template>

      <template #content>
        <div class="flex flex-col gap-[7px] px-1">
          <div class="flex flex-col">
            <Tabs v-model:value="activeTab">
              <TabList>
                <Tab value="description">Beschreibung</Tab>
                <Tab value="specifications">Spezifikationen</Tab>
                <Tab value="reviews">Bewertungen</Tab>
              </TabList>
              <TabPanels>
                <TabPanel value="description" class="px-4 py-3">
                  <span class="text-sm">Noch keine Bewertungen vorhanden.</span>
                </TabPanel>
                <TabPanel value="specifications" class="px-4 py-3" />
                <TabPanel value="reviews" class="px-4 py-3" />
              </TabPanels>
            </Tabs>
          </div>

          <div class="flex h-[49px] justify-end gap-2 px-4 py-2">
            <Button label="Merken" severity="secondary" />
            <Button label="In den Warenkorb" icon="pi pi-shopping-cart" />
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Tab from 'primevue/tab'
import TabList from 'primevue/tablist'
import TabPanel from 'primevue/tabpanel'
import TabPanels from 'primevue/tabpanels'
import Tabs from 'primevue/tabs'

const activeTab = ref('description')
</script>