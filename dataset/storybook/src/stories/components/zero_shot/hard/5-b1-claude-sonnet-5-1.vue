<template>
  <div class="w-full h-full flex items-center justify-center bg-black p-4">
    <div class="w-[512px] rounded-xl border border-slate-200 bg-white overflow-hidden">
      <!-- header -->
      <div class="flex items-center justify-between p-[17.5px]">
        <span class="text-[17.5px] font-semibold">Neues Projekt</span>
        <div class="flex flex-col gap-[7px]">
          <Button icon="pi pi-times" severity="secondary" text rounded @click="onClose" />
        </div>
      </div>

      <!-- content -->
      <div class="flex items-center gap-[7px] p-[17.5px] pt-0">
        <div class="flex-1 flex flex-col">
          <Tabs v-model:value="activeTab">
            <TabList>
              <Tab value="0">1 - Allgemein</Tab>
              <Tab value="1">2 - Zeitplan</Tab>
              <Tab value="2">3 - Einstellungen</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="0">
                <div class="flex flex-col gap-4 py-2">
                  <div class="flex items-center justify-between px-1">
                    <div class="flex flex-col">
                      <span class="text-sm font-semibold">Öffentlich sichtbar</span>
                      <span class="text-[10px] font-light">Für alle Teammitglieder</span>
                    </div>
                    <ToggleSwitch v-model="publicVisible" />
                  </div>
                  <div class="flex items-center justify-between px-1">
                    <div class="flex flex-col">
                      <span class="text-sm font-semibold">Benachrichtigungen</span>
                      <span class="text-[10px] font-light">Bei Statusänderungen</span>
                    </div>
                    <ToggleSwitch v-model="notifications" />
                  </div>
                </div>
              </TabPanel>
              <TabPanel value="1">
                <div class="py-2 text-sm">Zeitplan Inhalt</div>
              </TabPanel>
              <TabPanel value="2">
                <div class="py-2 text-sm">Einstellungen Inhalt</div>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>

      <!-- footer -->
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
  // close dialog logic
}

function onCancel() {
  // cancel action
}

function onNext() {
  // next step action
}
</script>