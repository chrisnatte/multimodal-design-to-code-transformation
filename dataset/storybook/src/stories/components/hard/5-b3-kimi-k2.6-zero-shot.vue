<template>
  <div class="bg-black min-h-screen w-full flex flex-col items-center justify-center">
    <div class="bg-white rounded-xl border border-slate-200 w-[512px] flex flex-col">
      <div class="flex items-center justify-between p-[17.5px]">
        <span class="font-semibold text-[17.5px]">Neues Projekt</span>
        <Button icon="pi pi-times" variant="text" severity="secondary" />
      </div>
      <div class="flex items-center p-[17.5px]">
        <Tabs v-model:value="activeTab" class="w-full">
          <TabList>
            <Tab value="0">1 - Allgemein</Tab>
            <Tab value="1">2 - Zeitplan</Tab>
            <Tab value="2">3 - Einstellungen</Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="0">
              <div class="pt-[12.25px] pb-[15.75px] px-1 flex flex-col items-center gap-4">
                <div class="flex justify-between items-center w-full px-1">
                  <div class="flex flex-col">
                    <span class="font-semibold text-sm">Öffentlich sichtbar</span>
                    <span class="font-light text-[10px] text-surface-500">Für alle Teammitglieder</span>
                  </div>
                  <ToggleSwitch v-model="publicVisible" />
                </div>
                <div class="flex justify-between items-center w-full px-1">
                  <div class="flex flex-col">
                    <span class="font-semibold text-sm">Benachrichtigungen</span>
                    <span class="font-light text-[10px] text-surface-500">Bei Statusänderungen</span>
                  </div>
                  <ToggleSwitch v-model="notifications" />
                </div>
              </div>
            </TabPanel>
            <TabPanel value="1" />
            <TabPanel value="2" />
          </TabPanels>
        </Tabs>
      </div>
      <div class="flex justify-end gap-[7px] p-[17.5px]">
        <Button label="Abbrechen" severity="secondary" />
        <Button label="Weiter" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import ToggleSwitch from 'primevue/toggleswitch';

const activeTab = ref('0');
const publicVisible = ref(true);
const notifications = ref(false);
</script>