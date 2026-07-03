<template>
  <Card class="rounded-xl">
    <template #content>
      <div class="flex flex-col">
        <div class="flex flex-col items-center gap-2.5 p-2.5">
          <div class="flex flex-col items-center gap-1">
            <h3 class="text-[17.5px] font-medium">ProDesk X500</h3>
            <span class="text-xs font-light">Workstation Monitor</span>
          </div>
        </div>

        <div class="flex flex-col gap-2 px-1">
          <div class="flex flex-col">
            <Tabs v-model:value="form.activeTab">
              <TabList class="flex">
                <Tab value="beschreibung">Beschreibung</Tab>
                <Tab value="spezifikationen">Spezifikationen</Tab>
                <Tab value="bewertungen">Bewertungen</Tab>
              </TabList>
              <TabPanels>
                <TabPanel value="beschreibung">
                  <div class="p-4">Noch keine Bewertungen vorhanden.</div>
                </TabPanel>
                <TabPanel value="spezifikationen">
                  <div class="p-4">Noch keine Bewertungen vorhanden.</div>
                </TabPanel>
                <TabPanel value="bewertungen">
                  <div class="p-4">Noch keine Bewertungen vorhanden.</div>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </div>

          <div class="flex justify-end gap-2 px-4 py-2">
            <Button label="Merken" severity="secondary" />
            <Button label="In den Warenkorb" icon="pi pi-shopping-cart" iconPos="left" />
          </div>
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup>
import { reactive } from 'vue'
import Card from 'primevue/card'
import Button from 'primevue/button'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'

const form = reactive({
  activeTab: 'beschreibung'
})
</script>