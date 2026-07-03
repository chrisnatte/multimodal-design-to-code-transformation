<template>
  <div class="min-h-screen w-full bg-black flex flex-col items-center justify-center p-4">
    <Dialog v-model:visible="state.visible" :modal="true" :closable="false" :draggable="false" :style="{ width: '42rem' }">
      <template #header>
        <div class="w-full flex items-center justify-between p-4">
          <span class="text-lg font-semibold">Neues Projekt</span>
          <div class="flex flex-col gap-2">
            <Button icon="pi pi-times" severity="secondary" variant="text" aria-label="Schließen" @click="state.visible = false" />
          </div>
        </div>
      </template>

      <div class="flex gap-2 px-4 pb-4">
        <div class="flex flex-col w-full">
          <Tabs v-model:value="state.activeTab">
            <TabList>
              <Tab value="0">1 - Allgemein</Tab>
              <Tab value="1">2 - Zeitplan</Tab>
              <Tab value="2">3 - Einstellungen</Tab>
            </TabList>
            <TabPanels class="pt-3 px-1 pb-4">
              <TabPanel value="0">
                <div class="flex flex-col items-center gap-4">
                  <div class="w-full flex items-center justify-between px-1">
                    <div class="flex flex-col">
                      <span class="text-sm font-semibold">Öffentlich sichtbar</span>
                      <span class="text-xs font-light">Für alle Teammitglieder</span>
                    </div>
                    <ToggleSwitch v-model="state.publicVisible" />
                  </div>

                  <div class="w-full flex items-center justify-between px-1">
                    <div class="flex flex-col">
                      <span class="text-sm font-semibold">Benachrichtigungen</span>
                      <span class="text-xs font-light">Bei Statusänderungen</span>
                    </div>
                    <ToggleSwitch v-model="state.notifications" />
                  </div>
                </div>
              </TabPanel>
              <TabPanel value="1" />
              <TabPanel value="2" />
            </TabPanels>
          </Tabs>
        </div>
      </div>

      <template #footer>
        <div class="w-full flex justify-end gap-2 px-4 pb-4">
          <Button label="Abbrechen" severity="secondary" @click="state.visible = false" />
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

const state = reactive({
  visible: true,
  activeTab: '0',
  publicVisible: true,
  notifications: false
})
</script>