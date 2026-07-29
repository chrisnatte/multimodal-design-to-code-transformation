<template>
  <Card
    :pt="{
      root: 'w-[488px] overflow-hidden border border-slate-200 shadow-sm',
      body: '!p-0',
      content: '!p-0',
    }"
  >
    <template #header>
      <div class="flex h-[124px] flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 text-white">
        <h1 class="text-lg font-medium leading-6">ProDesk X500</h1>
        <p class="text-xs text-slate-400">Workstation Monitor</p>
      </div>
    </template>

    <template #content>
      <Tabs :value="activeTab" @update:value="activeTab = $event">
        <TabList class="px-1">
          <Tab value="description" class="text-sm font-semibold">Beschreibung</Tab>
          <Tab value="specifications" class="text-sm font-semibold">Spezifikationen</Tab>
          <Tab value="reviews" class="text-sm font-semibold">Bewertungen</Tab>
        </TabList>

        <TabPanels>
          <TabPanel value="description" class="!px-5 !pt-3 !pb-2">
            <div class="flex flex-col gap-2">
              <p class="m-0 text-sm leading-6 text-slate-700">
                Der ProDesk X500 ist ein professioneller Workstation-Monitor mit 32 Zoll IPS-Display und einer Auflösung von 4K UHD. Entwickelt für kreative Profis und Entwickler, die höchste Farbtreue und ergonomisches Arbeiten benötigen.
              </p>
              <p class="m-0 text-xs leading-5 text-slate-500">
                Mit 99% sRGB-Abdeckung, werkseitig kalibriertem Panel und USB-C-Thunderbolt-Anschluss bietet er alles für anspruchsvolle Workloads.
              </p>
              <div class="flex flex-wrap gap-2">
                <Tag value="4K UHD" severity="info" class="!text-xs" />
                <Tag value="IPS-Panel" severity="success" class="!text-xs" />
                <Tag value="USB-C" severity="danger" class="!text-xs" />
                <Tag value="99% sRGB" severity="warn" class="!text-xs" />
                <Tag value="32 Zoll" severity="success" class="!text-xs" />
              </div>
              <div class="flex justify-end gap-2 pt-4">
                <Button label="Merken" severity="secondary" variant="text" size="small" />
                <Button label="In den Warenkorb" icon="pi pi-shopping-cart" size="small" />
              </div>
            </div>
          </TabPanel>

          <TabPanel value="specifications" class="!px-5 !py-4">
            <div class="grid grid-cols-2 gap-y-2 text-sm text-slate-700">
              <span class="font-medium">Display</span>
              <span>32 Zoll IPS</span>
              <span class="font-medium">Auflösung</span>
              <span>4K UHD</span>
              <span class="font-medium">Anschluss</span>
              <span>USB-C</span>
            </div>
          </TabPanel>

          <TabPanel value="reviews" class="!px-5 !py-4">
            <p class="m-0 text-sm text-slate-600">Noch keine Bewertungen vorhanden.</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </template>
  </Card>
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
import Tag from 'primevue/tag'

const activeTab = ref('description')
</script>