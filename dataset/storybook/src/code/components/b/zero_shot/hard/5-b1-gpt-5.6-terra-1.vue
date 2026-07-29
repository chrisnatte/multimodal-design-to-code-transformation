<template>
  <div class="flex h-[768px] w-[768px] items-center justify-center bg-black">
    <Dialog
      v-model:visible="visible"
      modal
      :draggable="false"
      class="w-[512px]"
      :pt="{
        header: { class: 'px-[17.5px] py-[17.5px]' },
        content: { class: 'px-[17.5px] pb-[17.5px]' },
        footer: { class: 'px-[17.5px] pb-[17.5px] pt-0' }
      }"
    >
      <template #header>
        <span class="text-[17.5px] font-semibold">Neues Projekt</span>
      </template>

      <Tabs v-model:value="activeTab" class="w-full">
        <TabList>
          <Tab value="0" class="text-sm font-bold">1 - Allgemein</Tab>
          <Tab value="1" class="text-sm font-bold">2 - Zeitplan</Tab>
          <Tab value="2" class="text-sm font-bold">3 - Einstellungen</Tab>
        </TabList>

        <TabPanels class="px-1 pt-[12.25px] pb-[15.75px]">
          <TabPanel value="0">
            <div class="flex flex-col gap-4">
              <div class="flex items-center justify-between px-1">
                <div class="flex flex-col">
                  <span class="text-sm font-semibold">Öffentlich sichtbar</span>
                  <span class="text-[10px] font-light">Für alle Teammitglieder</span>
                </div>
                <ToggleSwitch v-model="isPublic" />
              </div>

              <div class="flex items-center justify-between px-1">
                <div class="flex flex-col">
                  <span class="text-sm font-semibold">Benachrichtigungen</span>
                  <span class="text-[10px] font-light">Bei Statusänderungen</span>
                </div>
                <ToggleSwitch v-model="notificationsEnabled" />
              </div>
            </div>
          </TabPanel>

          <TabPanel value="1">
            <div class="min-h-[74px]"></div>
          </TabPanel>

          <TabPanel value="2">
            <div class="min-h-[74px]"></div>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <template #footer>
        <div class="flex justify-end gap-[7px]">
          <Button label="Abbrechen" severity="secondary" @click="visible = false" />
          <Button label="Weiter" />
        </div>
      </template>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
import ToggleSwitch from 'primevue/toggleswitch'

const visible = ref(true)
const activeTab = ref('0')
const isPublic = ref(true)
const notificationsEnabled = ref(false)
</script>