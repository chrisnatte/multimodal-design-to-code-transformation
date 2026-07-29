<template>
  <Card
    :pt="{
      root: 'w-full max-w-[488px] overflow-hidden border border-gray-200 shadow-sm',
      body: '!p-0',
      content: '!p-0',
    }"
  >
    <template #header>
      <div class="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-900 px-5 py-10 text-center text-white">
        <h1 class="text-lg font-medium">ProDesk X500</h1>
        <p class="text-xs text-slate-400">Workstation Monitor</p>
      </div>
    </template>

    <template #content>
      <Tabs v-model:value="activeTab">
        <TabList class="px-1">
          <Tab value="description">Beschreibung</Tab>
          <Tab value="specifications">Spezifikationen</Tab>
          <Tab value="reviews">Bewertungen</Tab>
        </TabList>

        <TabPanels>
          <TabPanel value="description" class="!px-5 !py-3">
            <p class="text-sm leading-6 text-slate-700">
              Der ProDesk X500 ist ein professioneller Workstation-Monitor mit 32 Zoll IPS-Display und einer
              Auflösung von 4K UHD. Entwickelt für kreative Profis und Entwickler, die höchste Farbtreue und
              ergonomisches Arbeiten benötigen.
            </p>
            <p class="mt-2 text-xs leading-5 text-slate-500">
              Mit 99% sRGB-Abdeckung, werkseitig kalibriertem Panel und USB-C-Thunderbolt-Anschluss bietet er alles
              für anspruchsvolle Workloads.
            </p>

            <div class="mt-2 flex flex-wrap gap-2">
              <Tag value="4K UHD" severity="info" />
              <Tag value="IPS-Panel" severity="success" />
              <Tag value="USB-C" severity="danger" />
              <Tag value="99% sRGB" severity="warn" />
              <Tag value="32 Zoll" severity="success" />
            </div>

            <div class="mt-6 flex justify-end gap-2">
              <Button label="Merken" severity="secondary" />
              <Button label="In den Warenkorb" icon="pi pi-shopping-cart" />
            </div>
          </TabPanel>

          <TabPanel value="specifications" class="!px-5 !py-3">
            <p class="text-sm text-slate-600">Technische Spezifikationen</p>
          </TabPanel>

          <TabPanel value="reviews" class="!px-5 !py-3">
            <p class="text-sm text-slate-600">Noch keine Bewertungen vorhanden.</p>
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