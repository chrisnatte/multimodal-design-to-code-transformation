<template>
  <div class="flex flex-col items-center justify-center w-[768px] h-[768px] bg-black">
    <div class="flex flex-col w-[512px] bg-white rounded-xl border border-slate-200">
      <div class="flex flex-row items-center justify-between w-full px-[17.5px] py-[17.5px]">
        <span class="text-[17.5px] font-semibold text-gray-900">Neues Projekt</span>
        <Button icon="pi pi-times" severity="secondary" text aria-label="Schließen" />
      </div>
      <div class="flex flex-row items-center gap-[7px] pb-[17.5px] px-[17.5px] w-full">
        <Tabs v-model:value="activeTab" class="w-full grow">
          <TabList>
            <Tab value="0">1 - Allgemein</Tab>
            <Tab value="1">2 - Zeitplan</Tab>
            <Tab value="2">3 - Einstellungen</Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="0">
              <div class="flex flex-col items-center justify-center gap-[16px] w-full pt-[12.25px] pb-[15.75px] px-1">
                <div class="flex flex-row items-center justify-between w-full px-1">
                  <div class="flex flex-col">
                    <span class="text-sm font-semibold text-gray-900">Öffentlich sichtbar</span>
                    <span class="text-[10px] font-light text-gray-500">Für alle Teammitglieder</span>
                  </div>
                  <ToggleSwitch v-model="isPublic" />
                </div>
                <div class="flex flex-row items-center justify-between w-full px-1">
                  <div class="flex flex-col">
                    <span class="text-sm font-semibold text-gray-900">Benachrichtigungen</span>
                    <span class="text-[10px] font-light text-gray-500">Bei Statusänderungen</span>
                  </div>
                  <ToggleSwitch v-model="notifications" />
                </div>
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
      <div class="flex flex-row items-center justify-end w-full px-[17.5px] py-[17.5px] gap-[7px]">
        <Button label="Abbrechen" severity="secondary" />
        <Button label="Weiter" severity="success" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import ToggleSwitch from 'primevue/toggleswitch';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';

const activeTab = ref('0');
const isPublic = ref(true);
const notifications = ref(false);
</script>