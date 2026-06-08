<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-black">
    <Dialog v-model:visible="ui.dialogVisible" modal :closable="false" :style="{ width: '42rem' }">
      <template #container>
        <div class="flex flex-col bg-white rounded-xl">
          <div class="flex items-center justify-between p-4">
            <h2 class="text-lg font-semibold">Neues Projekt</h2>
            <div class="flex flex-col gap-2">
              <Button icon="pi pi-times" severity="secondary" text @click="ui.dialogVisible = false" />
            </div>
          </div>

          <div class="flex items-center gap-2 px-4 pb-4">
            <Tabs value="0" class="w-full">
              <TabList>
                <Tab value="0">1 - Allgemein</Tab>
                <Tab value="1">2 - Zeitplan</Tab>
                <Tab value="2">3 - Einstellungen</Tab>
              </TabList>
              <TabPanels class="pt-3 px-1 pb-4">
                <TabPanel value="0">
                  <div class="flex flex-col items-center gap-4">
                    <div class="flex items-center justify-between w-full px-1">
                      <div class="flex flex-col">
                        <span class="text-sm font-semibold">Öffentlich sichtbar</span>
                        <span class="text-xs font-light">Für alle Teammitglieder</span>
                      </div>
                      <ToggleSwitch v-model="form.publicVisible" />
                    </div>
                    <div class="flex items-center justify-between w-full px-1">
                      <div class="flex flex-col">
                        <span class="text-sm font-semibold">Benachrichtigungen</span>
                        <span class="text-xs font-light">Bei Statusänderungen</span>
                      </div>
                      <ToggleSwitch v-model="form.notifications" />
                    </div>
                  </div>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </div>

          <div class="flex justify-end gap-2 px-4 pb-4">
            <Button label="Abbrechen" severity="secondary" @click="ui.dialogVisible = false" />
            <Button label="Weiter" />
          </div>
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
  dialogVisible: true
})

const form = reactive({
  publicVisible: true,
  notifications: false
})
</script>