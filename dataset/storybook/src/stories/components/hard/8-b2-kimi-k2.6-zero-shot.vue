<template>
  <Card class="w-[30.5rem]">
    <template #header>
      <div class="flex flex-col items-center justify-center gap-1 p-2.5">
        <span class="text-lg font-medium">ProDesk X500</span>
        <span class="text-xs font-light">Workstation Monitor</span>
      </div>
    </template>
    <template #content>
      <div class="px-1">
        <Tabs v-model:value="activeTab">
          <TabList>
            <Tab value="0">Beschreibung</Tab>
            <Tab value="1">Spezifikationen</Tab>
            <Tab value="2">Bewertungen</Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="0">
              <div class="px-4 py-3">
                <p class="m-0 text-sm">Noch keine Bewertungen vorhanden.</p>
              </div>
            </TabPanel>
            <TabPanel value="1">
              <div class="px-4 py-3">
                <p class="m-0 text-sm"></p>
              </div>
            </TabPanel>
            <TabPanel value="2">
              <div class="px-4 py-3">
                <p class="m-0 text-sm"></p>
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </template>
    <template #footer>
      <div class="flex justify-end gap-2 px-4 py-2">
        <Button label="Merken" severity="secondary" />
        <Button label="In den Warenkorb" icon="pi pi-cart-plus" />
      </div>
    </template>
  </Card>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Tab from 'primevue/tab';
import TabList from 'primevue/tablist';
import TabPanel from 'primevue/tabpanel';
import TabPanels from 'primevue/tabpanels';
import Tabs from 'primevue/tabs';

const activeTab = ref('0');
</script>