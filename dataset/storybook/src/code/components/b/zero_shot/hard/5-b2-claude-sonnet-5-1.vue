<template>
  <div class="flex items-center justify-center w-full h-screen bg-black">
    <Dialog
      v-model:visible="visible"
      modal
      header="Neues Projekt"
      :style="{ width: '32rem' }"
      :closable="true"
    >
      <div class="flex flex-col gap-4">
        <Tabs v-model:value="activeTab">
          <TabList>
            <Tab value="0">1 - Allgemein</Tab>
            <Tab value="1">2 - Zeitplan</Tab>
            <Tab value="2">3 - Einstellungen</Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="0">
              <div class="flex flex-col gap-4 p-1">
                <div class="flex items-center justify-between px-1">
                  <div class="flex flex-col">
                    <span class="font-semibold text-sm">Öffentlich sichtbar</span>
                    <span class="text-xs font-light text-surface-500">Für alle Teammitglieder</span>
                  </div>
                  <ToggleSwitch v-model="publicVisible" />
                </div>
                <div class="flex items-center justify-between px-1">
                  <div class="flex flex-col">
                    <span class="font-semibold text-sm">Benachrichtigungen</span>
                    <span class="text-xs font-light text-surface-500">Bei Statusänderungen</span>
                  </div>
                  <ToggleSwitch v-model="notifications" />
                </div>
              </div>
            </TabPanel>
            <TabPanel value="1">
              <p class="m-0 text-sm text-surface-500">Zeitplan Inhalte hier.</p>
            </TabPanel>
            <TabPanel value="2">
              <p class="m-0 text-sm text-surface-500">Einstellungen Inhalte hier.</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>

      <template #footer>
        <Button label="Abbrechen" severity="secondary" @click="visible = false" />
        <Button label="Weiter" severity="primary" @click="onNext" />
      </template>
    </Dialog>
  </div>
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
const activeTab = ref('0');
const publicVisible = ref(true);
const notifications = ref(false);

const onNext = () => {
  visible.value = false;
};
</script>