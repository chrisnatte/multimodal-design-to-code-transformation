<template>
  <div class="min-h-screen bg-gray-100 p-6 flex items-start justify-center">
    <Card class="w-full max-w-[720px] rounded-xl overflow-hidden shadow-sm border border-gray-200">
      <template #content>
        <div class="flex flex-col">
          <div class="h-44 bg-gradient-to-br from-[#1b1f3b] to-[#0d3a63] flex items-center justify-center text-center">
            <div class="flex flex-col gap-1">
              <h2 class="text-white text-[36px] leading-tight font-medium">ProDesk X500</h2>
              <p class="text-white/50 text-[24px] font-light">Workstation Monitor</p>
            </div>
          </div>

          <div class="flex flex-col px-1">
            <Tabs v-model:value="state.activeTab" class="w-full">
              <TabList class="border-b border-gray-200 px-4">
                <Tab value="beschreibung" class="font-bold">Beschreibung</Tab>
                <Tab value="spezifikationen" class="font-bold">Spezifikationen</Tab>
                <Tab value="bewertungen" class="font-bold">Bewertungen</Tab>
              </TabList>

              <TabPanels>
                <TabPanel value="beschreibung" class="px-4 py-4">
                  <div class="flex flex-col gap-3">
                    <p class="text-[34px] leading-[1.5] text-slate-700">
                      Der ProDesk X500 ist ein professioneller&nbsp; Workstation-Monitor mit 32 Zoll IPS-Display und einer Auflösung von 4K&nbsp; UHD. Entwickelt für kreative Profis und Entwickler, die höchste&nbsp; Farbtreue und ergonomisches Arbeiten benötigen.
                    </p>
                    <p class="text-[28px] leading-[1.5] text-slate-500">
                      Mit 99% sRGB-Abdeckung, werkseitig kalibriertem Panel und USB-C-Thunderbolt-Anschluss bietet er alles für anspruchsvolle Workloads.
                    </p>
                    <div class="flex flex-wrap gap-2">
                      <span class="px-2 py-1 rounded-lg bg-sky-100 text-sky-700 text-[24px] font-semibold leading-none">4K UHD</span>
                      <span class="px-2 py-1 rounded-lg bg-emerald-100 text-emerald-700 text-[24px] font-semibold leading-none">IPS-Panel</span>
                      <span class="px-2 py-1 rounded-lg bg-red-100 text-red-600 text-[24px] font-semibold leading-none">USB-C</span>
                      <span class="px-2 py-1 rounded-lg bg-orange-100 text-orange-600 text-[24px] font-semibold leading-none">99% sRGB</span>
                      <span class="px-2 py-1 rounded-lg bg-emerald-100 text-emerald-700 text-[24px] font-semibold leading-none">32 Zoll</span>
                    </div>
                  </div>
                </TabPanel>

                <TabPanel value="spezifikationen" class="px-4 py-4">
                  <p class="text-[14px] text-slate-600">Technische Details folgen in Kürze.</p>
                </TabPanel>

                <TabPanel value="bewertungen" class="px-4 py-4">
                  <p class="text-[14px] text-slate-600">Noch keine Bewertungen vorhanden.</p>
                </TabPanel>
              </TabPanels>
            </Tabs>

            <div class="flex justify-end gap-2 px-4 py-2">
              <Button label="Merken" severity="secondary" />
              <Button label="In den Warenkorb" icon="pi pi-shopping-cart" />
            </div>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'

const state = reactive({
  activeTab: 'beschreibung'
})
</script>