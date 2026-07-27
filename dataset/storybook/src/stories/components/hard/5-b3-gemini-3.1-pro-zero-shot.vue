<template>
  <div class="flex items-center justify-center min-h-screen bg-black">
    <Dialog 
      v-model:visible="visible" 
      modal 
      header="Neues Projekt" 
      :style="{ width: '32rem' }"
      :closable="true"
    >
      <Tabs value="0">
        <TabList>
          <Tab value="0">1 - Allgemein</Tab>
          <Tab value="1">2 - Zeitplan</Tab>
          <Tab value="2">3 - Einstellungen</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0">
            <div class="flex flex-col gap-4 pt-3 pb-4 px-1">
              <div class="flex flex-row justify-between items-center px-1">
                <div class="flex flex-col">
                  <span class="font-semibold text-sm text-surface-900 dark:text-surface-0">Öffentlich sichtbar</span>
                  <span class="font-light text-[10px] text-surface-500 dark:text-surface-400 mt-1">Für alle Teammitglieder</span>
                </div>
                <ToggleSwitch v-model="publicVisible" />
              </div>
              <div class="flex flex-row justify-between items-center px-1">
                <div class="flex flex-col">
                  <span class="font-semibold text-sm text-surface-900 dark:text-surface-0">Benachrichtigungen</span>
                  <span class="font-light text-[10px] text-surface-500 dark:text-surface-400 mt-1">Bei Statusänderungen</span>
                </div>
                <ToggleSwitch v-model="notifications" />
              </div>
            </div>
          </TabPanel>
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
const publicVisible = ref(true);
const notifications = ref(false);
</script>