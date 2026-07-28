<template>
  <div class="max-w-lg rounded-xl overflow-hidden shadow-md bg-white mx-auto">
    <!-- Header -->
    <div
      class="flex flex-col items-center justify-center gap-2 p-6 text-center"
      style="background: linear-gradient(135deg, #0f1c3f, #1a2b5c);"
    >
      <span class="text-white text-lg font-medium">ProDesk X500</span>
      <span class="text-gray-300 text-xs font-light">Workstation Monitor</span>
    </div>

    <!-- Body -->
    <div class="flex flex-col px-1">
      <Tabs value="0">
        <TabList>
          <Tab value="0">Beschreibung</Tab>
          <Tab value="1">Spezifikationen</Tab>
          <Tab value="2">Bewertungen</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0">
            <div class="flex flex-col gap-2 px-4 py-3">
              <p class="text-sm text-gray-700 leading-relaxed">
                Der ProDesk X500 ist ein professioneller Workstation-Monitor mit
                32 Zoll IPS-Display und einer Auflösung von 4K UHD. Entwickelt für
                kreative Profis und Entwickler, die höchste Farbtreue und
                ergonomisches Arbeiten benötigen.
              </p>
              <p class="text-sm text-gray-500 leading-relaxed">
                Mit 99% sRGB-Abdeckung, werkseitig kalibriertem Panel und USB-C
                Thunderbolt-Anschluss bietet er alles für anspruchsvolle Workloads.
              </p>
              <div class="flex flex-wrap gap-2 mt-2">
                <Tag value="4K UHD" severity="info" rounded></Tag>
                <Tag value="IPS-Panel" severity="success" rounded></Tag>
                <Tag value="USB-C" severity="danger" rounded></Tag>
                <Tag value="99% sRGB" severity="warning" rounded></Tag>
                <Tag value="32 Zoll" severity="success" rounded></Tag>
              </div>
            </div>
          </TabPanel>
          <TabPanel value="1">
            <div class="px-4 py-3">
              <p class="text-sm text-gray-700">Keine Spezifikationen vorhanden.</p>
            </div>
          </TabPanel>
          <TabPanel value="2">
            <div class="px-4 py-3">
              <p class="text-sm text-gray-700">Noch keine Bewertungen vorhanden.</p>
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <!-- Footer -->
      <div class="flex justify-end gap-2 px-4 py-2">
        <Button label="Merken" severity="secondary" />
        <Button label="In den Warenkorb" icon="pi pi-shopping-cart" severity="success" />
      </div>
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