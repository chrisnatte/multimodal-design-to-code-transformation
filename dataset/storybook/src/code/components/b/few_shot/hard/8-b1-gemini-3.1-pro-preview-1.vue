<template>
  <div class="flex w-fit flex-col gap-2.5 bg-white p-6">
    <Card class="w-[488px] rounded-xl">
      <template #title>
        <div class="flex flex-col items-center gap-1 pt-2.5">
          <span class="text-[17.5px] font-medium">ProDesk X500</span>
          <span class="text-xs font-light">Workstation Monitor</span>
        </div>
      </template>
      <template #content>
        <div class="flex flex-col gap-[7px] px-1">
          <Tabs value="0">
            <TabList>
              <Tab value="0">Beschreibung</Tab>
              <Tab value="1">Spezifikationen</Tab>
              <Tab value="2">Bewertungen</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="0">
                <p class="px-4 py-3 text-sm">Noch keine Bewertungen vorhanden.</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </template>
      <template #footer>
        <div class="flex justify-end gap-2 px-4 py-2">
          <Button label="Merken" severity="secondary" />
          <Button label="In den Warenkorb" icon="pi pi-cart-plus" severity="primary" />
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
  import Card from 'primevue/card'
  import Tabs from 'primevue/tabs'
  import TabList from 'primevue/tablist'
  import Tab from 'primevue/tab'
  import TabPanels from 'primevue/tabpanels'
  import TabPanel from 'primevue/tabpanel'
  import Button from 'primevue/button'
</script>