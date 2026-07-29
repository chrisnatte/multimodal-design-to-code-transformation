<template>
  <Dialog
    v-model:visible="isDialogVisible"
    header="Neues Projekt"
    modal
    :pt="{
      root: 'w-full max-w-xl',
      content: '!p-0',
    }"
  >
    <Tabs value="0">
      <TabList>
        <Tab value="0">1 - Allgemein</Tab>
        <Tab value="1">2 - Zeitplan</Tab>
        <Tab value="2">3 - Einstellungen</Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">
          <div class="flex flex-col gap-4">
            <div class="flex items-center justify-between">
              <div class="flex flex-col">
                <span class="text-sm font-semibold">Öffentlich sichtbar</span>
                <span class="text-xs font-light text-gray-500">Für alle Teammitglieder</span>
              </div>
              <ToggleSwitch v-model="isPublic" />
            </div>
            <div class="flex items-center justify-between">
              <div class="flex flex-col">
                <span class="text-sm font-semibold">Benachrichtigungen</span>
                <span class="text-xs font-light text-gray-500">Bei Statusänderungen</span>
              </div>
              <ToggleSwitch v-model="notifications" />
            </div>
          </div>
        </TabPanel>
        <TabPanel value="1">
          <p class="text-sm text-gray-500">Zeitplan Inhalte</p>
        </TabPanel>
        <TabPanel value="2">
          <p class="text-sm text-gray-500">Einstellungen Inhalte</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
    <template #footer>
      <Button label="Abbrechen" severity="secondary" />
      <Button label="Weiter" severity="primary" />
    </template>
  </Dialog>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Dialog from 'primevue/dialog'
  import Button from 'primevue/button'
  import Tabs from 'primevue/tabs'
  import TabList from 'primevue/tablist'
  import Tab from 'primevue/tab'
  import TabPanels from 'primevue/tabpanels'
  import TabPanel from 'primevue/tabpanel'
  import ToggleSwitch from 'primevue/toggleswitch'

  const isDialogVisible = ref(true)
  const isPublic = ref(true)
  const notifications = ref(false)
</script>