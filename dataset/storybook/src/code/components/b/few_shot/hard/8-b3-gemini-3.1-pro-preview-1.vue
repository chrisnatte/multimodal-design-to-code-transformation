<template>
  <div class="flex flex-col gap-2.5 p-6 bg-white">
    <Card class="rounded-xl bg-white">
      <template #header>
        <div class="flex flex-col items-center justify-center p-2.5 gap-2.5">
          <div class="flex flex-col items-center gap-1">
            <span class="font-medium text-[17.5px]">ProDesk X500</span>
            <span class="font-light text-xs">Workstation Monitor</span>
          </div>
        </div>
      </template>
      <template #content>
        <div class="flex flex-col px-1 gap-[7px] rounded-md">
          <Tabs value="0">
            <TabList>
              <Tab value="0">Beschreibung</Tab>
              <Tab value="1">Spezifikationen</Tab>
              <Tab value="2">Bewertungen</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="0">
                <p class="text-sm font-normal m-0">Noch keine Bewertungen vorhanden.</p>
              </TabPanel>
              <TabPanel value="1">
                <p class="text-sm font-normal m-0">Noch keine Bewertungen vorhanden.</p>
              </TabPanel>
              <TabPanel value="2">
                <p class="text-sm font-normal m-0">Noch keine Bewertungen vorhanden.</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </template>
      <template #footer>
        <div class="flex justify-end px-4 py-2 gap-2">
          <Button label="Merken" severity="secondary" />
          <Button label="In den Warenkorb" icon="pi pi-cart-plus" severity="primary" />
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import Card from 'primevue/card';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import Button from 'primevue/button';
</script>