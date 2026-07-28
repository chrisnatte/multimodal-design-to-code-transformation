<template>
  <div class="w-[488px] rounded-xl bg-white shadow-md flex flex-col overflow-hidden border border-surface-200">
    <!-- Header -->
    <div class="h-[124px] bg-gradient-to-br from-slate-900 to-slate-800 flex flex-col items-center justify-center p-2.5">
      <div class="flex flex-col items-center gap-1">
        <span class="font-medium text-[17.5px] text-white">ProDesk X500</span>
        <span class="font-light text-xs text-white/70">Workstation Monitor</span>
      </div>
    </div>

    <!-- Body -->
    <div class="flex flex-col px-1 pb-1 pt-2 gap-2">
      <!-- Tabs -->
      <Tabs value="0">
        <TabList>
          <Tab value="0">Beschreibung</Tab>
          <Tab value="1">Spezifikationen</Tab>
          <Tab value="2">Bewertungen</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0">
            <div class="flex flex-col gap-4 text-sm text-surface-700">
              <p class="leading-relaxed">
                Der ProDesk X500 ist ein professioneller Workstation-Monitor mit 32 Zoll IPS-Display und einer Auflösung von 4K UHD. Entwickelt für kreative Profis und Entwickler, die höchste Farbtreue und ergonomisches Arbeiten benötigen.
              </p>
              <p class="leading-relaxed text-surface-500">
                Mit 99% sRGB-Abdeckung, werkseitig kalibriertem Panel und USB-C-Thunderbolt-Anschluss bietet er alles für anspruchsvolle Workloads.
              </p>
              <div class="flex flex-wrap gap-2 mt-2">
                <Tag value="4K UHD" class="bg-blue-100 text-blue-700 font-medium" />
                <Tag value="IPS-Panel" class="bg-green-100 text-green-700 font-medium" />
                <Tag value="USB-C" class="bg-red-100 text-red-700 font-medium" />
                <Tag value="99% sRGB" class="bg-orange-100 text-orange-700 font-medium" />
                <Tag value="32 Zoll" class="bg-emerald-100 text-emerald-700 font-medium" />
              </div>
            </div>
          </TabPanel>
          <TabPanel value="1">
            <p class="m-0 text-sm">Noch keine Spezifikationen vorhanden.</p>
          </TabPanel>
          <TabPanel value="2">
            <p class="m-0 text-sm">Noch keine Bewertungen vorhanden.</p>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <!-- Footer Actions -->
      <div class="flex justify-end gap-2 px-4 py-2 mt-2 border-t border-surface-100">
        <Button label="Merken" severity="secondary" variant="text" class="bg-surface-100 text-surface-700 font-medium" />
        <Button label="In den Warenkorb" icon="pi pi-shopping-cart" class="bg-emerald-500 hover:bg-emerald-600 border-none font-medium text-white" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
import Button from 'primevue/button'
import Tag from 'primevue/tag'
</script>