<template>
  <div class="min-h-screen bg-gray-100 p-6 flex items-start justify-center">
    <Card class="w-full max-w-[560px] rounded-xl overflow-hidden shadow-sm">
      <template #header>
        <div class="h-44 bg-gradient-to-br from-slate-900 to-blue-900 flex flex-col items-center justify-center gap-1">
          <h2 class="text-white text-[36px] font-medium leading-tight">ProDesk X500</h2>
          <p class="text-slate-300 text-lg font-light">Workstation Monitor</p>
        </div>
      </template>

      <template #content>
        <div class="flex flex-col gap-2 px-1">
          <Tabs v-model:value="state.activeTab">
            <TabList>
              <Tab value="beschreibung" class="font-bold">Beschreibung</Tab>
              <Tab value="spezifikationen" class="font-bold">Spezifikationen</Tab>
              <Tab value="bewertungen" class="font-bold">Bewertungen</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="beschreibung">
                <div class="flex flex-col gap-3 px-4 py-3">
                  <p class="text-slate-700 text-[33px] leading-snug">
                    Der ProDesk X500 ist ein professioneller&nbsp; Workstation-Monitor mit 32 Zoll IPS-Display und einer Auflösung von 4K&nbsp; UHD. Entwickelt für kreative Profis und Entwickler, die höchste&nbsp; Farbtreue und ergonomisches Arbeiten benötigen.
                  </p>
                  <p class="text-slate-500 text-[27px] leading-snug">
                    Mit 99% sRGB-Abdeckung, werkseitig kalibriertem Panel und USB-C-Thunderbolt-Anschluss bietet er alles für anspruchsvolle Workloads.
                  </p>
                  <div class="flex flex-wrap gap-2">
                    <span class="px-3 py-1 rounded-lg bg-cyan-100 text-cyan-700 text-[24px] font-semibold">4K UHD</span>
                    <span class="px-3 py-1 rounded-lg bg-emerald-100 text-emerald-700 text-[24px] font-semibold">IPS-Panel</span>
                    <span class="px-3 py-1 rounded-lg bg-red-100 text-red-600 text-[24px] font-semibold">USB-C</span>
                    <span class="px-3 py-1 rounded-lg bg-orange-100 text-orange-600 text-[24px] font-semibold">99% sRGB</span>
                    <span class="px-3 py-1 rounded-lg bg-emerald-100 text-emerald-700 text-[24px] font-semibold">32 Zoll</span>
                  </div>
                </div>
              </TabPanel>
              <TabPanel value="spezifikationen">
                <div class="px-4 py-3">
                  <p class="text-slate-600 text-sm m-0">Technische Spezifikationen sind derzeit nicht verfügbar.</p>
                </div>
              </TabPanel>
              <TabPanel value="bewertungen">
                <div class="px-4 py-3">
                  <p class="text-slate-600 text-sm m-0">Noch keine Bewertungen vorhanden.</p>
                </div>
              </TabPanel>
            </TabPanels>
          </Tabs>

          <div class="flex justify-end gap-2 px-4 py-2">
            <Button label="Merken" severity="secondary" />
            <Button label="In den Warenkorb" icon="pi pi-shopping-cart" />
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Card from 'primevue/card'
import Button from 'primevue/button'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'

const state = reactive({
  activeTab: 'beschreibung'
})
</script>