<template>
  <div class="flex flex-col bg-white rounded-xl w-[488px]">
    <!-- Header -->
    <div class="flex flex-col items-center justify-center gap-2.5 p-2.5">
      <div class="flex flex-col items-center gap-1">
        <span class="font-medium text-[17.5px]">ProDesk X500</span>
        <span class="font-light text-xs">Workstation Monitor</span>
      </div>
    </div>

    <!-- Body -->
    <div class="flex flex-col gap-2 px-1 rounded-md">
      <!-- Content / Tabs -->
      <div class="flex flex-col w-full">
        <Tabs v-model:value="activeTab">
          <TabList>
            <Tab value="0">Beschreibung</Tab>
            <Tab value="1">Spezifikationen</Tab>
            <Tab value="2">Bewertungen</Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="0">
              <p class="m-0 text-sm py-3 px-4">Noch keine Beschreibung vorhanden.</p>
            </TabPanel>
            <TabPanel value="1">
              <p class="m-0 text-sm py-3 px-4">Noch keine Spezifikationen vorhanden.</p>
            </TabPanel>
            <TabPanel value="2">
              <p class="m-0 text-sm py-3 px-4">Noch keine Bewertungen vorhanden.</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>

      <!-- Footer -->
      <div class="flex justify-end items-center gap-2 px-4 py-2">
        <Button label="Merken" severity="secondary" />
        <Button label="In den Warenkorb" icon="pi pi-shopping-cart" iconPos="left" severity="success" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import Button from 'primevue/button';

const activeTab = ref('0');
</script>