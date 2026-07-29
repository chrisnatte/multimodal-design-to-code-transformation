<template>
  <div class="flex h-[768px] w-[768px] flex-col bg-white">
    <div class="flex flex-1 flex-col items-center justify-center bg-black">
      <Dialog
        v-model:visible="dialogVisible"
        modal
        append-to="self"
        :draggable="false"
        :style="{ width: '512px' }"
        :pt="{
          root: 'rounded-xl border',
          header: 'flex items-center justify-between px-[17.5px] py-[17.5px]',
          content: '!px-[17.5px] !pb-[17.5px] !pt-0',
          footer: 'flex justify-end gap-[7px] px-[17.5px] pb-[17.5px] pt-0',
        }"
      >
        <template #header>
          <span class="text-[17.5px] font-semibold">Neues Projekt</span>
        </template>

        <Tabs v-model:value="activeTab" class="w-full">
          <TabList>
            <Tab value="general" class="text-sm font-bold">1 - Allgemein</Tab>
            <Tab value="schedule" class="text-sm font-bold">2 - Zeitplan</Tab>
            <Tab value="settings" class="text-sm font-bold">3 - Einstellungen</Tab>
          </TabList>

          <TabPanels class="px-1 pb-[15.75px] pt-[12.25px]">
            <TabPanel value="general">
              <div class="flex flex-col justify-center gap-4">
                <div class="flex items-center justify-between px-1">
                  <div class="flex flex-col">
                    <span class="text-sm font-semibold">Öffentlich sichtbar</span>
                    <span class="text-[10px] font-light">Für alle Teammitglieder</span>
                  </div>
                  <ToggleSwitch v-model="isPublic" aria-label="Öffentlich sichtbar" />
                </div>

                <div class="flex items-center justify-between px-1">
                  <div class="flex flex-col">
                    <span class="text-sm font-semibold">Benachrichtigungen</span>
                    <span class="text-[10px] font-light">Bei Statusänderungen</span>
                  </div>
                  <ToggleSwitch v-model="notificationsEnabled" aria-label="Benachrichtigungen" />
                </div>
              </div>
            </TabPanel>

            <TabPanel value="schedule" />
            <TabPanel value="settings" />
          </TabPanels>
        </Tabs>

        <template #footer>
          <Button label="Abbrechen" severity="secondary" />
          <Button label="Weiter" />
        </template>
      </Dialog>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import Tab from 'primevue/tab'
import TabList from 'primevue/tablist'
import TabPanel from 'primevue/tabpanel'
import TabPanels from 'primevue/tabpanels'
import Tabs from 'primevue/tabs'
import ToggleSwitch from 'primevue/toggleswitch'

const dialogVisible = ref(true)
const activeTab = ref('general')
const isPublic = ref(true)
const notificationsEnabled = ref(false)
</script>