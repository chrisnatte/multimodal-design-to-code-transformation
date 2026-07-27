<template>
  <Card class="w-[488px] bg-white rounded-xl shadow-sm">
    <template #title>
      <div class="text-[17.5px] font-medium font-sans text-surface-900">
        ProDesk X500
      </div>
    </template>
    <template #subtitle>
      <div class="text-xs font-light font-sans text-surface-500">
        Workstation Monitor
      </div>
    </template>
    <template #content>
      <div class="flex flex-col gap-[7px] px-1">
        <Tabs v-model:value="activeTab" class="w-full">
          <TabList>
            <Tab value="0">Beschreibung</Tab>
            <Tab value="1">Spezifikationen</Tab>
            <Tab value="2">Bewertungen</Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="0">
              <p class="text-sm font-normal font-sans m-0 text-surface-700">
                Keine Beschreibung verfügbar.
              </p>
            </TabPanel>
            <TabPanel value="1">
              <p class="text-sm font-normal font-sans m-0 text-surface-700">
                Keine Spezifikationen verfügbar.
              </p>
            </TabPanel>
            <TabPanel value="2">
              <p class="text-sm font-normal font-sans m-0 text-surface-700">
                Noch keine Bewertungen vorhanden.
              </p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </template>
    <template #footer>
      <div class="flex justify-end gap-2 w-full py-2 px-4">
        <Button label="Merken" severity="secondary" />
        <Button label="In den Warenkorb" icon="pi pi-cart-plus" />
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

const activeTab = ref('2');
</script>