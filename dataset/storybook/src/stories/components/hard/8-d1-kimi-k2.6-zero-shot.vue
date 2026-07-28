<template>
  <div class="w-[488px] rounded-xl bg-white border border-gray-100 shadow-sm overflow-hidden flex flex-col">
    <div class="h-[124px] bg-[#172539] flex flex-col items-center justify-center shrink-0">
      <div class="flex flex-col items-center gap-1">
        <span class="text-[17.5px] font-medium text-white leading-tight">ProDesk X500</span>
        <span class="text-xs font-light text-gray-400 leading-tight">Workstation Monitor</span>
      </div>
    </div>

    <div class="flex flex-col gap-[7px] px-1">
      <Tabs v-model:value="activeTab" class="w-full">
        <TabList class="border-b border-[#e2e8f0]">
          <Tab value="0" class="text-sm font-bold">Beschreibung</Tab>
          <Tab value="1" class="text-sm font-bold">Spezifikationen</Tab>
          <Tab value="2" class="text-sm font-bold">Bewertungen</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0">
            <div class="flex flex-col gap-2 px-4 py-3">
              <p class="text-sm text-slate-700 leading-relaxed">
                Der ProDesk X500 ist ein professioneller  Workstation-Monitor mit 32 Zoll IPS-Display und einer Auflösung von 4K UHD. Entwickelt für kreative Profis und Entwickler, die höchste Farbtreue und ergonomisches Arbeiten benötigen.
              </p>
              <p class="text-sm text-slate-500 leading-relaxed">
                Mit 99% sRGB-Abdeckung, werkseitig kalibriertem Panel und USB-C-Thunderbolt-Anschluss bietet er alles für anspruchsvolle Workloads.
              </p>
              <div class="flex flex-wrap gap-2 mt-1">
                <Tag value="4K UHD" class="!bg-sky-100 !text-sky-700 text-xs" />
                <Tag value="IPS-Panel" severity="success" class="text-xs" />
                <Tag value="USB-C" class="!bg-red-100 !text-red-700 text-xs" />
                <Tag value="99% sRGB" severity="warning" class="text-xs" />
                <Tag value="32 Zoll" class="!bg-teal-100 !text-teal-700 text-xs" />
              </div>
            </div>
          </TabPanel>
          <TabPanel value="1">
            <div class="px-4 py-3">
              <p class="text-sm text-slate-600">Details zu Anschlüssen, Abmessungen und Energieeffizienzklasse.</p>
            </div>
          </TabPanel>
          <TabPanel value="2">
            <div class="px-4 py-3">
              <p class="text-sm text-slate-600">Noch keine Bewertungen vorhanden.</p>
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <div class="flex justify-end items-center gap-2 px-4 py-2">
        <Button label="Merken" severity="secondary" size="small" />
        <Button label="In den Warenkorb" icon="pi pi-cart-plus" severity="success" size="small" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Tag from 'primevue/tag'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'

const activeTab = ref('0')
</script>