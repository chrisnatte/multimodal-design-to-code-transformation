<template>
  <div class="flex justify-center p-8 bg-gray-50">
    <div class="w-[500px] rounded-lg overflow-hidden shadow-md bg-white">
      <!-- Header -->
      <div class="bg-gradient-to-r from-slate-900 to-blue-950 px-6 py-8 text-center">
        <h2 class="text-white text-2xl font-semibold m-0">ProDesk X500</h2>
        <p class="text-slate-300 text-sm mt-1">Workstation Monitor</p>
      </div>

      <!-- Tabs -->
      <Tabs value="0">
        <TabList>
          <Tab value="0">Beschreibung</Tab>
          <Tab value="1">Spezifikationen</Tab>
          <Tab value="2">Bewertungen</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0">
            <div class="px-6 py-4">
              <p class="text-gray-600 text-sm leading-relaxed">
                Der ProDesk X500 ist ein professioneller Workstation-Monitor mit
                32 Zoll IPS-Display und einer Auflösung von 4K UHD. Entwickelt für
                kreative Profis und Entwickler, die höchste Farbtreue und
                ergonomisches Arbeiten benötigen.
              </p>
              <p class="text-gray-600 text-sm leading-relaxed mt-3">
                Mit 99% sRGB-Abdeckung, werkseitig kalibriertem Panel und USB-C
                Thunderbolt-Anschluss bietet er alles für anspruchsvolle Workloads.
              </p>

              <div class="flex flex-wrap gap-2 mt-4">
                <Tag value="4K UHD" severity="info" rounded></Tag>
                <Tag value="IPS-Panel" severity="success" rounded></Tag>
                <Tag value="USB-C" severity="danger" rounded></Tag>
                <Tag value="99% sRGB" severity="warning" rounded></Tag>
                <Tag value="32 Zoll" severity="success" rounded></Tag>
              </div>

              <div class="flex justify-end gap-3 mt-6">
                <Button label="Merken" severity="secondary" outlined />
                <Button label="In den Warenkorb" icon="pi pi-shopping-cart" severity="success" />
              </div>
            </div>
          </TabPanel>
          <TabPanel value="1">
            <div class="px-6 py-4 text-sm text-gray-600">Spezifikationen folgen.</div>
          </TabPanel>
          <TabPanel value="2">
            <div class="px-6 py-4 text-sm text-gray-600">Bewertungen folgen.</div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
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