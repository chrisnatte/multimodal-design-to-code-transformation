<template>
  <div class="flex flex-col items-center justify-center bg-black min-h-screen">
    <Dialog v-model:visible="ui.visible" modal :closable="false" :draggable="false" :style="{ width: '44rem' }">
      <template #header>
        <div class="flex items-center justify-between w-full p-4">
          <span class="font-semibold text-lg">Neues Projekt</span>
          <div class="flex flex-col gap-2">
            <Button icon="pi pi-times" text severity="secondary" @click="ui.visible = false" />
          </div>
        </div>
      </template>

      <div class="flex flex-row items-center gap-2 px-4 pb-4">
        <div class="flex flex-col w-full">
          <Tabs v-model:value="ui.activeTab">
            <TabList class="flex flex-row w-full">
              <Tab value="0">1 - Allgemein</Tab>
              <Tab value="1">2 - Zeitplan</Tab>
              <Tab value="2">3 - Einstellungen</Tab>
            </TabList>
            <TabPanels class="pt-3 px-1 pb-4">
              <TabPanel value="0">
                <div class="flex flex-col items-center gap-4">
                  <div class="flex flex-row items-center justify-between w-full px-1">
                    <div class="flex flex-col">
                      <span class="font-semibold text-sm">Öffentlich sichtbar</span>
                      <span class="text-xs">Für alle Teammitglieder</span>
                    </div>
                    <ToggleSwitch v-model="form.publicVisible" />
                  </div>
                  <div class="flex flex-row items-center justify-between w-full px-1">
                    <div class="flex flex-col">
                      <span class="font-semibold text-sm">Benachrichtigungen</span>
                      <span class="text-xs">Bei Statusänderungen</span>
                    </div>
                    <ToggleSwitch v-model="form.notifications" />
                  </div>
                </div>
              </TabPanel>
              <TabPanel value="1">
                <div></div>
              </TabPanel>
              <TabPanel value="2">
                <div></div>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>

      <template #footer>
        <div class="flex flex-row justify-end gap-2 w-full px-4 pb-4">
          <Button label="Abbrechen" severity="secondary" @click="ui.visible = false" />
          <Button label="Weiter" />
        </div>
      </template>
    </Dialog>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
import ToggleSwitch from 'primevue/toggleswitch'

const ui = reactive({
  visible: true,
  activeTab: '0'
})

const form = reactive({
  publicVisible: true,
  notifications: false
})
</script>