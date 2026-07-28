<template>
  <Dialog v-model:visible="visible" modal :style="{ width: '32rem' }">
    <template #header>
      <div class="flex items-center justify-between w-full">
        <span class="text-lg font-semibold text-gray-800">Neues Projekt</span>
        <Button icon="pi pi-times" text severity="secondary" @click="visible = false" />
      </div>
    </template>

    <Tabs value="0">
      <TabList>
        <Tab value="0">1 - Allgemein</Tab>
        <Tab value="1">2 - Zeitplan</Tab>
        <Tab value="2">3 - Einstellungen</Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">
          <div class="flex flex-col gap-4 pt-3">
            <div class="flex items-center justify-between px-1">
              <div class="flex flex-col gap-0.5">
                <span class="text-sm font-semibold text-gray-800">Öffentlich sichtbar</span>
                <span class="text-xs text-gray-500">Für alle Teammitglieder</span>
              </div>
              <ToggleSwitch v-model="isPublic" />
            </div>
            <div class="flex items-center justify-between px-1">
              <div class="flex flex-col gap-0.5">
                <span class="text-sm font-semibold text-gray-800">Benachrichtigungen</span>
                <span class="text-xs text-gray-500">Bei Statusänderungen</span>
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
      <div class="flex justify-end gap-2">
        <Button label="Abbrechen" severity="secondary" text @click="visible = false" />
        <Button label="Weiter" @click="visible = false" />
      </div>
    </template>
  </Dialog>
</template>

<script setup>
import { ref } from 'vue';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import ToggleSwitch from 'primevue/toggleswitch';

const visible = ref(true);
const isPublic = ref(true);
const notifications = ref(false);
</script>