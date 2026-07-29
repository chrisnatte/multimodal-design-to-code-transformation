<template>
  <div class="flex w-[536px] flex-col gap-2.5 bg-white p-6">
    <Card
      class="w-[488px]"
      :pt="{
        body: 'flex flex-col !gap-0 !p-0',
        content: '!p-0',
        footer: '!p-0',
      }"
    >
      <template #header>
        <div class="flex h-[124px] flex-col items-center justify-center gap-2.5 p-2.5">
          <div class="flex w-[120px] flex-col items-center gap-1">
            <span class="text-[17.5px] font-medium">ProDesk X500</span>
            <span class="text-xs font-light">Workstation Monitor</span>
          </div>
        </div>
      </template>

      <template #content>
        <div class="flex flex-col gap-[7px] px-1">
          <div class="flex flex-col">
            <Tabs v-model:value="activeTab">
              <TabList>
                <Tab value="beschreibung">Beschreibung</Tab>
                <Tab value="spezifikationen">Spezifikationen</Tab>
                <Tab value="bewertungen">Bewertungen</Tab>
              </TabList>
              <TabPanels>
                <TabPanel value="beschreibung">
                  <p class="m-0">Noch keine Bewertungen vorhanden.</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </div>
        </div>
      </template>

      <template #footer>
        <div class="flex justify-end gap-2 px-5 py-2">
          <Button label="Merken" severity="secondary" />
          <Button label="In den Warenkorb" icon="pi pi-cart-plus" />
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Tab from 'primevue/tab'
import TabList from 'primevue/tablist'
import TabPanel from 'primevue/tabpanel'
import TabPanels from 'primevue/tabpanels'
import Tabs from 'primevue/tabs'

const activeTab = ref('beschreibung')
</script>