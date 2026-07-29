<template>
  <div class="p-6 bg-white flex flex-col gap-2.5">
    <Card class="rounded-xl bg-white">
      <template #header>
        <div class="p-2.5 flex flex-col items-center justify-center">
          <div class="flex flex-col gap-1 items-center">
            <span class="font-medium text-[17.5px]">ProDesk X500</span>
            <span class="font-light text-xs">Workstation Monitor</span>
          </div>
        </div>
      </template>
      <template #content>
        <div class="px-1 flex flex-col gap-[7px] rounded-md">
          <div class="flex flex-col w-full">
            <Tabs :value="activeTab">
              <TabList>
                <Tab value="0">
                  <span class="font-bold text-sm">Beschreibung</span>
                </Tab>
                <Tab value="1">
                  <span class="font-bold text-sm">Spezifikationen</span>
                </Tab>
                <Tab value="2">
                  <span class="font-bold text-sm">Bewertungen</span>
                </Tab>
              </TabList>
              <TabPanels class="bg-white flex flex-col">
                <TabPanel value="2" class="py-3 px-4 flex flex-col gap-2 w-full">
                  <span class="font-normal text-sm">Noch keine Bewertungen vorhanden.</span>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </div>
        </div>
      </template>
      <template #footer>
        <div class="py-2 px-4 flex flex-row gap-2 justify-end w-full">
          <Button label="Merken" severity="secondary" />
          <Button label="In den Warenkorb" icon="pi pi-cart-plus" />
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

const activeTab = ref('2');
</script>