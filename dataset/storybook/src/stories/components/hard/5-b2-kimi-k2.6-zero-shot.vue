<template>
  <div class="flex items-center justify-center bg-black" style="width: 768px; height: 768px;">
    <Dialog v-model:visible="visible" modal :closable="false" :style="{ width: '32rem' }" class="rounded-xl">
      <template #header>
        <div class="flex items-center justify-between w-full p-[17.5px]">
          <span class="text-[17.5px] font-semibold">Neues Projekt</span>
          <Button icon="pi pi-times" severity="secondary" variant="text" aria-label="Schließen" @click="visible = false" />
        </div>
      </template>

      <div class="px-[17.5px]">
        <Tabs value="0">
          <TabList>
            <Tab value="0">1 - Allgemein</Tab>
            <Tab value="1">2 - Zeitplan</Tab>
            <Tab value="2">3 - Einstellungen</Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="0">
              <div class="flex flex-col gap-4 pt-[12.25px] pb-[15.75px] px-1">
                <div class="flex items-center justify-between px-1">
                  <div class="flex flex-col">
                    <span class="font-semibold text-sm">Öffentlich sichtbar</span>
                    <span class="text-[10px] text-surface-500">Für alle Teammitglieder</span>
                  </div>
                  <ToggleSwitch v-model="checked1" />
                </div>
                <div class="flex items-center justify-between px-1">
                  <div class="flex flex-col">
                    <span class="font-semibold text-sm">Benachrichtigungen</span>
                    <span class="text-[10px] text-surface-500">Bei Statusänderungen</span>
                  </div>
                  <ToggleSwitch v-model="checked2" />
                </div>
              </div>
            </TabPanel>
            <TabPanel value="1">
              <div class="pt-[12.25px] pb-[15.75px] px-1">
                <p class="m-0 text-sm text-surface-500">Zeitplan Inhalt</p>
              </div>
            </TabPanel>
            <TabPanel value="2">
              <div class="pt-[12.25px] pb-[15.75px] px-1">
                <p class="m-0 text-sm text-surface-500">Einstellungen Inhalt</p>
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>

      <template #footer>
        <div class="flex justify-end gap-[7px] px-[17.5px] pb-[17.5px]">
          <Button label="Abbrechen" severity="secondary" @click="visible = false" />
          <Button label="Weiter" @click="visible = false" />
        </div>
      </template>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import ToggleSwitch from 'primevue/toggleswitch';

const visible = ref(true);
const checked1 = ref(true);
const checked2 = ref(false);
</script>