<template>
  <div class="min-h-screen w-full bg-black flex flex-col items-center justify-center">
    <Dialog v-model:visible="state.visible" modal :closable="false" :draggable="false" :style="{ width: '42rem' }">
      <template #container>
        <div class="bg-white rounded-xl flex flex-col">
          <div class="flex items-center justify-between p-4">
            <span class="text-[18px] font-semibold">Neues Projekt</span>
            <div class="flex flex-col gap-2">
              <Button icon="pi pi-times" text severity="secondary" @click="state.visible = false" />
            </div>
          </div>

          <div class="flex flex-row items-center gap-2 px-4 pb-4">
            <div class="flex flex-col w-full">
              <Tabs v-model:value="state.activeTab">
                <TabList class="w-full">
                  <Tab value="0">1 - Allgemein</Tab>
                  <Tab value="1">2 - Zeitplan</Tab>
                  <Tab value="2">3 - Einstellungen</Tab>
                </TabList>
                <TabPanels class="px-1 pt-3 pb-4">
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
                  <TabPanel value="1"></TabPanel>
                  <TabPanel value="2"></TabPanel>
                </TabPanels>
              </Tabs>
            </div>
          </div>

          <div class="flex justify-end gap-2 px-4 pb-4">
            <Button label="Abbrechen" severity="secondary" @click="state.visible = false" />
            <Button label="Weiter" />
          </div>
        </div>
      </template>
    </Dialog>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
import ToggleSwitch from 'primevue/toggleswitch'

const state = reactive({
  visible: true,
  activeTab: '0',
  publicVisible: true,
  notifications: false
})
</script>