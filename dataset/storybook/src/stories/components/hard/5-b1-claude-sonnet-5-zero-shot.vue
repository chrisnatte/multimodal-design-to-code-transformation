<template>
  <div class="flex items-center justify-center w-full h-screen bg-black">
    <div class="bg-white rounded-xl border border-slate-200 w-[512px]">
      <!-- Header -->
      <div class="flex items-center justify-between p-[17.5px]">
        <span class="text-lg font-semibold">Neues Projekt</span>
        <div class="flex flex-col gap-[7px]">
          <Button
            icon="pi pi-times"
            severity="secondary"
            text
            rounded
            @click="onClose"
          />
        </div>
      </div>

      <!-- Content -->
      <div class="flex items-center gap-[7px] px-[17.5px] pb-[17.5px]">
        <div class="flex-1 w-full">
          <Tabs v-model:value="activeTab">
            <TabList>
              <Tab value="0">1 - Allgemein</Tab>
              <Tab value="1">2 - Zeitplan</Tab>
              <Tab value="2">3 - Einstellungen</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="0">
                <div class="flex flex-col items-center gap-4 py-3 px-1">
                  <div class="flex items-center justify-between w-full px-1">
                    <div class="flex flex-col">
                      <span class="text-sm font-semibold">Öffentlich sichtbar</span>
                      <span class="text-[10px] font-light">Für alle Teammitglieder</span>
                    </div>
                    <ToggleSwitch v-model="publicVisible" />
                  </div>
                  <div class="flex items-center justify-between w-full px-1">
                    <div class="flex flex-col">
                      <span class="text-sm font-semibold">Benachrichtigungen</span>
                      <span class="text-[10px] font-light">Bei Statusänderungen</span>
                    </div>
                    <ToggleSwitch v-model="notifications" />
                  </div>
                </div>
              </TabPanel>
              <TabPanel value="1">
                <div class="p-4 text-sm">Zeitplan Inhalte</div>
              </TabPanel>
              <TabPanel value="2">
                <div class="p-4 text-sm">Einstellungen Inhalte</div>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>

      <!-- Footer -->
      <div class="flex justify-end gap-[7px] p-[17.5px]">
        <Button label="Abbrechen" severity="secondary" @click="onCancel" />
        <Button label="Weiter" severity="primary" @click="onNext" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
import ToggleSwitch from 'primevue/toggleswitch'

const activeTab = ref('0')
const publicVisible = ref(true)
const notifications = ref(false)

function onClose() {
  // handle dialog close
}

function onCancel() {
  // handle cancel action
}

function onNext() {
  // handle next action
}
</script>