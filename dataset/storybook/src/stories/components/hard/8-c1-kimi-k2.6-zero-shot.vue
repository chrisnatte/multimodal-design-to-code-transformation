<template>
  <div class="max-w-xl mx-auto rounded-2xl overflow-hidden bg-white shadow-lg">
    <div class="bg-slate-900 text-white text-center py-10 px-6">
      <h2 class="text-2xl font-medium">ProDesk X500</h2>
      <p class="text-slate-400 text-sm mt-1">Workstation Monitor</p>
    </div>

    <Tabs v-model:value="activeTab">
      <TabList class="px-6">
        <Tab value="0">Beschreibung</Tab>
        <Tab value="1">Spezifikationen</Tab>
        <Tab value="2">Bewertungen</Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">
          <div class="px-6 py-5">
            <p class="text-gray-700 leading-relaxed mb-3">
              Der ProDesk X500 ist ein professioneller Workstation-Monitor mit 32 Zoll IPS-Display und einer Auflösung von 4K UHD. Entwickelt für kreative Profis und Entwickler, die höchste Farbtreue und ergonomisches Arbeiten benötigen.
            </p>
            <p class="text-gray-500 text-sm leading-relaxed mb-5">
              Mit 99% sRGB-Abdeckung, werkseitig kalibriertem Panel und USB-C-Thunderbolt-Anschluss bietet er alles für anspruchsvolle Workloads.
            </p>
            <div class="flex flex-wrap gap-2 mb-6">
              <Tag class="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">4K UHD</Tag>
              <Tag class="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">IPS-Panel</Tag>
              <Tag class="bg-red-100 text-red-700 text-xs font-semibold px-3 py-1 rounded-full">USB-C</Tag>
              <Tag class="bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full">99% sRGB</Tag>
              <Tag class="bg-teal-100 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full">32 Zoll</Tag>
            </div>
            <div class="flex justify-end gap-3">
              <Button label="Merken" severity="secondary" size="small" class="bg-slate-100 text-slate-700 border-none" />
              <Button label="In den Warenkorb" icon="pi pi-shopping-cart" severity="success" size="small" />
            </div>
          </div>
        </TabPanel>
        <TabPanel value="1">
          <div class="px-6 py-5 text-gray-700">Spezifikationen</div>
        </TabPanel>
        <TabPanel value="2">
          <div class="px-6 py-5 text-gray-700">Bewertungen</div>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
import Tag from 'primevue/tag'
import Button from 'primevue/button'

const activeTab = ref('0')
</script>