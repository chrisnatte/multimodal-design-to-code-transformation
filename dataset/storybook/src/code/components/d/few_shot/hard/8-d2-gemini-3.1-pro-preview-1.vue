<template>
  <Card class="w-full max-w-[536px] overflow-hidden rounded-xl border border-surface-200 shadow-sm">
    <template #header>
      <div class="flex flex-col items-center justify-center bg-[#1a2b4c] px-4 py-10 text-white">
        <h2 class="m-0 text-xl font-medium">ProDesk X500</h2>
        <p class="m-0 mt-1 text-sm font-light text-surface-300">Workstation Monitor</p>
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
          <TabPanel value="0" class="px-0 py-4">
            <p class="m-0 mb-4 leading-relaxed text-surface-700">
              Der ProDesk X500 ist ein professioneller Workstation-Monitor mit 32 Zoll IPS-Display und einer Auflösung von 4K UHD. Entwickelt für kreative Profis und Entwickler, die höchste Farbtreue und ergonomisches Arbeiten benötigen.
            </p>
            <p class="m-0 mb-4 text-sm leading-relaxed text-surface-600">
              Mit 99% sRGB-Abdeckung, werkseitig kalibriertem Panel und USB-C-Thunderbolt-Anschluss bietet er alles für anspruchsvolle Workloads.
            </p>
            <div class="flex flex-wrap gap-2">
              <Tag value="4K UHD" severity="info" />
              <Tag value="IPS-Panel" severity="success" />
              <Tag value="USB-C" severity="danger" />
              <Tag value="99% sRGB" severity="warn" />
              <Tag value="32 Zoll" severity="success" />
            </div>
          </TabPanel>
          <TabPanel value="1" class="px-0 py-4">
            <p class="m-0 text-surface-600">Spezifikationen hier...</p>
          </TabPanel>
          <TabPanel value="2" class="px-0 py-4">
            <p class="m-0 text-surface-600">Noch keine Bewertungen vorhanden.</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </template>
    <template #footer>
      <div class="flex justify-end gap-2 pt-2">
        <Button label="Merken" severity="secondary" />
        <Button label="In den Warenkorb" icon="pi pi-cart-plus" severity="primary" />
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import Card from 'primevue/card'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
import Tag from 'primevue/tag'
import Button from 'primevue/button'
</script>