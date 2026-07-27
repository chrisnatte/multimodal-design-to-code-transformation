<template>
  <div class="flex flex-col items-center justify-center w-[768px] h-[768px] bg-black">
    <div class="flex flex-col w-[512px] bg-white rounded-xl border border-[#e2e8f0]">
      
      <!-- Header -->
      <div class="flex flex-row justify-between items-center p-[17.5px]">
        <span class="font-sans text-[17.5px] font-semibold text-gray-900">Neues Projekt</span>
        <div class="flex flex-col gap-[7px]">
          <Button icon="pi pi-times" severity="secondary" text rounded aria-label="Close" />
        </div>
      </div>

      <!-- Content -->
      <div class="flex flex-row gap-[7px] px-[17.5px] pb-[17.5px]">
        <Tabs value="0" class="flex flex-col flex-grow">
          <TabList class="flex flex-row bg-white border-b border-[#e2e8f0]">
            <Tab value="0"><span class="font-sans text-sm font-bold">1 - Allgemein</span></Tab>
            <Tab value="1"><span class="font-sans text-sm font-bold">2 - Zeitplan</span></Tab>
            <Tab value="2"><span class="font-sans text-sm font-bold">3 - Einstellungen</span></Tab>
          </TabList>
          
          <TabPanels class="flex flex-col bg-white pt-[12.25px] pb-[15.75px] px-[4px]">
            <TabPanel value="0" class="flex flex-col gap-[16px]">
              
              <!-- Row 1 -->
              <div class="flex flex-row justify-between items-center px-[4px]">
                <div class="flex flex-col">
                  <span class="font-sans text-sm font-semibold text-gray-900">Öffentlich sichtbar</span>
                  <span class="font-sans text-[10px] font-light text-gray-600">Für alle Teammitglieder</span>
                </div>
                <ToggleSwitch v-model="publicVisible" />
              </div>

              <!-- Row 2 -->
              <div class="flex flex-row justify-between items-center px-[4px]">
                <div class="flex flex-col">
                  <span class="font-sans text-sm font-semibold text-gray-900">Benachrichtigungen</span>
                  <span class="font-sans text-[10px] font-light text-gray-600">Bei Statusänderungen</span>
                </div>
                <ToggleSwitch v-model="notifications" />
              </div>

            </TabPanel>
            <TabPanel value="1"></TabPanel>
            <TabPanel value="2"></TabPanel>
          </TabPanels>
        </Tabs>
      </div>

      <!-- Footer -->
      <div class="flex flex-row justify-end items-center gap-[7px] px-[17.5px] pb-[17.5px]">
        <Button label="Abbrechen" severity="secondary" />
        <Button label="Weiter" severity="primary" />
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

const publicVisible = ref(true);
const notifications = ref(false);
</script>