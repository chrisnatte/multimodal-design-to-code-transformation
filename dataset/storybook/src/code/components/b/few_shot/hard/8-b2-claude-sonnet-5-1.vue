<template>
  <div class="flex w-fit flex-col gap-2.5 bg-white p-6">
    <Card
      :pt="{
        body: '!p-0 gap-2',
        content: '!p-0',
      }"
    >
      <template #header>
        <div class="flex flex-col items-center justify-center gap-2.5 p-2.5">
          <div class="flex flex-col items-center gap-1">
            <span class="text-[17.5px] font-medium">ProDesk X500</span>
            <span class="text-xs font-light">Workstation Monitor</span>
          </div>
        </div>
      </template>
      <template #content>
        <div class="flex flex-col gap-1.5 px-1">
          <Tabs value="0">
            <TabList>
              <Tab value="0">Beschreibung</Tab>
              <Tab value="1">Spezifikationen</Tab>
              <Tab value="2">Bewertungen</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="0">
                <p class="m-0 text-sm">Noch keine Beschreibung vorhanden.</p>
              </TabPanel>
              <TabPanel value="1">
                <p class="m-0 text-sm">Noch keine Spezifikationen vorhanden.</p>
              </TabPanel>
              <TabPanel value="2">
                <p class="m-0 text-sm">Noch keine Bewertungen vorhanden.</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
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