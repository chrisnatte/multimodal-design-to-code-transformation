<template>
  <Dialog v-model:visible="_state.n31_1543Visible" :modal="true">
    <template #header>
      <div class="flex p-[18px] items-center justify-between">
        <span class="font-semibold">Neues Projekt</span>
        <div class="flex flex-col gap-[7px]">
          <Button severity="secondary" variant="text" />
        </div>
      </div>
    </template>
    <div class="flex gap-[7px] px-[18px] pb-[18px] items-center">
      <Tabs value="0">
        <TabList>
          <Tab value="0">1 - Allgemein</Tab>
          <Tab value="1">2 - Zeitplan</Tab>
          <Tab value="2">3 - Einstellungen</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0">
            <div class="flex px-1 items-center justify-between">
              <div class="flex flex-col">
                <span class="text-sm font-semibold">Öffentlich sichtbar</span>
                <span>Für alle Teammitglieder</span>
              </div>
              <ToggleSwitch v-model="_state.n31_2021" />
            </div>
            <div class="flex px-1 items-center justify-between">
              <div class="flex flex-col">
                <span class="text-sm font-semibold">Benachrichtigungen</span>
                <span>Bei Statusänderungen</span>
              </div>
              <ToggleSwitch v-model="_state.n31_2053" />
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
    <template #footer>
      <div class="flex gap-[7px] px-[18px] pb-[18px] justify-end">
        <Button label="Abbrechen" severity="secondary" />
        <Button label="Weiter" />
      </div>
    </template>
  </Dialog>
</template>

<script setup>
import { reactive } from 'vue'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import Tab from 'primevue/tab'
import TabList from 'primevue/tablist'
import TabPanel from 'primevue/tabpanel'
import TabPanels from 'primevue/tabpanels'
import Tabs from 'primevue/tabs'
import ToggleSwitch from 'primevue/toggleswitch'

const _state = reactive({ n31_1543Visible: true, n31_2021: null, n31_2053: null })
</script>
