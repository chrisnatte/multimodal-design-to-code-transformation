<template>
  <div class="flex flex-col gap-2.5 p-6">
    <Card>
      <template #header>
        <div class="flex flex-col gap-1 items-center">
          <span>ProDesk X500</span>
          <span class="text-xs">Workstation Monitor</span>
        </div>
      </template>
      <template #content>
        <Tabs value="0">
          <TabList>
            <Tab value="0">Beschreibung</Tab>
            <Tab value="1">Spezifikationen</Tab>
            <Tab value="2">Bewertungen</Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="0">
              <span class="text-sm">Noch keine Bewertungen vorhanden.</span>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </template>
      <template #footer>
        <Button label="Merken" severity="secondary" />
        <Button label="In den Warenkorb" />
      </template>
    </Card>
  </div>
</template>

<script setup>
import Button from 'primevue/button'
import Card from 'primevue/card'
import Tab from 'primevue/tab'
import TabList from 'primevue/tablist'
import TabPanel from 'primevue/tabpanel'
import TabPanels from 'primevue/tabpanels'
import Tabs from 'primevue/tabs'
</script>
