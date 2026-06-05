<template>
  <div class="bg-gray-100 min-h-screen p-6 flex items-start justify-center">
    <div class="w-[520px] bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div class="h-36 bg-gradient-to-br from-[#1b2040] to-[#123d6b] flex flex-col items-center justify-center gap-1 text-center">
        <h2 class="text-white text-[34px] leading-none font-semibold tracking-tight">ProDesk X500</h2>
        <p class="text-slate-300 text-xl">Workstation Monitor</p>
      </div>

      <div class="px-5 pt-4">
        <Tabs v-model:value="state.activeTab">
          <TabList class="border-b border-gray-200">
            <Tab value="beschreibung" class="font-semibold">Beschreibung</Tab>
            <Tab value="spezifikationen" class="font-semibold">Spezifikationen</Tab>
            <Tab value="bewertungen" class="font-semibold">Bewertungen</Tab>
          </TabList>

          <TabPanels>
            <TabPanel value="beschreibung" class="px-0">
              <div class="px-4 py-4 flex flex-col gap-3">
                <p class="text-[34px] leading-tight text-slate-700">
                  Der ProDesk X500 ist ein professioneller&nbsp; Workstation-Monitor mit 32 Zoll IPS-Display und einer Auflösung von 4K&nbsp; UHD. Entwickelt für kreative Profis und Entwickler, die höchste Farbtreue und ergonomisches Arbeiten benötigen.
                </p>
                <p class="text-[29px] leading-tight text-slate-500">
                  Mit 99% sRGB-Abdeckung, werkseitig kalibriertem Panel und USB-C-Thunderbolt-Anschluss bietet er alles für anspruchsvolle Workloads.
                </p>
                <div class="flex flex-wrap gap-2">
                  <Tag value="4K UHD" class="!bg-sky-100 !text-sky-700 !border-0 !font-semibold" />
                  <Tag value="IPS-Panel" class="!bg-emerald-100 !text-emerald-700 !border-0 !font-semibold" />
                  <Tag value="USB-C" class="!bg-red-100 !text-red-600 !border-0 !font-semibold" />
                  <Tag value="99% sRGB" class="!bg-orange-100 !text-orange-600 !border-0 !font-semibold" />
                  <Tag value="32 Zoll" class="!bg-emerald-100 !text-emerald-700 !border-0 !font-semibold" />
                </div>
              </div>
            </TabPanel>

            <TabPanel value="spezifikationen" class="px-0">
              <div class="px-4 py-4 text-slate-500 text-sm">Technische Daten folgen in Kürze.</div>
            </TabPanel>

            <TabPanel value="bewertungen" class="px-0">
              <div class="px-4 py-4 text-slate-500 text-sm">Noch keine Bewertungen vorhanden.</div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>

      <div class="flex justify-end gap-2 px-4 py-2">
        <Button label="Merken" severity="secondary" />
        <Button label="In den Warenkorb" icon="pi pi-shopping-cart" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Button from 'primevue/button'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
import Tag from 'primevue/tag'

const state = reactive({
  activeTab: 'beschreibung'
})
</script>