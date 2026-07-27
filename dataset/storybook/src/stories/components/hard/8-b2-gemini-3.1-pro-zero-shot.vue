<template>
  <Card class="w-[488px] rounded-xl bg-white shadow-md">
    <template #title>
      <div class="pt-2.5 px-2.5">
        <span class="font-medium text-[17.5px] font-sans text-gray-900">ProDesk X500</span>
      </div>
    </template>
    <template #subtitle>
      <div class="pb-2.5 px-2.5">
        <span class="font-light text-xs font-sans text-gray-500">Workstation Monitor</span>
      </div>
    </template>
    <template #content>
      <div class="px-1">
        <Tabs v-model:value="activeTab">
          <TabList>
            <Tab value="0"><span class="font-bold text-sm font-sans">Beschreibung</span></Tab>
            <Tab value="1"><span class="font-bold text-sm font-sans">Spezifikationen</span></Tab>
            <Tab value="2"><span class="font-bold text-sm font-sans">Bewertungen</span></Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="0">
              <div class="py-3 px-4">
                <span class="font-normal text-sm font-sans text-gray-700">Noch keine Bewertungen vorhanden.</span>
              </div>
            </TabPanel>
            <TabPanel value="1">
              <div class="py-3 px-4">
                <span class="font-normal text-sm font-sans text-gray-700">Noch keine Bewertungen vorhanden.</span>
              </div>
            </TabPanel>
            <TabPanel value="2">
              <div class="py-3 px-4">
                <span class="font-normal text-sm font-sans text-gray-700">Noch keine Bewertungen vorhanden.</span>
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </template>
    <template #footer>
      <div class="flex justify-end items-center gap-2 py-2 px-4">
        <Button label="Merken" severity="secondary" />
        <Button label="In den Warenkorb" icon="pi pi-shopping-cart" severity="success" />
      </div>
    </template>
  </Card>
</template>

<script setup>
import { ref } from 'vue';
import Card from 'primevue/card';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import Button from 'primevue/button';

const activeTab = ref('0');
</script>