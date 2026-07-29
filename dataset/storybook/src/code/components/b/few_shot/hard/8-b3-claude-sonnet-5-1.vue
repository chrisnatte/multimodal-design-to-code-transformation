<template>
  <div class="flex justify-center p-6 bg-white">
    <Card
      :pt="{
        root: 'w-[488px]',
        body: '!p-0 !gap-0',
        content: '!p-0',
      }"
    >
      <template #header>
        <div class="flex flex-col items-center justify-center gap-2 p-6">
          <span class="text-lg font-medium">ProDesk X500</span>
          <span class="text-xs font-light">Workstation Monitor</span>
        </div>
      </template>
      <template #content>
        <Tabs value="0" class="px-1">
          <TabList>
            <Tab value="0">Beschreibung</Tab>
            <Tab value="1">Spezifikationen</Tab>
            <Tab value="2">Bewertungen</Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="0">
              <p class="m-0">Noch keine Beschreibung vorhanden.</p>
            </TabPanel>
            <TabPanel value="1">
              <p class="m-0">Noch keine Spezifikationen vorhanden.</p>
            </TabPanel>
            <TabPanel value="2">
              <p class="m-0">Noch keine Bewertungen vorhanden.</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </template>
      <template #footer>
        <div class="flex justify-end gap-2">
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