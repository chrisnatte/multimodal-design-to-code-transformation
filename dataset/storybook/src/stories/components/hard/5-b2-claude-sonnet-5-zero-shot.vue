<template>
  <div class="w-full h-screen flex items-center justify-center bg-black">
    <Dialog v-model:visible="visible" modal header="Neues Projekt" :style="{ width: '32rem' }" :closable="true">
      <div class="flex flex-col gap-2">
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
                    <span class="font-light text-xs">Für alle Teammitglieder</span>
                  </div>
                  <ToggleSwitch v-model="publicVisible" />
                </div>
                <div class="flex items-center justify-between px-1">
                  <div class="flex flex-col">
                    <span class="font-semibold text-sm">Benachrichtigungen</span>
                    <span class="font-light text-xs">Bei Statusänderungen</span>
                  </div>
                  <ToggleSwitch v-model="notifications" />
                </div>
              </div>
            </TabPanel>
            <TabPanel value="1">
              <p class="m-0">Zeitplan Inhalt</p>
            </TabPanel>
            <TabPanel value="2">
              <p class="m-0">Einstellungen Inhalt</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>

      <template #footer>
        <Button label="Abbrechen" severity="secondary" @click="visible = false" />
        <Button label="Weiter" severity="primary" @click="onContinue" />
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

const onContinue = () => {
  visible.value = false;
};
</script>