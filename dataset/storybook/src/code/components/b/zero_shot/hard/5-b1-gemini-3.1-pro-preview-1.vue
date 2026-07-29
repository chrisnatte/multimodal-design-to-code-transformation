<template>
  <div class="flex flex-col items-center justify-center w-[768px] h-[768px] bg-black">
    <div class="flex flex-col w-[512px] bg-white rounded-[12px] border border-[#e2e8f0]">
      
      <!-- Header -->
      <div class="flex flex-row justify-between items-center p-[17.5px]">
        <span class="font-inter font-semibold text-[17.5px] text-black">Neues Projekt</span>
        <div class="flex flex-col gap-[7px]">
          <Button icon="pi pi-times" text severity="secondary" aria-label="Close" class="w-[35px] h-[28px] p-0" />
        </div>
      </div>

      <!-- Content -->
      <div class="flex flex-row p-[17.5px] gap-[7px]">
        <div class="flex flex-col grow w-full">
          <Tabs value="0">
            <TabList>
              <Tab value="0"><span class="font-inter font-bold text-[14px]">1 - Allgemein</span></Tab>
              <Tab value="1"><span class="font-inter font-bold text-[14px]">2 - Zeitplan</span></Tab>
              <Tab value="2"><span class="font-inter font-bold text-[14px]">3 - Einstellungen</span></Tab>
            </TabList>
            <TabPanels class="pt-[12.25px] pb-[15.75px] px-[4px]">
              <TabPanel value="0">
                <div class="flex flex-col gap-[16px]">
                  
                  <!-- Row 1 -->
                  <div class="flex flex-row justify-between items-center px-[4px]">
                    <div class="flex flex-col">
                      <span class="font-inter font-semibold text-[14px] text-black">Öffentlich sichtbar</span>
                      <span class="font-inter font-light text-[10px] text-black">Für alle Teammitglieder</span>
                    </div>
                    <ToggleSwitch v-model="publicVisible" />
                  </div>

                  <!-- Row 2 -->
                  <div class="flex flex-row justify-between items-center px-[4px]">
                    <div class="flex flex-col">
                      <span class="font-inter font-semibold text-[14px] text-black">Benachrichtigungen</span>
                      <span class="font-inter font-light text-[10px] text-black">Bei Statusänderungen</span>
                    </div>
                    <ToggleSwitch v-model="notifications" />
                  </div>

                </div>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>

      <!-- Footer -->
      <div class="flex flex-row justify-end items-start p-[17.5px] gap-[7px]">
        <Button label="Abbrechen" severity="secondary" class="font-inter font-medium text-[14px]" />
        <Button label="Weiter" class="font-inter font-medium text-[14px]" />
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