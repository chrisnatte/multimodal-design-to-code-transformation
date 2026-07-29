<template>
  <div class="flex justify-center bg-white p-6">
    <Card
      :pt="{
        body: '!p-0 !gap-0',
        content: '!p-0',
        footer: '!p-0',
      }"
      class="w-[488px]"
    >
      <template #header>
        <div class="flex flex-col items-center justify-center gap-2.5 p-2.5">
          <div class="flex flex-col items-center gap-1">
            <span class="text-lg font-medium">ProDesk X500</span>
            <span class="text-xs font-light text-gray-500">Workstation Monitor</span>
          </div>
        </div>
      </template>
      <template #content>
        <div class="flex flex-col gap-2 px-1">
          <Tabs value="0">
            <TabList>
              <Tab value="0">Beschreibung</Tab>
              <Tab value="1">Spezifikationen</Tab>
              <Tab value="2">Bewertungen</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="0">
                <p class="text-sm">Keine Beschreibung vorhanden.</p>
              </TabPanel>
              <TabPanel value="1">
                <p class="text-sm">Keine Spezifikationen vorhanden.</p>
              </TabPanel>
              <TabPanel value="2">
                <p class="text-sm">Noch keine Bewertungen vorhanden.</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </template>
      <template #footer>
        <div class="flex items-center justify-end gap-2 px-4 py-2">
          <Button label="Merken" severity="secondary" />
          <Button label="In den Warenkorb" icon="pi pi-cart-plus" severity="primary" />
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
  import Card from 'primevue/card'
  import Button from 'primevue/button'
  import Tabs from 'primevue/tabs'
  import TabList from 'primevue/tablist'
  import Tab from 'primevue/tab'
  import TabPanels from 'primevue/tabpanels'
  import TabPanel from 'primevue/tabpanel'
</script>