<template>
  <div class="flex min-h-screen items-center justify-center bg-black p-4">
    <Dialog
      v-model:visible="visible"
      header="Neues Projekt"
      modal
      :pt="{
        root: 'w-full max-w-[512px] rounded-xl border border-slate-200 bg-white',
        header: 'flex items-center justify-between p-[17.5px]',
        title: 'text-[17.5px] font-semibold',
        content: 'px-[17.5px] pb-[17.5px]',
        footer: 'flex justify-end gap-[7px] p-[17.5px]',
      }"
    >
      <Tabs v-model:value="activeTab">
        <TabList>
          <Tab value="1">1 - Allgemein</Tab>
          <Tab value="2">2 - Zeitplan</Tab>
          <Tab value="3">3 - Einstellungen</Tab>
        </TabList>
        <TabPanels class="px-1 pb-4 pt-3">
          <TabPanel value="1" class="flex flex-col gap-4">
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
              <ToggleSwitch v-model="notifications" />
            </div>
          </TabPanel>
          <TabPanel value="2"></TabPanel>
          <TabPanel value="3"></TabPanel>
        </TabPanels>
      </Tabs>
      <template #footer>
        <Button label="Abbrechen" severity="secondary" @click="visible = false" />
        <Button label="Weiter" severity="primary" />
      </template>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Dialog from 'primevue/dialog'
  import Tabs from 'primevue/tabs'
  import TabList from 'primevue/tablist'
  import Tab from 'primevue/tab'
  import TabPanels from 'primevue/tabpanels'
  import TabPanel from 'primevue/tabpanel'
  import ToggleSwitch from 'primevue/toggleswitch'
  import Button from 'primevue/button'

  const visible = ref(true)
  const activeTab = ref('1')
  const isPublic = ref(true)
  const notifications = ref(false)
</script>