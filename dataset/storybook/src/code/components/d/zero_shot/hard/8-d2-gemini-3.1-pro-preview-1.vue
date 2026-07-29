<template>
  <div class="p-6 flex justify-center bg-white">
    <Card class="w-full max-w-[536px] overflow-hidden shadow-sm rounded-xl border border-surface-200">
      <template #header>
        <div class="bg-[#1a2642] py-10 flex flex-col items-center justify-center text-center">
          <h2 class="text-white text-lg font-medium m-0 mb-1">ProDesk X500</h2>
          <span class="text-slate-400 text-xs font-light">Workstation Monitor</span>
        </div>
      </template>

      <template #content>
        <Tabs v-model:value="activeTab">
          <TabList>
            <Tab value="0">Beschreibung</Tab>
            <Tab value="1">Spezifikationen</Tab>
            <Tab value="2">Bewertungen</Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="0">
              <div class="flex flex-col gap-4 text-slate-700 text-sm leading-relaxed mt-2">
                <p class="m-0">
                  Der ProDesk X500 ist ein professioneller Workstation-Monitor mit 32 Zoll IPS-Display und einer Auflösung von 4K UHD. Entwickelt für kreative Profis und Entwickler, die höchste Farbtreue und ergonomisches Arbeiten benötigen.
                </p>
                <p class="m-0 text-slate-500">
                  Mit 99% sRGB-Abdeckung, werkseitig kalibriertem Panel und USB-C-Thunderbolt-Anschluss bietet er alles für anspruchsvolle Workloads.
                </p>
                <div class="flex flex-wrap gap-2 mt-2">
                  <span class="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-bold">4K UHD</span>
                  <span class="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs font-bold">IPS-Panel</span>
                  <span class="px-2 py-1 bg-red-100 text-red-800 rounded text-xs font-bold">USB-C</span>
                  <span class="px-2 py-1 bg-orange-100 text-orange-800 rounded text-xs font-bold">99% sRGB</span>
                  <span class="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs font-bold">32 Zoll</span>
                </div>
              </div>
            </TabPanel>
            <TabPanel value="1">
              <p class="m-0 text-slate-600 text-sm">Spezifikationen nicht verfügbar.</p>
            </TabPanel>
            <TabPanel value="2">
              <p class="m-0 text-slate-600 text-sm">Noch keine Bewertungen vorhanden.</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </template>

      <template #footer>
        <div class="flex justify-end gap-3 pt-2">
          <Button 
            label="Merken" 
            severity="secondary" 
            class="bg-slate-100 hover:bg-slate-200 text-slate-700 border-none font-medium px-4 py-2" 
          />
          <Button 
            label="In den Warenkorb" 
            icon="pi pi-cart-plus" 
            severity="success" 
            class="bg-[#10b981] hover:bg-[#059669] border-none font-medium px-4 py-2" 
          />
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Card from 'primevue/card';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import Button from 'primevue/button';

const activeTab = ref('0');
</script>