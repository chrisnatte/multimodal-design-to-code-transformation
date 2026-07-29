<template>
  <div class="p-6 bg-white flex flex-col gap-2.5 w-fit">
    <Card class="rounded-xl bg-white flex flex-col w-[488px]">
      <template #header>
        <div class="p-2.5 flex flex-col items-center justify-center">
          <div class="flex flex-col items-center gap-1">
            <span class="font-medium text-[17.5px]">ProDesk X500</span>
            <span class="font-light text-xs">Workstation Monitor</span>
          </div>
        </div>
      </template>
      <template #content>
        <div class="flex flex-col gap-[7px] px-1 rounded-md w-full">
          <Tabs v-model:value="activeTab" class="w-full">
            <TabList>
              <Tab value="0">Beschreibung</Tab>
              <Tab value="1">Spezifikationen</Tab>
              <Tab value="2">Bewertungen</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="0">
                <div class="py-3 px-4 flex flex-col gap-2">
                  <span class="text-sm font-normal">Noch keine Bewertungen vorhanden.</span>
                </div>
              </TabPanel>
              <TabPanel value="1">
                <div class="py-3 px-4 flex flex-col gap-2">
                  <span class="text-sm font-normal">Noch keine Bewertungen vorhanden.</span>
                </div>
              </TabPanel>
              <TabPanel value="2">
                <div class="py-3 px-4 flex flex-col gap-2">
                  <span class="text-sm font-normal">Noch keine Bewertungen vorhanden.</span>
                </div>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </template>
      <template #footer>
        <div class="flex flex-row justify-end items-center gap-2 py-2 px-4 w-full">
          <Button label="Merken" severity="secondary" />
          <Button label="In den Warenkorb" icon="pi pi-shopping-cart" />
        </div>
      </template>
    </Card>
  </div>
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