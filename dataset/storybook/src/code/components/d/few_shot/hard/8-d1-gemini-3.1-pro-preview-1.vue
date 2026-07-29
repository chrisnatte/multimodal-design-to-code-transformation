<template>
  <Card class="w-full max-w-xl overflow-hidden shadow-sm border border-slate-200">
    <template #header>
      <div class="bg-slate-900 text-white p-8 flex flex-col items-center justify-center">
        <h2 class="text-2xl font-medium m-0">ProDesk X500</h2>
        <span class="text-slate-400 text-sm mt-2">Workstation Monitor</span>
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
          <TabPanel value="0" class="pt-4">
            <p class="m-0 mb-4 text-slate-700 leading-relaxed">
              Der ProDesk X500 ist ein professioneller Workstation-Monitor mit 32 Zoll IPS-Display und einer Auflösung von 4K UHD. Entwickelt für kreative Profis und Entwickler, die höchste Farbtreue und ergonomisches Arbeiten benötigen.
            </p>
            <p class="m-0 mb-4 text-slate-500 text-sm leading-relaxed">
              Mit 99% sRGB-Abdeckung, werkseitig kalibriertem Panel und USB-C-Thunderbolt-Anschluss bietet er alles für anspruchsvolle Workloads.
            </p>
            <div class="flex flex-wrap gap-2">
              <Tag value="4K UHD" class="bg-blue-100 text-blue-800 border-none" />
              <Tag value="IPS-Panel" class="bg-green-100 text-green-800 border-none" />
              <Tag value="USB-C" class="bg-red-100 text-red-800 border-none" />
              <Tag value="99% sRGB" class="bg-orange-100 text-orange-800 border-none" />
              <Tag value="32 Zoll" class="bg-green-100 text-green-800 border-none" />
            </div>
          </TabPanel>
          <TabPanel value="1" class="pt-4">
            <p class="m-0 text-slate-700">Spezifikationen hier...</p>
          </TabPanel>
          <TabPanel value="2" class="pt-4">
            <p class="m-0 text-slate-700">Noch keine Bewertungen vorhanden.</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </template>
    <template #footer>
      <div class="flex justify-end gap-3 mt-2">
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