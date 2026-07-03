<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-black">
    <div class="flex flex-col bg-white rounded-xl">
      <div class="flex items-center justify-between p-4">
        <span class="text-[18px] font-semibold">Neues Projekt</span>
        <div class="flex flex-col gap-2">
          <Button icon="pi pi-times" severity="secondary" text />
        </div>
      </div>

      <div class="flex items-center gap-2 px-4 pb-4">
        <div class="flex flex-col w-full">
          <Tabs v-model:value="state.activeTab">
            <TabList>
              <Tab value="0">1 - Allgemein</Tab>
              <Tab value="1">2 - Zeitplan</Tab>
              <Tab value="2">3 - Einstellungen</Tab>
            </TabList>
            <TabPanels class="pt-3 px-1 pb-4">
              <TabPanel value="0">
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
              <TabPanel value="1">
                <div class="h-2"></div>
              </TabPanel>
              <TabPanel value="2">
                <div class="h-2"></div>
              </TabPanel>
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
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
import ToggleSwitch from 'primevue/toggleswitch'

const state = reactive({
  activeTab: '0',
  publicVisible: true,
  notifications: false
})
</script>