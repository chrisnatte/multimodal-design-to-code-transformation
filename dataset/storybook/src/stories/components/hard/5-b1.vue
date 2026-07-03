<template>
  <div class="min-h-screen w-full bg-black flex flex-col items-center justify-center">
    <div class="bg-white rounded-xl flex flex-col w-full max-w-2xl">
      <div class="flex items-center justify-between p-4">
        <h2 class="text-lg font-semibold">Neues Projekt</h2>
        <div class="flex flex-col gap-2">
          <Button icon="pi pi-times" severity="secondary" text rounded />
        </div>
      </div>

      <div class="flex items-center gap-2 px-4 pb-4">
        <div class="flex flex-col w-full">
          <Tabs v-model:value="state.activeTab">
            <TabList class="flex">
              <Tab value="allgemein">1 - Allgemein</Tab>
              <Tab value="zeitplan">2 - Zeitplan</Tab>
              <Tab value="einstellungen">3 - Einstellungen</Tab>
            </TabList>
            <TabPanels class="pt-3 px-1 pb-4">
              <TabPanel value="allgemein">
                <div class="flex flex-col items-center gap-4 w-full">
                  <div class="flex items-center justify-between w-full px-1">
                    <div class="flex flex-col">
                      <span class="text-sm font-semibold">Öffentlich sichtbar</span>
                      <span class="text-[10px] font-light">Für alle Teammitglieder</span>
                    </div>
                    <ToggleSwitch v-model="state.publicVisible" />
                  </div>

                  <div class="flex items-center justify-between w-full px-1">
                    <div class="flex flex-col">
                      <span class="text-sm font-semibold">Benachrichtigungen</span>
                      <span class="text-[10px] font-light">Bei Statusänderungen</span>
                    </div>
                    <ToggleSwitch v-model="state.notifications" />
                  </div>
                </div>
              </TabPanel>
              <TabPanel value="zeitplan" />
              <TabPanel value="einstellungen" />
            </TabPanels>
          </Tabs>
        </div>
      </div>

      <div class="flex justify-end gap-2 px-4 pb-4">
        <Button label="Abbrechen" severity="secondary" />
        <Button label="Weiter" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Button from 'primevue/button'
import ToggleSwitch from 'primevue/toggleswitch'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'

const state = reactive({
  activeTab: 'allgemein',
  publicVisible: true,
  notifications: false
})
</script>