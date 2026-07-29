<template>
  <div class="flex items-center justify-center min-h-screen bg-black">
    <Dialog 
      v-model:visible="visible" 
      header="Neues Projekt" 
      :style="{ width: '32rem' }" 
      modal
    >
      <Tabs v-model:value="activeTab">
        <TabList>
          <Tab value="0">1 - Allgemein</Tab>
          <Tab value="1">2 - Zeitplan</Tab>
          <Tab value="2">3 - Einstellungen</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0">
            <div class="flex flex-col gap-4 py-3">
              <div class="flex items-center justify-between px-1">
                <div class="flex flex-col">
                  <span class="font-semibold text-sm">Öffentlich sichtbar</span>
                  <span class="font-light text-[10px] text-surface-500">Für alle Teammitglieder</span>
                </div>
                <ToggleSwitch v-model="publicVisible" />
              </div>
              <div class="flex items-center justify-between px-1">
                <div class="flex flex-col">
                  <span class="font-semibold text-sm">Benachrichtigungen</span>
                  <span class="font-light text-[10px] text-surface-500">Bei Statusänderungen</span>
                </div>
                <ToggleSwitch v-model="notifications" />
              </div>
            </div>
          </TabPanel>
          <TabPanel value="1"></TabPanel>
          <TabPanel value="2"></TabPanel>
        </TabPanels>
      </Tabs>
      
      <template #footer>
        <div class="flex justify-end gap-2 w-full pt-4">
          <Button label="Abbrechen" severity="secondary" @click="visible = false" />
          <Button label="Weiter" @click="visible = false" />
        </div>
      </template>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Dialog from 'primevue/dialog';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import ToggleSwitch from 'primevue/toggleswitch';
import Button from 'primevue/button';

const visible = ref(true);
const activeTab = ref('0');
const publicVisible = ref(true);
const notifications = ref(false);
</script>