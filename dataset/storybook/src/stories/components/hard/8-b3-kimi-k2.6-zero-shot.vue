<template>
  <Card class="w-[488px] rounded-xl">
    <template #header>
      <div class="flex flex-col items-center justify-center p-2.5 h-[124px]">
        <div class="flex flex-col items-center gap-1">
          <span class="text-lg font-medium">ProDesk X500</span>
          <span class="text-xs font-light text-gray-500">Workstation Monitor</span>
        </div>
      </div>
    </template>
    <template #content>
      <div class="px-1">
        <Tabs :value="activeTab">
          <TabList class="border-b border-gray-200">
            <Tab value="0">Beschreibung</Tab>
            <Tab value="1">Spezifikationen</Tab>
            <Tab value="2">Bewertungen</Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="0">
              <div class="py-3 px-4">
                <span class="text-sm font-normal">Noch keine Bewertungen vorhanden.</span>
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </template>
    <template #footer>
      <div class="flex justify-end gap-2 py-2 px-4">
        <Button label="Merken" severity="secondary" />
        <Button label="In den Warenkorb" severity="primary" icon="pi pi-cart-plus" />
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