<template>
  <div class="flex h-[768px] w-[768px] items-center justify-center bg-black">
    <Dialog
      v-model:visible="dialogVisible"
      modal
      append-to="self"
      :closable="false"
      :draggable="false"
      :pt="{
        root: 'w-[512px] !rounded-xl',
        header: '!p-0',
        content: '!p-0',
        footer: '!p-0',
        mask: '!bg-black',
      }"
    >
      <template #header>
        <div class="flex w-full items-center justify-between px-[17.5px] py-[17.5px]">
          <span class="text-[17.5px] font-semibold">Neues Projekt</span>
          <div class="flex flex-col gap-[7px]">
            <Button
              icon="pi pi-times"
              aria-label="Dialog schließen"
              severity="secondary"
              variant="text"
              @click="dialogVisible = false"
            />
          </div>
        </div>
      </template>

      <div class="flex gap-[7px] px-[17.5px] pb-[17.5px]">
        <Tabs v-model:value="activeTab" class="w-full">
          <TabList>
            <Tab value="0">1 - Allgemein</Tab>
            <Tab value="1">2 - Zeitplan</Tab>
            <Tab value="2">3 - Einstellungen</Tab>
          </TabList>
          <TabPanels class="px-1 pb-[15.75px] pt-[12.25px]">
            <TabPanel value="0">
              <div class="flex flex-col gap-4">
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
                  <ToggleSwitch v-model="notificationsEnabled" />
                </div>
              </div>
            </TabPanel>
            <TabPanel value="1" />
            <TabPanel value="2" />
          </TabPanels>
        </Tabs>
      </div>

      <template #footer>
        <div class="flex justify-end gap-[7px] px-[17.5px] pb-[17.5px]">
          <Button label="Abbrechen" severity="secondary" @click="dialogVisible = false" />
          <Button label="Weiter" />
        </div>
      </template>
    </Dialog>
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
const activeTab = ref('0')
const publicVisible = ref(true)
const notificationsEnabled = ref(false)
</script>