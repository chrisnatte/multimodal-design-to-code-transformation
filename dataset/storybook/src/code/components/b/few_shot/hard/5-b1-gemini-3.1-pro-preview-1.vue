<template>
  <Dialog v-model:visible="visible" header="Neues Projekt" modal class="w-full max-w-lg">
    <Tabs value="0">
      <TabList>
        <Tab value="0">1 - Allgemein</Tab>
        <Tab value="1">2 - Zeitplan</Tab>
        <Tab value="2">3 - Einstellungen</Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0" class="flex flex-col gap-4 px-1 pb-4 pt-3">
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
        </TabPanel>
      </TabPanels>
    </Tabs>
    <template #footer>
      <Button label="Abbrechen" severity="secondary" @click="visible = false" />
      <Button label="Weiter" severity="primary" />
    </template>
  </Dialog>
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
  const publicVisible = ref(true)
  const notifications = ref(false)
</script>